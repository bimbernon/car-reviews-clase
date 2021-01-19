'use strict';

const database = require('../infrastructure/database');

async function create(car) {
  const { brand, model, year } = car;

  const pool = await database.getPool();
  const insertQuery = `INSERT INTO cars (brand, model, year) \
    VALUES ( ${brand}, ${model}, ${year})`;
  const [created] = await pool.query(insertQuery);

  return created.insertId;
}

async function findAll() {
  const pool = await database.getPool();
  const query = 'SELECT * FROM cars';

  const [cars] = await pool.query(query);

  return cars;
}

async function findByBrandAndModel(brand, model) {
  const pool = await database.getPool();
  const query = `SELECT * FROM cars WHERE brand = ${brand} AND model = ${$model}`;
  const [cars] = await pool.query(query);

  return cars[0];
}

async function findById(id) {
  const pool = await database.getPool();
  const query = `SELECT * FROM cars WHERE id = ${id}`;
  const [cars] = await pool.query(query);

  return cars[0];
}

async function removeById(id) {
  const pool = await database.getPool();
  const deleteQuery = `DELETE FROM cars WHERE id = ${id}`;
  await pool.query(deleteQuery);

  return true;
}

module.exports = {
  create,
  findAll,
  findByBrandAndModel,
  findById,
  removeById,
};