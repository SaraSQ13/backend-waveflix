import { Router } from "express";
const router = Router();


import MovieController from "../controllers/MovieController.js";
import verifyToken from "../middlewares/verifyToken.js";

/* GET users listing. */
router.get("/", MovieController.getAll);
router.get("/:id", MovieController.getById);

export default router;