import express from "express";
import * as voyController from "../controllers/voy_controllers.js";
const router = express.Router();

router.route("/").get(voyController.getAllvoyageurs)
                .post(voyController.addvoyageur);
router.route("/:id").get(voyController.getvoyageurById)
                    .delete(voyController.deletevoyageurById)
                    .patch(voyController.updatevoyageur);

export default router;