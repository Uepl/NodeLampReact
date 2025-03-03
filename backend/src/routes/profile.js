const express = require("express");
const router = express.Router();
const {
  read,
  listUser,
  createUser,
  lockin,
} = require("../../controller/profile");

router.get("/", read);

/**
 * @swagger
 * /:
 *   get:
 *     summary: แสดงข้อมูลของ Users ทั้งหมด
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Get all users
 */
router.post("/api/register", createUser);
/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Create a new user
 *     description: This endpoint creates a new user in the database using Prisma.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - name
 *             properties:
 *               email:
 *                 type: string
 *                 example: usart@gmail.com
 *                 description: The email address of the user.
 *               password:
 *                 type: string
 *                 example: user
 *                 description: The password for the user.
 *               name:
 *                 type: string
 *                 example: usart
 *                 description: The full name of the user.
 *     responses:
 *       201:
 *         description: User registered successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User registered successfully"
 *       400:
 *          description: Email already exists
 *          content:
 *           application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Email already exists"
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */

router.post("/api/login", lockin);
/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: login
 *     description: login pissma
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: usart@gmail.com
 *                 description: The email address of the user.
 *               password:
 *                 type: string
 *                 example: user
 *                 description: The password for the user.
 *     responses:
 *       201:
 *         description: Login successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Login successful"
 *                 token:
 *                   type: string
 *                   example: "thisisatoken"
 *       401:
 *          description: Email already exists
 *          content:
 *           application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Email already exists"
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */

router.post("/api/download/:id");
/**
 * @swagger
 * /api/download/{id}:
 *  post:
 *      summary: Increment download count
 *      description: Increments the download count for a specific ID.
 *      tags:
 *          - Download
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: integer
 *              minimum: 1
 *          required: true
 *          description: ID of the download record.
 *      responses:
 *          200:
 *              description: Download count incremented successfully.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              d:
 *                                  type: integer
 *                                  example: 123
 *                                  count:
 *                                      type: integer
 *                                      example: 10
 *          404:
 *              description: Download record not found.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  example: "Download record not found"
 *          500:
 *              description: Internal server error.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: string
 *                                  example: "Internal server error"
 */
module.exports = router;
