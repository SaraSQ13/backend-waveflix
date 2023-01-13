import { Router } from "express";
const router = Router();


/* GET home page. */
router.get("/", function (req, res, next) {
   return res.send("Bienevenidos a mi aplicacion de películas");
});

export default router;