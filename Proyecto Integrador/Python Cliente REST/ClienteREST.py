## pip install requests   Fuente: https://pypi.org/project/requests/
import requests

url_base = "http://localhost:3000"
url_actuators = '/api/v1-actuators/actuators'
url_sensors ='/api/v1-sensors/sensors'


def insertSensorRecords(id, valor):
    import json
    url = url_base + url_sensors + '/new/' + str(id)
    headers = {"Content-Type": "application/json"}
    body = {
        "id_sensor": str(id),
        "valores": valor
    }
    response = requests.post(url, data=json.dumps(body), headers=headers, verify=False)
    print(response.json())
    print(response.status_code)


def insertActuatorRecords(id, valor):
    import json
    url = url_base + url_actuators + '/new/' + str(id)
    headers = {"Content-Type": "application/json"}
    body = {
        "id_actuator": str(id),
        "valores": valor
    }
    response = requests.post(url, data=json.dumps(body), headers=headers, verify=False)
    print(response.json())
    print(response.status_code)