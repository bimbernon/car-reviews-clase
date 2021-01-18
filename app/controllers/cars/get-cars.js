'use strict';
const carsRepository = require('../../repositories/cars-repository');

function getCars(req, res) {
  const cars = carsRepository.findAll();

  res.send(cars);
}

module.exports = getCars;