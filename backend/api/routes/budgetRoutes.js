import { Router } from "express";
import { createBudget, getAllBudgets, getBudget, updateBudget, deleteBudget } from "../controllers/budgetController.js";

const router = Router();

router.get('/', getAllBudgets);
router.post('/', createBudget);
router.get('/:id', getBudget);
router.put('/:id', updateBudget);
router.delete('/:id', deleteBudget);

export default router;