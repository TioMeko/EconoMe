import { Router } from "express";
import { authenticateToken } from "../../middleware/middleware.js"
import { getUser, createUser, updateUser, deleteUser, loginUser } from "../controllers/userController.js";

const router = Router();

router.get("/:id", authenticateToken, getUser);
router.post("/register", createUser);
router.put("/:id", authenticateToken, updateUser);
router.delete("/:id", authenticateToken, deleteUser);
router.post("/login", loginUser);

export default router;