'use strict';

const database = require('../infrastructure/database');

async function findAllUsers() {
  // LLAMAR BASE DE DATOS
  return 'getUsers';
}

async function findUserByEmail(email) {
  const pool = await database.getPool();
  const query = 'SELECT * FROM users WHERE email = ?';
  const [users] = await pool.query(query, email);

  return users[0];
}

async function createUser(name, email, passwordHash, role) {
  const pool = await database.getPool();
  const insertQuery = 'INSERT INTO users (name, email, password, role) VALUES(?, ?, ?, ?)';
  const [created] = await pool.query(insertQuery, [name, email, passwordHash, role]);

  return created.insertId;
  //return '12';
}

module.exports = {
  findAllUsers,
  findUserByEmail,
  createUser,
};
