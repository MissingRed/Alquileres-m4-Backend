CREATE DATABASE alquiler_lavadoras;

USE alquiler_lavadoras;

CREATE TABLE clientes(
    direccion VARCHAR(200),
    nombre VARCHAR(100),
    PRIMARY KEY(direccion)
);

DESCRIBE clientes;

CREATE TABLE lavadoras(
    num_lav INT NOT NULL,
    est_lav BIT NOT NULL,
    disp_lav BIT NOT NULL,
    PRIMARY KEY(num_lav)
);

DESCRIBE lavadoras;

CREATE TABLE alquileres(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    hora_in time,
    hora_fin time,
    num_hrs INT NOT NULL,
    saldo BIGINT NOT NULL,
    direccion_fk VARCHAR(200),
    num_lav_fk INT NOT NULL,
    FOREIGN KEY(num_lav_fk) REFERENCES lavadoras (num_lav)
);

DESCRIBE alquileres;