'use strict';

const Joi = require('joi');
const {
  findByBrandAndModel,
  findById,
  updateById
} = require('../../repositories/cars-repository');
const createJsonError = require('../errors/create-json-errors');

const schemaId = Joi.number().positive().required();

const schema = Joi.object().keys({
  brand: Joi.string().alphanum().min(3).max(20),
  model: Joi.string().alphanum().min(2).max(20),
  year: Joi.number().min(1980).max(new Date().getFullYear())
});

async function patchCarById(req, res) {
  try {
    const { id } = req.params;

    await schemaId.validateAsync(id);

    // Validamos que existe el id seleccionado
    const car = await findById(parseInt(id));
    if( !car ) {
      const error = new Error('Id not available');
      error.status = 400;
      throw error;
    }

    await schema.validateAsync(req.body);

    // Formamos el objeto car con los nuevos campos
    const updatedCar = {
      ...car,
      ...req.body
    };
    console.log(updatedCar);
    const { brand, model } = updatedCar;
    // Validamos que no existe ese modelo de coche
    const existCar = await findByBrandAndModel(brand, model);
    if (existCar && existCar.id !== parseInt(id)) {
      const error = new Error(`Ya existe ese modelo de coche en la aplicación ID: ${existCar.id}`);
      error.status = 409;
      throw error;
    }

    await updateById(parseInt(id), updatedCar);

    res.status(200).send({ id, ...updatedCar });
  } catch(err) {
    createJsonError(err, res);
  }
}

module.exports = patchCarById;