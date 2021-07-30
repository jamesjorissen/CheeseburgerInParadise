
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL
	AUTO_INCREMENT,
	name_burger varchar
	(30) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY
	(id)
);
	-- put seeds in schema to get rid of mysql error
	-- INSERT INTO burgers
	-- 	(name_burger, devoured)
	-- VALUES
	-- 	("Cheddar", FALSE),
	-- 	("Works", TRUE),
	-- 	("California", FALSE),
	-- 	("Bacon Cheese", FALSE),
	-- 	("Mushroom Swiss", FALSE);
