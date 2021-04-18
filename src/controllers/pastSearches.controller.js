const Triangle = require('../models/Triangle');

const pastSearchesController = async (_, res) => {
  try {
    const listOfTriangles = await Triangle
      .find({})
      .sort({ date: -1 })
      .limit(15)
      .exec();

    if (!listOfTriangles) {
      throw new Error('Could not find any previous searches');
    }

    res.status(200).json(listOfTriangles);
  } catch (error) {
    res.status(500).json([]);
  }
};

module.exports = pastSearchesController;
