const getDistanceBetweenPoints = require('../helpers/getDistance');
const getTriangleClass = require('../helpers/getTriangleClass');
const areColinear = require('../helpers/areColinear');

const Triangle = require('../models/Triangle');

const classifyController = async (req, res, next) => {
  const { p1, p2, p3 } = req.body;

  if (!p1 || !p2 || !p3) {
    return res.status(400).send('No points found');
  }

  if (areColinear(p1, p2, p3)) {
    return res.status(400).send({ message: 'Triangle could not be formed, points are colinear!' });
  }

  const distanceBetweenP1AndP2 = getDistanceBetweenPoints(p1, p2);
  const distanceBetweenP1AndP3 = getDistanceBetweenPoints(p1, p3);
  const distanceBetweenP2AndP3 = getDistanceBetweenPoints(p2, p3);

  const triangleClass = getTriangleClass(
    distanceBetweenP1AndP2,
    distanceBetweenP1AndP3,
    distanceBetweenP2AndP3
  );

  try {
    const triangle = new Triangle({
      p1,
      p2,
      p3,
      triangleClass,
      date: Date.now()
    })

    const response = await triangle.save();

    res.status(201).json(response);
  } catch (error) {
    console.log(error);
  }
}

module.exports = classifyController
