'use strict';

const express = require('express');
const {
  createCar,
  deleteCarById,
  getCarById,
  getCars,
  patchCarById,
  updateCarById
} = require('../controllers/cars');

const router = express.Router();

router.route('/')
  .get((req, res) => getCars(req, res))
  .post((req, res) => createCar(req, res));

router.route('/:id')
  .get((req, res) => getCarById(req, res))
  .put((req, res) => updateCarById(req, res))
  .patch((req, res) => patchCarById(req, res))
  .delete((req, res) => deleteCarById(req, res));

module.exports = router;