import mongoose from 'mongoose';

const healthDataSchema = new mongoose.Schema(
    {
        lifestyle: {
            type: [],
            required: true
        }, 
        conditions: {
            type: [],
            required: true
        }

    }
)

const HealthData = mongoose.model("HealthData", healthDataSchema);
export default HealthData;