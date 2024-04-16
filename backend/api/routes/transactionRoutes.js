import { Router } from "express";
import { createTransaction, getAllTransactions, getTransaction, updateTransaction, deleteTransaction } from "../controllers/transactionController.js";

const router = Router();

router.get('/', getAllTransactions);
router.post('/', createTransaction);
router.get('/:id', getTransaction);
router.put('/:id', updateTransaction);
router.delete('/:id', deleteTransaction);

export default router;