import User from "../models/User.js";
import bcrypt from "bcrypt";
import {
	handleSuccess,
	handleBadRequest,
	handleServerError,
	handleNotFound,
} from ".../utils/handlers.js";

export const register = async (req, res) => {
	try {
		const { firstName, lastName, email, password } = req.body;
		const salt = await bcrypt.genSalt();
		const passwordHash = await bcrypt.hash(password, salt);

		const newUser = new User({
			firstName,
			lastName,
			email,
			password: passwordHash,
		});

		//createnew health data
		//addit in

		const savedUser = await newUser.save();
		handleSuccess(res, savedUser);
	} catch (err) {
		handleServerError(res, err);
	}
};

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email: email });

		if (!user) {
			return handleNotFound(res);
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return handleBadRequest(
				res,
				"Password/Email is incorrect. Please try again."
			);
		}

		delete user.password;
		handleSuccess(res, { token, user });
	} catch (err) {
		handleServerError(res, err);
	}
};
