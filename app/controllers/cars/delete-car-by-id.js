'use strict';

const Joi = require('joi');
const {
  findAll,
  removeById
} = require('../../repositories/cars-repository');
const createJsonError = require('../errors/create-json-errors');

const schema = Joi.number().positive().required();

async function deleteCarById(req, res) {
  try {
    const { id } = req.params;

    await schema.validateAsync(id);

    await removeById(parseInt(id));

    const cars = await findAll();

    res.status(200).send(cars);
  } catch(err) {
    createJsonError(err, res);
  }
}

module.exports = deleteCarById;