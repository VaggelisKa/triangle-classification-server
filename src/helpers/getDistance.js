const getDistanceBetweenPoints = (p1, p2) => {
  const distance = Math.sqrt(
    Math.pow(p2.xAxis - p1.xAxis, 2) + Math.pow(p2.yAxis - p1.yAxis, 2)
  );

  return distance;
}

module.exports = getDistanceBetweenPoints;
