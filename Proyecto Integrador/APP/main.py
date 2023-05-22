from ClienteREST import selectSensorRecords
from ClienteREST import SelectActuatorRecords
import tkinter
import customtkinter

customtkinter.set_appearance_mode("dark")  # Modes: system (default), light, dark
customtkinter.set_default_color_theme("green")  # Themes: blue (default), dark-blue, green

app = customtkinter.CTk()  # create CTk window like you do with the Tk window
app.geometry("800x600")


def verSensores():
    selectSensorRecords()
    print()


def verActuadores():
    SelectActuatorRecords()
    print()


def limpiarRegistros():
    print()


textbox = customtkinter.CTkTextbox(master=app, width=760, height=440, corner_radius=5)
textbox.place(relx=0.5, rely=0.42, anchor=tkinter.CENTER)

button_sensor = customtkinter.CTkButton(master=app, width=200, height=60, command=verSensores())
button_sensor.configure(text="Registros Sensores")
button_sensor.place(relx=0.2, rely=0.9, anchor=tkinter.CENTER)

button_actuator = customtkinter.CTkButton(master=app, width=200, height=60, command=verActuadores())
button_actuator.configure(text="Registros Actuadores")
button_actuator.place(relx=0.8, rely=0.9, anchor=tkinter.CENTER)

button_clear = customtkinter.CTkButton(master=app, width=200, height=60, command=limpiarRegistros())
button_clear.configure(text="Limpiar Registros")
button_clear.place(relx=0.5, rely=0.9, anchor=tkinter.CENTER)

app.mainloop()
