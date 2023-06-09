USE [SE_G_ProyectoFinal_EQ_4]
GO
/****** Object:  StoredProcedure [dbo].[SP_Insert_SensorRecords]    Script Date: 20/05/2023 05:29:08 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
drop procedure [dbo].Insert_Sensor_Record
go

create PROCEDURE [dbo].[Insert_Sensor_Record]
	-- Add the parameters for the stored procedure here
	@id_sensor as numeric(18,0), 
	@current_value as numeric(18,0)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	INSERT INTO [dbo].[Sensor_records]
           ([idSensor]
		   ,[date]
           ,[value]
		   )
     VALUES
           (@id_sensor
		   ,GETDATE()
           ,@current_value
           )
    
END
GO

drop procedure [dbo].Insert_Actuator_Record
go

CREATE PROCEDURE [dbo].[Insert_Actuator_Record]
	-- Add the parameters for the stored procedure here
	@id_actuator as numeric(18,0), 
	@current_value as numeric(18,0)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	INSERT INTO [dbo].[Actuator_records]
           ([idActuator]
		   ,[date]
           ,[value]
		   )
     VALUES
           (@id_actuator
		   ,GETDATE()
           ,@current_value
           )
    
END
GO

CREATE PROCEDURE [dbo].[Select_Sensor_Record]
	-- Add the parameters for the stored procedure here
		@id_sensor as numeric(18,0)	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SELECT SR.idRecord, SR.date, SR.value
	FROM Sensor_records SR
	where idSensor = @id_sensor

    
END
GO

CREATE PROCEDURE [dbo].[Select_Actuator_Record]
	-- Add the parameters for the stored procedure here
		@id_actuator as numeric(18,0)	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SELECT TOP 1 AR.idRecord, AR.date, AR.value 
	FROM Actuator_records AR
	where idActuator = @id_actuator
	ORDER BY AR.date DESC
    
END
GO

drop procedure [dbo].SP_SelectALL_records
go

CREATE PROCEDURE [dbo].[Select_ALL_Sensor_records]
	-- Add the parameters for the stored procedure here	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SELECT SR.idSensor, SR.idSensor, SI.name "name", SR.value, SR.date
	FROM Sensor_records SR
	INNER JOIN Sensors_info SI ON SR.idSensor = SI.Idsensor
		   
    
END
GO

EXEC dbo.[Select_ALL_Sensor_records]
go

CREATE PROCEDURE [dbo].[Select_ALL_Actuator_records]
	-- Add the parameters for the stored procedure here	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SELECT SR.idActuator, SR.idActuator, SI.name "name", SR.value, SR.date
	FROM Actuator_records SR
	INNER JOIN Actuator_info SI ON SR.idActuator = SI.idActuator
		   
    
END
GO

EXEC dbo.[Select_ALL_Actuator_records]
go