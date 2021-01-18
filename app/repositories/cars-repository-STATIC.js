'use strict';

const cars = [{
  id: 1,
  brand: 'Seat',
  model: 'Ibiza',
  year: 2018
}, {
  id: 2,
  brand: 'Opel',
  model: 'Astra',
  year: 2019
}, {
  id: 3,
  brand: 'Audi',
  model: 'A3',
  year: 2016
}];

function create(car) {
  const id = cars.reduce((acc, car) => car.id > acc ? car.id : acc, 0) + 1;
  //const id = Math.max(...cars.map(car => car.id)) + 1;
  const newCar = {
    id,
    ...car
  };

  cars.push(newCar);

  return newCar;
}

function findAll() {
  return cars;
}

function findById(id) {
  return cars.find(car => car.id === id);
}

function removeById(id) {
  const car = findById(id);
  const index = cars.indexOf(car);

  return cars.splice(index, 1);
}

module.exports = {
  create,
  findAll,
  findById,
  removeById,
};
