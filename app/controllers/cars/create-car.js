'use strict';

const Joi = require('joi');
//const { create } = require('../../repositories/cars-repository');
const carsRepository = require('../../repositories/cars-repository');

const schema = Joi.object().keys({
  brand: Joi.string().alphanum().min(3).max(20).required(),
  model: Joi.string().alphanum().min(2).max(20).required(),
  year: Joi.number().min(1980).max(new Date().getFullYear())
});

function createCar(req, res) {
  try {
    Joi.assert(req.body, schema);

    const { brand, model, year } = req.body;

    const car = { brand, model, year };

    const addedCar = carsRepository.create(car);

    res.status(201).send(addedCar);
  } catch(err) {
    if(err.name === 'ValidationError'){
      err.status = 400;
    }

    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

module.exports = createCar;
