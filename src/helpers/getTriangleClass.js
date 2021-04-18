const getTriangleClass = (edge1, edge2, edge3) => {
  if (edge1 === edge2 && edge2 === edge3) {
    return 'Equilateral';
  } else if (edge1 === edge2 || edge2 === edge3 || edge3 === edge1) {
    return 'Isosceles';
  } else {
    return 'Scalene';
  }
};

module.exports = getTriangleClass;
