import User from "../models/User.js";
import bcrypt from "bcrypt";
import {
	handleSuccess,
	handleBadRequest,
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
		res.status(500).json({ message: err.message });
	}
};
