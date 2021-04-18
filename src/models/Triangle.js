const { Schema, model } = require('mongoose');

const triangleSchema = new Schema({
  p1: {
    xAxis: { type: Number, required: true},
    yAxis: { type: Number, required: true}
  },
  p2: {
    xAxis: { type: Number, required: true},
    yAxis: { type: Number, required: true}
  },
  p3: {
    xAxis: { type: Number, required: true},
    yAxis: { type: Number, required: true}
  },
  triangleClass: String,
  date: Number
})

module.exports = model('Triangle', triangleSchema);