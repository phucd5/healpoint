import express from "express";

import {
	getUserById,
	getUserByEmail,
	getUserHealthData,
} from "../controllers/user";

const router = express.Router();

router.get("/:userId", getUserById);
router.get("/:email/email", getUserByEmail);
router.get("/:userId/healthdata", getUserHealthData);
