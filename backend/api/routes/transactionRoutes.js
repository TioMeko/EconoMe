import { Router } from "express";
import { createTransaction, getAllTransactions, getTransaction, updateTransaction, deleteTransaction } from "../controllers/transactionController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: Transaction management endpoints
 */

/**
 * @swagger
 * paths:
 *   /api/transactions:
 *     post:
 *       summary: Creates a new transaction
 *       tags: [Transactions]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transaction'
 *       responses:
 *         201:
 *           description: The transaction has been successfully created.
 *     get:
 *       security:
 *       - bearerAuth: []
 *       summary: Retrieves a list of transactions
 *       tags: [Transactions]
 *       responses:
 *         200:
 *           description: A list of all transactions
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Transaction'
 */

/**
 * @swagger
 * paths:
 *   /api/transactions/{id}:
 *     get:
 *       summary: Retrieves a transaction by ID
 *       tags: [Transactions]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The transaction ID
 *       responses:
 *         200:
 *           description: A single transaction
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Transaction'
 *     put:
 *       summary: Updates a transaction by ID
 *       tags: [Transactions]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The transaction ID
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transaction'
 *       responses:
 *         200:
 *           description: The transaction has been successfully updated.
 *     delete:
 *       summary: Deletes a transaction by ID
 *       tags: [Transactions]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The transaction ID
 *       responses:
 *         200:
 *           description: The transaction has been successfully deleted.
 */

router.get('/', getAllTransactions);
router.post('/', createTransaction);
router.get('/:id', getTransaction);
router.put('/:id', updateTransaction);
router.delete('/:id', deleteTransaction);

export default router;