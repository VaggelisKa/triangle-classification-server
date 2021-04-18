const getDistanceBetweenPoints = require('../helpers/getDistance');
const getTriangleClass = require('../helpers/getTriangleClass');
const isAreaFormed = require('../helpers/isAreaFormed');

const Triangle = require('../models/Triangle');

const classifyController = async (req, res) => {
  const { p1, p2, p3 } = req.body;

  try {
    if (!p1 || !p2 || !p3) {
      throw new Error('No points found');
    }

    if (!isAreaFormed(p1, p2, p3)) {
      throw new Error('The points you provided do NOT form a triangle');
    }

    const distanceBetweenP1AndP2 = getDistanceBetweenPoints(p1, p2);
    const distanceBetweenP1AndP3 = getDistanceBetweenPoints(p1, p3);
    const distanceBetweenP2AndP3 = getDistanceBetweenPoints(p2, p3);

    const triangleClass = getTriangleClass(
      distanceBetweenP1AndP2,
      distanceBetweenP1AndP3,
      distanceBetweenP2AndP3,
    );

    const triangle = new Triangle({
      p1,
      p2,
      p3,
      triangleClass,
      date: Date.now(),
    });

    const response = await triangle.save();

    res.status(201).json(response);
  } catch (error) {
    res.status(400).send({message: error.message});
  }
};

module.exports = classifyController;
