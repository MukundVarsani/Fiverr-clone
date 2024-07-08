import express from "express";
import  deletUser ,{getUser}  from "../controllers/user.controller.js"
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();
router.delete("/:id" ,verifyToken, deletUser)
router.get("/:id" ,verifyToken, getUser)

export default router;
