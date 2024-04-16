import { Router } from "express";
import userRoutes from "./userRoutes.js";
import accountRoutes from "./accountRoutes.js";
// import budgetRoutes from "./budgetRoutes.js";
// import savingsRoutes from "./savingsRoutes.js";
// import transactionRoutes from "./transactionRoutes.js";

const router = Router();

router.use('/users', userRoutes);
router.use('/accounts', accountRoutes);

export default router;