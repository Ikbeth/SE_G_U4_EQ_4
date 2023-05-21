
CREATE TABLE [dbo].[sensor_info](
	[id_sensor] [numeric](18, 0) IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[name] [nvarchar](100) NOT NULL,	
	[id_owner] [numeric](18, 0) NOT NULL,
	[id_type] [numeric](18, 0) NOT NULL
)

CREATE TABLE [dbo].[sensor_records](
	[id_record] [numeric](18, 0) IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[id_sensor] [numeric](18, 0) NOT NULL,
    [current_value] [numeric](18, 0) NOT NULL,	
	[date_record] DATETIME NOT NULL	    
)

CREATE TABLE [dbo].[locations](
	[id_location] [numeric](18, 0) IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[name] [nvarchar](100) NOT NULL,	
	[lat] float NULL,
	[lon] float NULL
)

CREATE TABLE [dbo].[types](
	[id_type] [numeric](18, 0) IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[name] [nvarchar](100) NOT NULL,	
	[min_value] [numeric](18, 0) NULL,
	[max_value] [numeric](18, 0) NULL
)

CREATE TABLE [dbo].[owner_info](
	[id_owner] [numeric](18, 0) IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[name] [nvarchar](100) NOT NULL,	
    [ap_paterno] [nvarchar](100) NOT NULL,	
    [ap_materno] [nvarchar](100) NULL,	
	[id_location] [numeric](18, 0) NOT NULL,
	[jerarquia] [numeric](18, 0) NULL
)
