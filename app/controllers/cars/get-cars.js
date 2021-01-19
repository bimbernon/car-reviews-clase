'use strict';
const carsRepository = require('../../repositories/cars-repository');
const createJsonError = require('../errors/create-json-errors');

async function getCars(req, res) {
  try {
    const cars = await carsRepository.findAll();

    res.send(cars);
  } catch(err) {
    createJsonError(err, res);
  }
}

module.exports = getCars;