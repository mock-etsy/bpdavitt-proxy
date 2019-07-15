DROP DATABASE IF EXISTS practice;

CREATE DATABASE practice;

USE practice;

DROP TABLE IF EXISTS todos;

CREATE TABLE todos(
    id INT NOT NULL AUTO_INCREMENT,
    task VARCHAR(250) NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (id)
);