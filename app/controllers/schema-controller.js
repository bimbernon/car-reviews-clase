'use strict';

//const Joi = require('joi');
//const { findExample, createExample } = require('../../repositories/example-repository');
//const createJsonError = require('../errors/create-json-errors');

// const schema = Joi.object().keys({
//   key1: Joi.string().alphanum().min(3).max(20).required(),
//   key2: Joi.string().min(4).max(20),
// });

async function nameFunction(req, res) {
  try {
    // 1. Validar id = 4 es un numero
    // 2. Que el coche con valor 4 existe
    // 3. Validar formato body con schema del joi
    // 4. Validar modelo de coche no exista
    // 5. Devolver los datos editados.
    const resultado = 'value';

    res.status(xxx).send(resultado);
  } catch (err) {
    createJsonError(err, res);
  }
}

module.exports = nameFunction;
