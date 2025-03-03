const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 *  @swagger
 *  /api/
 *    get:
 *      summary: Hello API
 *      response:
 *        200:
 *          description: Successful response
 *        500:
 *          description: Inter server error
 *
 */
exports.read = (req, res) => {
  try {
    res.send("Hello world");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
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

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.lockin = async (req,res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ token, message: "Login successful" });
  } catch (error) {
      res.status(500).json({ message: "Internal server error" })
  }
}

exports.download = async (req, res) => {
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
    res.status(500).json({ error: "Internal server error" });
  }
};