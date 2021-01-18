'use strict';
const Joi = require('joi');
const { findById } = require('../../repositories/cars-repository');

const schema = Joi.number().positive().required();

function getCarById(req, res) {
  try {
    const { id } = req.params;
    Joi.assert(id, schema);
    const car = findById(parseInt(id));

    if (!car) {
      throw new Error('Id not available');
      //res.status(400).send('Id not available');
    }

    //res.status(200).send(car);
    res.send(car);
  } catch(err) {
    res.status(400).send({ error: err.message });
    //res.status(400).send(err);
  }
}

module.exports = getCarById;
