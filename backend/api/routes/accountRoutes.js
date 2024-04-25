import { Router } from "express";
import { createAccount, getAllAccounts, getAccount, updateAccount, deleteAccount } from "../controllers/accountController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: Account management endpoints
 */

/**
 * @swagger
 * /accounts:
 *   get:
 *     summary: Retrieves all accounts
 *     description: Returns a list of all account entries.
 *     tags: [Accounts]
 *     responses:
 *       200:
 *         description: A list of accounts.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Account'
 *   post:
 *     summary: Creates a new account
 *     description: Adds a new account to the database.
 *     tags: [Accounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Account'
 *     responses:
 *       201:
 *         description: Account created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Account'
 */

/**
 * @swagger
 * /accounts/{id}:
 *   get:
 *     summary: Retrieves an account by ID
 *     description: Returns a single account entry.
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the account to retrieve.
 *     responses:
 *       200:
 *         description: A single account.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Account'
 *       404:
 *         description: Account not found.
 *   put:
 *     summary: Updates an account by ID
 *     description: Modifies an existing account in the database.
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the account to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Account'
 *     responses:
 *       200:
 *         description: Account updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Account'
 *       404:
 *         description: Account not found.
 *   delete:
 *     summary: Deletes an account by ID
 *     description: Removes an account from the database.
 *     tags: [Accounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the account to delete.
 *     responses:
 *       200:
 *         description: Account deleted successfully.
 *       404:
 *         description: Account not found.
 */

router.get('/', getAllAccounts);
router.post('/', createAccount);
router.get('/:id', getAccount);
router.put('/:id', updateAccount);
router.delete('/:id', deleteAccount);

export default router;