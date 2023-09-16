import express from 'express';
import { getHealthData, putHealthData, deleteHealthData } from '../controllers/healthdata';

const router = express.Router();

router.get('/conditions', async (req, res) => {
    try {
      // Use the Mongoose model to query the database and retrieve the "conditions" subcategory
      const healthData = await HealthData.findOne({}, 'conditions');
      
      if (!healthData) {
        return res.status(404).json({ message: 'No health data found' });
      }
  
      // Send the "conditions" subcategory in the response
      res.status(200).json({ conditions: healthData.conditions });
    } catch (error) {
      // Handle any errors that occur during the database query
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/lifestyle', async (req, res) => {
    try {
      // Use the Mongoose model to query the database and retrieve the "conditions" subcategory
      const healthData = await HealthData.findOne({}, 'lifestyle');
      
      if (!healthData) {
        return res.status(404).json({ message: 'No health data found' });
      }
  
      // Send the "conditions" subcategory in the response
      res.status(200).json({ conditions: healthData.lifestyle });
    } catch (error) {
      // Handle any errors that occur during the database query
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/healthdata', getHealthData);
router.put('/:id', putHealthData);
router.delete('/:id', deleteHealthData);