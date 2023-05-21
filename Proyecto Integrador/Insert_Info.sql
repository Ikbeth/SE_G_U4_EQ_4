use [SE_G_ProyectoFinal_EQ_4]
go

INSERT INTO Sensors_info (Idsensor, name, type, magnitud)
VALUES ('1', 'HC-SR04', 'Digital', 'Distancia');
go

------------------------------------------------------------------------------------
INSERT INTO Actuator_info(idActuator, name, type, magnitud)
VALUES ('1', 'LED Verde', 'Digital', 'Intensidad Luminosa');
go

INSERT INTO Actuator_info(idActuator, name, type, magnitud)
VALUES ('2', 'LED Rojo', 'Digital', 'Intensidad Luminosa');
go

INSERT INTO Actuator_info(idActuator, name, type, magnitud)
VALUES ('3', 'Buzzer', 'Digital', 'Amplitud de Sonido');
go