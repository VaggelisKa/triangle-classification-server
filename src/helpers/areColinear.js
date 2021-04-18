const areColinear = (p1, p2, p3) => {
  const areaFormed = p1.xAxis * (p2.yAxis - p3.yAxis) +
                     p2.xAxis * (p3.yAxis - p1.yAxis) +
                     p3.xAxis * (p1.yAxis - p2.yAxis);

  return areaFormed === 0;
}

module.exports = areColinear;
