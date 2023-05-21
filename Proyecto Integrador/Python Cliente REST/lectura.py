from time import sleep
import serial as connect
import ClienteREST
import tkinter
import customtkinter
import threading
import json


arduino = None

customtkinter.set_appearance_mode("System")  # Modes: system (default), light, dark
customtkinter.set_default_color_theme("green")  # Themes: blue (default), dark-blue, green

app = customtkinter.CTk()  # create CTk window like you do with the Tk window
app.geometry("240x200")


def button_function():
    global stop, proceso, arduino
    if button.cget("text") == 'CONECTAR':
        arduino = connect.Serial(port="COM4", baudrate=9600, timeout=1)
        print('conectado')
        button.configure(text="DESCONECTAR")
        stop = False
        proceso = (threading.Thread(target=lectura).start())
    else:
        stop = True
        arduino.close()
        print('desconectado')
        button.configure(text="CONECTAR")


def lectura():
    global arduino, datos, stop
    while not stop:
        sleep(1)
        try:
            if not arduino == None:
                if arduino.isOpen():
                    cadena = arduino.readline()
                    cadena = cadena.decode()
                    cadena = cadena.replace("\r\n", "")
                    if not cadena == '':
                        if cadena[0] == '#' and cadena[-1] == '#':
                            cadena = cadena[1:-1]
                            datos = cadena.split('/')
        except Exception as error:
            print(error)

        ClienteREST.insertSensorRecords(1, datos[0])
        ClienteREST.insertActuatorRecords(1, datos[1])
        ClienteREST.insertActuatorRecords(2, datos[2])
        ClienteREST.insertActuatorRecords(3, datos[3])

        print(datos)


button = customtkinter.CTkButton(master=app, text="CONECTAR", command=button_function)
button.place(relx=0.5, rely=0.5, anchor=tkinter.CENTER)

stop = False
proceso = None
datos = None

app.mainloop()






