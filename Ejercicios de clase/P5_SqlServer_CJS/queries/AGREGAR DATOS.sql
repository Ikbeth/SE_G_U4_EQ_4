Use [BD_API_RESTful_SE]

INSERT INTO  [dbo].[sensor_info](name, id_owner, id_type) VALUES ('DHT11', 1, 1);
INSERT INTO  [dbo].[sensor_info](name, id_owner, id_type) VALUES ('PIR ', 1, 2);
INSERT INTO  [dbo].[sensor_info](name, id_owner, id_type) VALUES ('LDR', 2, 1);
INSERT INTO  [dbo].[sensor_info](name, id_owner, id_type) VALUES ('SW-420', 2, 2);
INSERT INTO  [dbo].[sensor_info](name, id_owner, id_type) VALUES ('BMP180', 3, 1);


INSERT INTO [dbo].[sensor_records] ([id_sensor], [current_value], [date_record])
VALUES (1, 20, GETDATE());

INSERT INTO [dbo].[sensor_records] ([id_sensor], [current_value], [date_record])
VALUES (1, 22, GETDATE());

INSERT INTO [dbo].[sensor_records] ([id_sensor], [current_value], [date_record])
VALUES (2, 18, GETDATE());

INSERT INTO [dbo].[sensor_records] ([id_sensor], [current_value], [date_record])
VALUES (2, 21, GETDATE());

INSERT INTO [dbo].[sensor_records] ([id_sensor], [current_value], [date_record])
VALUES (3, 25, GETDATE());

INSERT INTO [dbo].[locations] ([name], [lat], [lon])
VALUES ('Location 1', 12.34, 56.78),
       ('Location 2', 23.45, 67.89),
       ('Location 3', 34.56, 78.90),
       ('Location 4', 45.67, 89.01),
       ('Location 5', 56.78, 90.12);

INSERT INTO [dbo].[types] ([name], [min_value], [max_value])
VALUES ('Type 1', 10, 100),
       ('Type 2', 20, 200),
       ('Type 3', 30, 300),
       ('Type 4', 40, 400),
       ('Type 5', 50, 500);

INSERT INTO [dbo].[owner_info] ([name], [ap_paterno], [ap_materno], [id_location], [jerarquia])
VALUES
    ('John', 'Doe', 'Smith', 1, 2),
    ('Jane', 'Smith', 'Doe', 2, 3),
    ('Michael', 'Johnson', NULL, 1, NULL),
    ('Sarah', 'Williams', 'Johnson', 3, 1),
    ('David', 'Brown', NULL, 2, NULL);