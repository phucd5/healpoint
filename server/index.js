import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import healthRoutes from "./routes/healthdata.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(
	cors({
		origin: "*",
	})
);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/health-data", healthRoutes);

const PORT = process.env.PORT || 6001;
console.log(process.env.MONGO_URL);
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () =>
			console.log(`Connected to Database at Port: ${PORT}`)
		);
	})
	.catch((error) => console.log(`${error}`));
