'use strict';

const createCar = require('./create-car');
const deleteCarById = require('./delete-car-by-id');
const getCarById = require('./get-car-by-id');
const getCars = require('./get-cars');
const patchCarById = require('./patch-car-by-id');
const updateCarById = require('./update-car-by-id');

module.exports = {
  createCar,
  deleteCarById,
  getCarById,
  getCars,
  patchCarById,
  updateCarById
};