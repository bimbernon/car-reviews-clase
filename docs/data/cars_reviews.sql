CREATE DATABASE IF NOT EXISTS cars_reviews;

USE cars_reviews;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`email`)
);

CREATE TABLE `cars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(255) NOT NULL,
  `model` VARCHAR(255) NOT NULL,
  `year` INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `reviews` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `car_id` INT NOT NULL,
  `comment` VARCHAR(255) NOT NULL,
  `rating` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE,
  FOREIGN KEY (car_id)
    REFERENCES cars(id)
    ON DELETE CASCADE
);
INSERT INTO cars (brand, model, year) VALUES
  ('Seat', 'Ibiza', 2018),
  ('Opel', 'Astra', 2011),
  ('Audi', 'A3', 2016);  
