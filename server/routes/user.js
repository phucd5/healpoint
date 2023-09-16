import express from "express";

const router = express.Router();

router.get("/:userId", getUserById);
router.get("/:email/email", getUserByEmail);
router.get("/:healthId/healthdata", getUserHealthData);
