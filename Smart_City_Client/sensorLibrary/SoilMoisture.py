# from time import sleep 
# import board 
# import busio 
# import adafruit_ads1x15.ads1115 as ADS 
# from adafruit_ads1x15.analog_in import AnalogIn 
# import RPi.GPIO as GPIO
import random

class SoilMoistureSensor:
    # def __init__(self):
    #     self.i2c = busio.I2C(board.SCL, board.SDA)
    #     self.ads = ADS.ADS1115(i2c)
    #     self.chan0 = AnalogIn(ads, ADS.P0)
    #     self.chan1 = AnalogIn(ads, ADS.P1) 
    #     self.chan2 = AnalogIn(ads, ADS.P2) 
    #     self.chan3 = AnalogIn(ads, ADS.P3)

    def read_soil_moisture(self):
            return random.uniform(22,25)
