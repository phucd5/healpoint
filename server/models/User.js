import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	healthData: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "HealthData",
		required: false,
	},
});

const User = mongoose.model("User", UserSchema);
export default User;
