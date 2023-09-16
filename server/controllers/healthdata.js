import HealthData from "../models/HealthData.js";
import {
	handleNotFound,
	handleSuccess,
	handleServerError,
} from "../utils/handlers.js";

export const updateHealthDataById = async (req, res) => {
	const { id } = req.params;
	const { lifestyle, conditions } = req.body;

	try {
		const updateFields = {};

		if (lifestyle) updateFields.lifestyle = lifestyle;
		if (conditions) updateFields.conditions = conditions;

		updateFields.updatedAt = Date.now();

		const healthData = await HealthData.findByIdAndUpdate(
			id,
			updateFields,
			{
				new: true,
			}
		);

		if (!healthData) {
			return handleNotFound(res, "HealthData not found");
		}

		return handleSuccess(res, healthData);
	} catch (err) {
		handleServerError(res, err);
	}
};

export const getLifestyleData = async (req, res) => {
	const { id } = req.params;

	try {
		const healthData = await HealthData.findById(id);

		if (!healthData) {
			return handleNotFound(res, "Health Data not found.");
		}

		return handleSuccess(res, healthData.lifestyle);
	} catch (err) {
		return handleServerError(res, "Internal server error");
	}
};

export const getConditionsData = async (req, res) => {
	const { id } = req.params;

	try {
		const healthData = await HealthData.findById(id);

		if (!healthData) {
			return handleNotFound(res, "Health Data not found.");
		}

		return handleSuccess(res, healthData.conditions);
	} catch (err) {
		return handleServerError(res, "Server error");
	}
};

export const deleteHealthDataById = async (req, res) => {
	const { id } = req.params;

	try {
		const deletedHealthData = await HealthData.findByIdAndRemove(id);

		if (!deletedHealthData) {
			return handleNotFound(res, "Health Data not found.");
		}

		return handleSuccess(res, { message: "Sucessfuly deleted" });
	} catch (err) {
		console.error(err);
		return handleServerError(res, "Server error");
	}
};
