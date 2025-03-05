const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { readdirSync, createWriteStream } = require("fs");
const { swaggerUi, swaggerSpec } = require("../config/swagger.js");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const logFilePath = path.resolve("./log/access.log");
const accessLogStream = createWriteStream(logFilePath, { flags: "a" });
app.use(morgan("dev", { stream: accessLogStream }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

readdirSync("./src/routes").map((c) =>
  app.use("/api", require("./routes/" + c))
);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send({ message: "success" });
  logToFile("info", "Hello this is express");
});

app.listen(PORT, () => {
  logToFile("info", `Server has been running on PORT ${PORT}`);
  logToFile("info", `loggin  path: combined.log and error.log`);
});

const JWT_SECRET =
  process.env.JWT_SECRET || crypto.randomBytes(64).toString("hex");
const prisma = new PrismaClient();

// Function to log to file
function logToFile(level, message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;

  // Use logFilePath directly for combined.log
  fs.appendFile(
    path.join(path.dirname(logFilePath), "combined.log"),
    logMessage,
    (err) => {
      if (err) {
        console.error("Error writing to combined.log:", err);
      }
    }
  );

  if (level === "error") {
    // Use logFilePath directly for error.log
    fs.appendFile(
      path.join(path.dirname(logFilePath), "error.log"),
      logMessage,
      (err) => {
        if (err) {
          console.error("Error writing to error.log:", err);
        }
      }
    );
  }
}

// Login API
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    logToFile("info", `[LOGIN] Attempt: email=${email}`);


    let user = await prisma.students.findUnique({
      where: { email: email },
    });
    let userType = "student";

    if (!user) {
      user = await prisma.teachers.findUnique({
        where: { email: email },
      });
      userType = "teacher";
    }

    if (!user) {
      user = await prisma.visitors.findUnique({
        where: { email: email },
      });
      userType = "visitor";
    }
    if (!user) {
      logToFile("warn", `[LOGIN] Failed: User not found, email=${email}`);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.passwords);
    if (!passwordMatch) {
      logToFile("warn", `[LOGIN] Failed: Password mismatch, email=${email}`);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.email, email: user.email, userType: userType }, JWT_SECRET, {
      expiresIn: "1h",
    });

    logToFile("info", `[LOGIN] Success: email=${email}, userType=${userType}`);

    res.status(201).json({ token, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    logToFile("error", `[LOGIN] Error: email=${req.body.email || "unknown"}, error=${error.message}, stack=${error.stack}`);
  }
});

// Registration API
app.post("/api/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    logToFile("info", `[REGISTER] Attempt: email=${email}`);

    const existingStudent = await prisma.students.findUnique({
      where: { email: email },
    });
    const existingTeacher = await prisma.teachers.findUnique({
      where: { email: email },
    });
    const existingVisitor = await prisma.visitors.findUnique({
      where: { email: email },
    });
    if (existingStudent || existingTeacher || existingVisitor) {
      logToFile(
        "warn",
        `[REGISTER] Failed: Email already exists, email=${email}`
      );
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await prisma.visitors.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });

    logToFile(
      "info",
      `[REGISTER] Success: email=${email}, userId=${newUser.id}`
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    logToFile(
      "error",
      `[REGISTER] Error: email=${req.body.email || "unknown"}, error=${
        error.message
      }, stack=${error.stack}`
    );
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/download/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const parseId = parseInt(id)
    if(isNaN(parseId)) {
      return res.status(400).json({ error: "Invalid ID parameter" });
    }

    const updatedDownload = await prisma.downloaded.update({
      where: {
        id: parseId,
      },
      data: {
        count: {
          increment: 1,
        },
      },
    });

    if (updatedDownload) {
      res.status(200).json(updatedDownload);
    } else {
      res.status(404).json({ error: "Download record not found" });
    }
  } catch (error) {
    console.error("Error incrementing download count:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
