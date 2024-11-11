
import express from "express";
import * as destController from "../controllers/dest_controllers.js";
const router = express.Router();

router.route("/").get(destController.getAlldestinations)
                 .post(destController.adddestination);
router.route("/:id").get(destController.getdestinationById)
                    .delete(destController.deletedestinationById)
                    .patch(destController.updatedestination);
export default router;                    
