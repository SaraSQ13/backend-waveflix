import { Router } from "express";
const router = Router();


import UserController from "../controllers/UserController.js";
import verifyToken from "../middlewares/verifyToken.js";
import isSuperAdmin from "../middlewares/isSuperAdmin.js"

/* GET users listing. */
router.get("/", verifyToken, isSuperAdmin, UserController.getAll);

export default router;