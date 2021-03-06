import json
from datetime import date
from datetime import datetime


def writeData(temperature, soilMoisture):
    print('[INFO] Writing data...')
    data = {'temperature': temperature, 'soilMoisture': soilMoisture}
    today = date.today()
    json_data = None

    with open('data.json') as f:
        json_data = json.load(f)
        print(f'[INFO] following JSON data was read: {json_data}')
        f.close()
    
    json_data[today.strftime("%d/%m/%Y")] = data

    print(f'[INFO] writing new data: {json_data}')

    with open('data.json', 'w') as f:
        json.dump(json_data, f)
        f.close()
    print('[INFO] Succesfully wrote data')

def readData():
    with open('data.json') as f:
        return json.load(f)