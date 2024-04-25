import { Router } from "express";
import { createSavings, getAllSavings, getSavings, updateSavings, deleteSavings } from "../controllers/savingsController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Savings
 *   description: Savings management endpoints
 */

/**
 * @swagger
 * /api/savings:
 *   get:
 *     summary: Retrieves all savings
 *     description: Returns a list of all savings entries.
 *     tags: [Savings]
 *     responses:
 *       200:
 *         description: A list of savings.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SavingsGoal'
 *   post:
 *     summary: Creates a new savings entry
 *     description: Adds a new savings entry to the database.
 *     tags: [Savings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SavingsGoal'
 *     responses:
 *       201:
 *         description: Savings entry created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SavingsGoal'
 */

/**
 * @swagger
 * /api/savings/{id}:
 *   get:
 *     summary: Retrieves a savings entry by ID
 *     description: Returns a single savings entry.
 *     tags: [Savings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the savings entry to retrieve.
 *     responses:
 *       200:
 *         description: A single savings entry.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SavingsGoal'
 *       404:
 *         description: Entry not found.
 *   put:
 *     summary: Updates a savings entry by ID
 *     description: Modifies an existing savings entry in the database.
 *     tags: [Savings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the savings entry to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SavingsGoal'
 *     responses:
 *       200:
 *         description: Updated savings entry.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SavingsGoal'
 *       404:
 *         description: Entry not found.
 *   delete:
 *     summary: Deletes a savings entry by ID
 *     description: Removes a savings entry from the database.
 *     tags: [Savings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the savings entry to delete.
 *     responses:
 *       200:
 *         description: Entry deleted successfully.
 *       404:
 *         description: Entry not found.
 */

router.get('/', getAllSavings);
router.post('/', createSavings);
router.get('/:id', getSavings);
router.put('/:id', updateSavings);
router.delete('/:id', deleteSavings);

export default router;