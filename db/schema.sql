DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(100) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (id)
);

alter table burgers 
modify devoured boolean not null default 0;
