import express from "express";
import {
	getHealthData,
	putHealthData,
	deleteHealthData,
	getCondition,
	getLifestyle,
} from "../controllers/healthdata.js";

const router = express.Router();

router.get("/conditions", getCondition);
router.get("/lifestyle", getLifestyle);
router.get("/healthdata", getHealthData);
router.put("/:id", putHealthData);
router.delete("/:id", deleteHealthData);
