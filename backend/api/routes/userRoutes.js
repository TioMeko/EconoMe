import { Router } from "express";
import { authenticateToken } from "../../utils/middleware/index.js"
import { getUser, createUser, updateUser, deleteUser, loginUser } from "../controllers/userController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management endpoints
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '201':
 *         description: User successfully registered.
 *       '400':
 *         description: Bad request. Invalid user data.
 *     security: []
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Log in an existing user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               username: smithingJohn
 *               password: hashedpasswords
 *             properties:
 *               username:
 *                 type: string
 *                 format: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User successfully logged in. Returns the user details and token.
 *       '401':
 *         description: Unauthorized. Invalid credentials.
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Server error
 *     security: []
 */

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to retrieve
 *     responses:
 *       '200':
 *         description: OK. Returns the user details.
 *       '404':
 *         description: User not found.
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: OK. Returns the updated user details.
 *       '404':
 *         description: User not found.
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to delete
 *     responses:
 *       '204':
 *         description: User successfully deleted.
 *       '404':
 *         description: User not found.
 */

router.get("/:id", authenticateToken, getUser);
router.post("/register", createUser);
router.put("/:id", authenticateToken, updateUser);
router.delete("/:id", authenticateToken, deleteUser);
router.post("/login", loginUser);

export default router;