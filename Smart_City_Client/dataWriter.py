import json
from datetime import date
from datetime import datetime


def writeData(temperature, soilMoisture):
    print('[INFO] Writing data...')
    data = {'temperature': temperature, 'soilMoisture': soilMoisture}
    today = date.today()
    json_data = None
    with open('data.json') as json_file:
        json_data = json.load(json_file)
        print(f'[INFO] following JSON data was read: {json_data}')
        json_file.close()
    
    json_data[today] = data
    print(f'[INFO] writing new data: {json_data}')
    print(json)
    with open('data.json') as json_file:
        json.dump(json_data, 'data.json')
    print('[INFO] Succesfully wrote data')