'use strict';

const database = require('../infrastructure/database');

async function findAllUsers() {
  // LLAMAR BASE DE DATOS
  return 'getUsers';
}

async function findUserByEmail(email) {
  //LLAMADA DB
  return false;
}

async function createUsers() {
  // LLAMAR BASE DE DATOS
  return 'registerUsers';
}

module.exports = {
  findAllUsers,
  findUserByEmail,
  createUsers,
};
