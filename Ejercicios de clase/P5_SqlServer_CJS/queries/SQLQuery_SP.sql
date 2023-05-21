CREATE PROCEDURE [dbo].[SP_Delete_Sensor] 
	-- Add the parameters for the stored procedure here
	@id_sensor as numeric(18,0)	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    --borrar el sensor
	DELETE [dbo].[sensor_info]
	FROM  [dbo].[sensor_info]		
    WHERE 
			id_sensor = @id_sensor

    --borrar los registros
    DELETE [dbo].[sensor_records]
	FROM  [dbo].[sensor_records]		
    WHERE 
			id_sensor = @id_sensor

END
GO

CREATE PROCEDURE [dbo].[SP_Insert_SensorRecords] 
	-- Add the parameters for the stored procedure here
	@id_sensor as numeric(18,0), 
	@current_value as numeric(18,0)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	INSERT INTO [dbo].[sensor_records]
           ([date_record]
           ,[current_value]
		   )
     VALUES
           (GETDATE()
           ,@current_value
           )
    
END
GO

CREATE PROCEDURE [dbo].[SP_Select_Sensor]
	-- Add the parameters for the stored procedure here
		@id_sensor as numeric(18,0)	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SELECT SI.id_sensor, SI.name "SENSOR", T.name "TYPE",
	O.name "OWNER", L.name "LOCATION"
	FROM sensor_info SI
	INNER JOIN  types T ON SI.id_type = T.id_type
	INNER JOIN owner_info O ON O.id_owner = SI.id_owner
	INNER JOIN locations L ON O.id_location = L.id_location
	where id_sensor = @id_sensor

    
END
GO

CREATE PROCEDURE [dbo].[SP_SelectALL_records]
	-- Add the parameters for the stored procedure here	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SELECT SI.id_sensor, SI.name "SENSOR", T.name "TYPE",
	O.name "OWNER", L.name "LOCATION"
	FROM sensor_info SI
	INNER JOIN  types T ON SI.id_type = T.id_type
	INNER JOIN owner_info O ON O.id_owner = SI.id_owner
	INNER JOIN locations L ON O.id_location = L.id_location
		   
    
END
GO

CREATE PROCEDURE [dbo].[SP_Update_SensorInfo] 
	-- Add the parameters for the stored procedure here
	@id_sensor as numeric(18,0),	
	@name as numeric(18,0)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	UPDATE sensor_info 
	SET 
        [name] = @name
    WHERE 
		id_sensor = @id_sensor

END
GO


