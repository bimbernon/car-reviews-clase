'use strict';

const Joi = require('joi');
const { findById } = require('../../repositories/cars-repository');
const createJsonError = require('../errors/create-json-errors');

const schema = Joi.number().positive().required();

async function getCarById(req, res) {
  try {
    const { id } = req.params;

    //Joi.assert(id, schema);
    await schema.validateAsync(id);
    const car = await findById(parseInt(id));

    if ( !car ) {
      const error = new Error('Id no disponible');
      error.status = 400;
      throw error;
    }

    res.send(car);
  } catch(err) {
    createJsonError(err, res);
  }
}

module.exports = getCarById;