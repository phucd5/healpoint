import HealthData from '../models/HealthData.js'
import { handleNotFound, handleBadRequest, handleSuccess, handleServerError } from '../utils/handlers.js';

// @desc    get HealthData
// @route   Get /HealthData
// @access  Private
export const getHealthData = async (req, res) => {
    try {

        const HealthData = await HealthData.find();
    handleSuccess(res, HealthData);

    } catch (error) {
        handleServerError(res, error);
    }
    
}

// @desc    update HealthData
// @route   Put /HealthData
// @access  Private
export const putHealthData = async (req, res) => {
    try {

        const { lifestyle, conditions } = req.body;
    const update = await HealthData.findById(req.params.id);

    if (!update) {
        handleNotFound(res, 'HealthData not found');
    }

    const updatedHealthData = await HealthData.findByIdAndUpdate(req.params.id, { lifestyle, conditions }, {new: true});
    handleSuccess(res, updatedHealthData);
        
    } catch (error) {
        handleServerError(res, error);
    }
    
}

// @desc    delete HealthData
// @route   Delete /HealthData
// @access  Private
export const deleteHealthData = async (req, res) => {
    try {

        const getrid = await HealthData.findById(req.params.id);

    if (!getrid) {
        handleNotFound(res, 'HealthData not found');
    }

    const deletedHealthData = await HealthData.findByIdAndDelete(req.params.id);
    handleSuccess(res, deletedHealthData);
        
    } catch (error) {
        handleServerError(res, error);
    }
    
}

export const getLifestyle = async (req, res) => {

    try {
        
        const healthData = await HealthData.findOne({}, 'lifestyle');
      
        if (!healthData) {
          handleNotFound(res, 'HealthData not found');
        }
    
        handleSuccess(res, { lifestyle: healthData.lifestyle });

    } catch (error) {

        handleServerError(res, error);
        
    }
}

export const getCondition = async (req, res) => {

    try {

        const healthData = await HealthData.findOne({}, 'condition');
    
        if (!healthData) {
          handleNotFound(res, 'HealthData not found');
        }
    
    
        handleSuccess( res, { condition: healthData.condition });
        
    } catch (error) {
        
        handleServerError(res, error);

    }

}