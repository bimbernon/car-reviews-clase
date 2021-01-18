'use strict';

const express = require('express');
const createCar = require('../controllers/cars/create-car');
const deleteCarById = require('../controllers/cars/delete-car-by-id');
const getCarById = require('../controllers/cars/get-car-by-id');
const getCars = require('../controllers/cars/get-cars');

const router = express.Router();

// /api/v1/cars
router.route('/')
  .get((req, res) => getCars(req, res))
  .post((req, res) => createCar(req, res));

// /api/v1/cars/:id
router.route('/:id')
  .get((req, res) => getCarById(req, res))
  .delete((req, res) => deleteCarById(req, res));

  //.put((req, res) => getCarById(req, res))
  //.patch((req, res) => getCarById(req, res))

module.exports = router;
