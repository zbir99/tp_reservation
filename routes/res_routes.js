
import express from "express";
import * as resController from "../controllers/res_controllers.js";
const router=express.Router();

router.route("/").get(resController.getAllreservations)
                .post(resController.addreservation);
router.route("/:id").get(resController.getreservationById)
                    .delete(resController.deletereservationById)
                    .patch(resController.updatereservation);
export default router;