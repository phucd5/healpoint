import asyncHandler from 'express-async-handler'
import HealthData from '../models/HealthData.js'

// @desc    get HealthData
// @route   Get /HealthData
// @access  Private
export const getHealthData = asyncHandler(async (req, res) => {
    const users = await HealthData.find();
    res.json(HealthData);
})

// @desc    update HealthData
// @route   Put /HealthData
// @access  Private
export const putHealthData = asyncHandler(async (req, res) => {
    const { lifestyle, conditions } = req.body;
    const update = await HealthData.findById(req.params.id);

    if (!update) {
        res.status(400);
        throw new Error('user not found');
    }

    const updatedHealthData = await HealthData.findByIdAndUpdate(req.params.id, { lifestyle, conditions }, {new: true});
    res.json(updatedHealthData);
})

// @desc    delete HealthData
// @route   Delete /HealthData
// @access  Private
export const deleteHealthData = asyncHandler(async (req, res) => {
    const getrid = await HealthData.findById(req.params.id);

    if (!getrid) {
        res.status(400);
        throw new Error('user not found');
    }

    const deletedHealthData = await HealthData.findByIdAndDelete(req.params.id)
    res.json(deleteduser)
})

export const getLifestyle = asyncHandler(async (req, res) => {

      const healthData = await HealthData.findOne({}, 'lifestyle');
      
      if (!healthData) {
        return res.status(404).json({ message: 'No health data found' });
      }
  

      res.status(200).json({ lifestyle: healthData.lifestyle });
    }
)

export const getCondition = asyncHandler(async (req, res) => {

    const healthData = await HealthData.findOne({}, 'condition');
    
    if (!healthData) {
      return res.status(404).json({ message: 'No health data found' });
    }


    res.status(200).json({ condition: healthData.condition });
  }
)