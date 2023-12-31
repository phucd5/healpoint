import User from "../models/User.js";
import express from "express";
import {
	handleSuccess,
	handleServerError,
	handleNotFound,
} from "../utils/handlers.js";

const router = express.Router();

export const getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.userId);

		if (!user) {
			return handleNotFound(res, "User not found");
		}

		handleSuccess(res, user);
	} catch (err) {
		handleServerError(res, err);
	}
};

export const getUserByEmail = async (req, res) => {
	try {
		const user = await User.findOne({ email: req.params.email });
		if (!user) {
			return handleNotFound(res, "User not found");
		}
		handleSuccess(res, user);
	} catch (err) {
		handleServerError(res, err);
	}
};

export const getUserHealthData = async (req, res) => {
	try {
		const user = await User.findById(req.params.userId).populate(
			"healthData"
		);

		if (!user) {
			return handleNotFound(res, "User not found");
		}

		handleSuccess(res, user.healthData);
	} catch (error) {
		handleServerError(res, error);
	}
};

export const deleteUser = async (req, res) => {
	try {
		const userId = req.params.userId;

		const user = await User.findByIdAndRemove(userId);
		if (!user) {
			return handleNotFound(res, "User not found");
		}

		return handleSuccess(res, { message: "User deleted successfully" });
	} catch (error) {
		console.error(error);
		return handleError(res, "Server Error");
	}
};

export default router;
