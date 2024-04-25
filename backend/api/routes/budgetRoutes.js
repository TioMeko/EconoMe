import { Router } from "express";
import { createBudget, getAllBudgets, getBudget, updateBudget, deleteBudget } from "../controllers/budgetController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Budgets
 *   description: Budget management endpoints
 */

/**
 * @swagger
 * /api/budgets:
 *   get:
 *     summary: Retrieves all budgets
 *     description: Returns a list of all budget entries.
 *     tags: [Budgets]
 *     responses:
 *       200:
 *         description: A list of budgets.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Budget'
 *   post:
 *     summary: Creates a new budget entry
 *     description: Adds a new budget entry to the database.
 *     tags: [Budgets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Budget'
 *     responses:
 *       201:
 *         description: Budget entry created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Budget'
 */

/**
 * @swagger
 * /api/budgets/{id}:
 *   get:
 *     summary: Retrieves a budget entry by ID
 *     description: Returns a single budget entry.
 *     tags: [Budgets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the budget entry to retrieve.
 *     responses:
 *       200:
 *         description: A single budget entry.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Budget'
 *       404:
 *         description: Entry not found.
 *   put:
 *     summary: Updates a budget entry by ID
 *     description: Modifies an existing budget entry in the database.
 *     tags: [Budgets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the budget entry to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Budget'
 *     responses:
 *       200:
 *         description: Updated budget entry.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Budget'
 *       404:
 *         description: Entry not found.
 *   delete:
 *     summary: Deletes a budget entry by ID
 *     description: Removes a budget entry from the database.
 *     tags: [Budgets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the budget entry to delete.
 *     responses:
 *       200:
 *         description: Entry deleted successfully.
 *       404:
 *         description: Entry not found.
 */

router.get('/', getAllBudgets);
router.post('/', createBudget);
router.get('/:id', getBudget);
router.put('/:id', updateBudget);
router.delete('/:id', deleteBudget);

export default router;