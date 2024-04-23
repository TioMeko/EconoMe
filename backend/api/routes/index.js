import { Router } from "express";
import { authenticateToken } from "../../middleware/middleware.js"
import userRoutes from "./userRoutes.js";
import accountRoutes from "./accountRoutes.js";
import budgetRoutes from "./budgetRoutes.js";
import savingsRoutes from "./savingsRoutes.js";
import transactionRoutes from "./transactionRoutes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/accounts", authenticateToken, accountRoutes);
router.use("/budgets", authenticateToken, budgetRoutes);
router.use("/savings", authenticateToken, savingsRoutes);
router.use("/transactions", authenticateToken, transactionRoutes);

export default router;
