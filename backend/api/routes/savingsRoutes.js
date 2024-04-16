import { Router } from "express";
import { createSavings, getAllSavings, getSavings, updateSavings, deleteSavings } from "../controllers/savingsController.js";

const router = Router();

router.get('/', getAllSavings);
router.post('/', createSavings);
router.get('/:id', getSavings);
router.put('/:id', updateSavings);
router.delete('/:id', deleteSavings);

export default router;