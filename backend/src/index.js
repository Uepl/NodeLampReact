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
const fs = require("fs"); // Import fs for file operations
const path = require("path"); // Import path

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const logFilePath = process.env.LOG_FILE_PATH || path.resolve("./log/access.log");
const accessLogStream = createWriteStream(logFilePath, { flags: "a" });
app.use(morgan("dev", { stream: accessLogStream }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

readdirSync("./src/routes").map((c) => app.use("/api", require("./routes/" + c)));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send({ message: "success" });
  logToFile("info", "Hello this is express");
});

app.listen(PORT, () => {
  logToFile("info", `Server has been running on PORT ${PORT}`);
  logToFile("info", `loggin  path: combined.log and error.log`);
});

app.get("/news", (req, res) => {
  res.send({ message: "this is news" });
  logToFile("info", "i dont know what to do here, yet");
});

app.get("/about", (req, res) => {
  res.send({ message: "this is about" });
  logToFile("info", "this is about");
});

const JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(64).toString("hex");
const prisma = new PrismaClient();

// Function to log to file
function logToFile(level, message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;

  const logDirectory = path.join(__dirname, "logs"); // Create 'logs' directory if it doesn't exist
  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
  }

  fs.appendFile(path.join(logDirectory, "combined.log"), logMessage, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });

  if (level === "error") {
    fs.appendFile(path.join(logDirectory, "error.log"), logMessage, (err) => {
      if (err) {
        console.error("Error writing to error log file:", err);
      }
    });
  }
}

// Login API
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    logToFile("info", `[LOGIN] Attempt: email=${email}`);

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      logToFile("warn", `[LOGIN] Failed: User not found, email=${email}`);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      logToFile("warn", `[LOGIN] Failed: Password mismatch, email=${email}`);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    logToFile("info", `[LOGIN] Success: email=${email}, userId=${user.id}`);

    res.json({ token, message: "Login successful" });
  } catch (error) {
    logToFile("error", `[LOGIN] Error: email=${req.body.email || "unknown"}, error=${error.message}, stack=${error.stack}`);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Registration API
app.post("/api/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    logToFile("info", `[REGISTER] Attempt: email=${email}, name=${name}`);

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      logToFile("warn", `[REGISTER] Failed: Email already exists, email=${email}`);
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        name: name,
      },
    });

    logToFile("info", `[REGISTER] Success: email=${email}, userId=${newUser.id}`);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    logToFile("error", `[REGISTER] Error: email=${req.body.email || "unknown"}, error=${error.message}, stack=${error.stack}`);
    res.status(500).json({ message: "Internal server error" });
  }
});