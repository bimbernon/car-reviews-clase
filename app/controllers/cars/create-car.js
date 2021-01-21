'use strict';

const Joi = require('joi');
const { create, findByBrandAndModel } = require('../../repositories/cars-repository');
const createJsonError = require('../errors/create-json-errors');

const schema = Joi.object().keys({
  brand: Joi.string().alphanum().min(3).max(20).required(),
  model: Joi.string().alphanum().min(2).max(20).required(),
  year: Joi.number().min(1980).max(new Date().getFullYear()),
});

async function createCar(req, res) {
  try {
    await schema.validateAsync(req.body);
    //Joi.assert(req.body, schema);

    const { brand, model, year } = req.body;

    const existCar = await findByBrandAndModel(brand, model);
    if (existCar) {
      const error = new Error('Ya existe ese modelo de coche en la web');
      error.status = 409;
      throw error;
    }

    const id = await create(brand, model, year);

    res.status(201).send({ id, brand, model, year });
  } catch (err) {
    createJsonError(err, res);
  }
}

module.exports = createCar;
