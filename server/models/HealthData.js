import mongoose from "mongoose";

const healthDataSchema = new mongoose.Schema({
	lifestyle: {
		type: [],
		required: false,
	},
	conditions: {
		type: [],
		required: false,
	},
});

const HealthData = mongoose.model("HealthData", healthDataSchema);
export default HealthData;
