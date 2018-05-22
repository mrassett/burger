CREATE DATABASE todo_db;
USE todo_db;


DROP TABLE IF EXISTS todo;


CREATE TABLE todo (
    id int NOT NULL AUTO_INCREMENT,
    what_todo varchar(255) NOT NULL,
    done BOOL DEFAULT false,
    PRIMARY KEY (id)
);