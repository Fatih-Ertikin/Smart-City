import json
from datetime import date
from datetime import datetime


def writeData(temperature, soilMoisture):
    data = {'temperature': temperature, 'soilMoisture': soilMoisture}
    today = date.today()
    json_data = None
    with open('data.json') as json_file:
        json_data = json.load(json_file)
        json_file.close()
    
    json_data[today] = data
    with open('data.json') as json_file:
        json.dump(json_data,'data.json')
