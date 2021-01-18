'use strict';

require('dotenv').config();
const carsRouter = require('./app/routes/cars-routes');
const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.SERVER_PORT || 3080;

app.use('/api/v1/cars/', carsRouter);
//app.use('/api/v1/users/', usersRouter);

app.listen(port, () => console.log(`Listening ${port}...`));
