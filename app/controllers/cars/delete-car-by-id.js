'use strict';

const { removeById } = require('../../repositories/cars-repository');

function deleteCarById(req, res) {
  try {
    const { id } = req.params;
    carsRepository.removeById(parseInt(id));

    const cars = carsRepository.findAll();

    //res.status(204).send(); // No content
    res.status(200).send(cars);
  } catch(err) {
    if(err.name === 'ValidationError'){
      err.status = 400;
    }

    res.status(err.status || 500);
    res.send({ error: err.message });
  }
}

module.exports = deleteCarById;