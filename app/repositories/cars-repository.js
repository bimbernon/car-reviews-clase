'use strict';

const database = require('../infrastructure/database');

async function create(brand, model, year) {
  const pool = await database.getPool();
  const insertQuery = 'INSERT INTO cars (brand, model, year) VALUES (?, ?, ?)';
  const [created] = await pool.query(insertQuery, [
    brand,
    model,
    year
  ]);

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
  const query = 'SELECT * FROM cars WHERE brand = ? AND model = ?';
  const [cars] = await pool.query(query, [brand, model]);

  return cars[0];
}

async function findById(id) {
  const pool = await database.getPool();
  const query = 'SELECT * FROM cars WHERE id = ?';
  const [cars] = await pool.query(query, id);

  return cars[0];
}

async function removeById(id) {
  const pool = await database.getPool();
  const deleteQuery = 'DELETE FROM cars WHERE id = ?';
  await pool.query(deleteQuery, id);

  return true;
}

async function updateById(id, updatedCar) {
  const { brand, model, year } = updatedCar;

  const pool = await database.getPool();
  const updateQuery = 'UPDATE cars SET brand = ?, model = ?, year = ? WHERE id = ?';
  await pool.query(updateQuery, [brand, model, year, id]);

  return true;
}


module.exports = {
  create,
  findAll,
  findByBrandAndModel,
  findById,
  removeById,
  updateById
}