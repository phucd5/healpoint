import express from "express";
import {
	updateHealthDataById,
	getLifestyleData,
	getConditionsData,
	deleteHealthDataById,
} from "../controllers/healthdata.js";

const router = express.Router();

router.get("/:id/conditions", getConditionsData);
router.get("/:id/lifestyle", getLifestyleData);
router.put("/:id", updateHealthDataById);
router.delete("/:id", deleteHealthDataById);

export default router;
