## pip install requests   Fuente: https://pypi.org/project/requests/
import requests
import json

url_base = "http://localhost:3000"
url_actuators = '/api/v1-actuators/actuators'
url_sensors ='/api/v1-sensors/sensors'


def selectSensorRecords():
    url = url_base + url_sensors + '/records/'
    response = requests.get(url, verify=False)
    print(response.content)
    print(response.status_code)


def SelectActuatorRecords():
    url = url_base + url_actuators + '/records/'
    response = requests.get(url, verify=False)
    print(response.json())
    print(response.status_code)
