import mongoose from "mongoose";

const healthDataSchema = new mongoose.Schema({
	lifestyle: {
		type: [],
		required: false,
		default: [],
	},
	conditions: {
		type: [],
		required: false,
		default: [],
	},
});

const HealthData = mongoose.model("HealthData", healthDataSchema);
export default HealthData;
