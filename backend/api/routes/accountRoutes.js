import { Router } from "express";
import { createAccount, getAllAccounts, getAccount, updateAccount, deleteAccount } from "../controllers/accountController.js";

const router = Router();

router.get('/', getAllAccounts);
router.post('/', createAccount);
router.get('/:id', getAccount);
router.put('/:id', updateAccount);
router.delete('/:id', deleteAccount);

export default router;