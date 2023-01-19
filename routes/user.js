import { Router } from "express";
const router = Router();


import UserController from "../controllers/UserController.js";
import verifyToken from "../middlewares/verifyToken.js";
import isSuperAdmin from "../middlewares/isSuperAdmin.js"

/* GET users listing. */
router.get("/", verifyToken, isSuperAdmin, UserController.getAll);
router.get("/users/:name", UserController.getByName);
router.patch("/users/:userId/rent/:movieId",UserController.rentUserMovies);
router.patch("/users/:userId/delete/:movieId",UserController.deleteUserMovies);
router.delete("/delete/:id", UserController.deleteById);

//delete users/detele:id
// delete users/:id/deletemeMovie/:movieID


export default router;