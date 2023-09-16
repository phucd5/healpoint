import User from "../models/User.js";
import {
	handleSuccess,
	handleServerError,
	handleNotFound,
} from ".../utils/handlers.js";

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
		const user = await User.findById(req.params.userId);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		handleSuccess(res, user.healthData);
	} catch (error) {
		handleServerError(res, err);
	}
};

export default router;
