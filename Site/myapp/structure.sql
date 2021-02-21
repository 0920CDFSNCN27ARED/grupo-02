CREATE DATABASE coreDB;

USE coreDB;

CREATE TABLE users_category (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(40)
);

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(40),
    last_name VARCHAR(40),
    email VARCHAR(40) NOT NULL,
    password VARCHAR(100) NOT NULL,
	category_id INT,
    FOREIGN KEY (category_id) REFERENCES users_category(id),
    image_name VARCHAR(100)
);

CREATE TABLE payment_method (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    method VARCHAR(40)
);

CREATE TABLE sales (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    payment_method_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (payment_method_id) REFERENCES payment_method(id),
    price FLOAT,
    quantity SMALLINT
);

CREATE TABLE products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(40),
    description TEXT,
    price FLOAT NOT NULL,
    image_name VARCHAR(100),
    category VARCHAR(40),
    stock SMALLINT
);