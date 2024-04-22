import { Router } from "express";
import { getUser, createUser, updateUser, deleteUser, loginUser } from "../controllers/userController.js";

const router = Router();

router.get("/:id", getUser);
router.post("/register", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/login", loginUser);

export default router;