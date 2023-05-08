//import required packages
#include <OneWire.h>
#include <DallasTemperature.h>

//initialize variables, change numbers to BLE ports
#define ONE_WIRE_PIN 2   //initializes sensors
const int relayPin1 = 3; //controls the fans and always stay on
const int relayPin2 = 4; //controls the first peltier
const int relayPin3 = 5; //controls the second peltier

OneWire oneWire(ONE_WIRE_PIN);
DallasTemperature sensors(&oneWire);  //Pass one wire reference to Dallas Temperature Library

BLEService orientationService("6e400001-b5a3-f393-e0a9-e50e24dcca9e");                        // UUID for "orientation service", custom declared in uuids.py
BLEStringCharacteristic CharacteristicZ("6e400002-b5a3-f393-e0a9-e50e24dcca9e", BLEWrite, 10); // UUID for Orientation:Z


void setup()
{
  Serial.begin(9600); // initialize serial communication
  while (!Serial)
    ;
  
  pinMode(relayPin1, OUTPUT);
  pinMode(relayPin2, OUTPUT);
  pinMode(relayPin3, OUTPUT);
  pinMode(LED_BUILTIN, OUTPUT); // initialize the built-in LED pin

  if (!BLE.begin())
  { // initialize BLE
    Serial.println("starting BLE failed!");
    while (1)
      ;
  }

//name it whatever u want to display
//have to set advertised service to add this to bluetooth.
  BLE.setLocalName("Bottlify's Nano33IOT");              // Set name for connection
  BLE.setAdvertisedService(orientationService);          // Advertise service
  orientationService.addCharacteristic(CharacteristicZ);

  BLE.addService(orientationService);  // Add service

  // Service for JSON
 

  BLE.advertise(); // Start advertising
  Serial.print("Peripheral device MAC: ");
  Serial.println(BLE.address());
  Serial.println("Waiting for connections...");
  sensors.requestTemperatures();
}

void loop()
{
  digitalWrite(relayPin1, HIGH);
  digitalWrite(relayPin2, HIGH);
  digitalWrite(relayPin3, HIGH);
  //int input =  CharacteristicZ.value().toInt();
  BLEDevice central = BLE.central(); // Wait for a BLE central to connect

  // if a central is connected to the peripheral:
  if (central)
  {
    Serial.print("Connected to central MAC: ");
    // print the central's BT address:
    Serial.println(central.address());
    // turn on the LED to indicate the connection:
    digitalWrite(LED_BUILTIN, HIGH);

    while (central.connected())
    {
    Serial.print("Input Value: ");
    Serial.println(CharacteristicZ.value());
    Serial.println(CharacteristicZ.value().toInt());
        //Serial.println(CharacteristicZ.toInt());    
    delay(2000);

//***AUTOMATION***
//First case turns on heat by sending the correct relay signal
    //if (CharacteristicZ.value().toInt() > sensor)
    if (CharacteristicZ.value().toInt() < sensors.getTempCByIndex(0) && CharacteristicZ.value().toInt() > sensors.getTempCByIndex(0)) {
      Serial.println("Activate Relay 1");
      Serial.println("Current Bottle Temperature: ");
      Serial.println(sensors.getTempCByIndex(0));
      Serial.println("Degrees Celsius");
      digitalWrite(relayPin1, LOW);
      digitalWrite(relayPin2, HIGH);
      digitalWrite(relayPin3, HIGH);
    }
    else if (CharacteristicZ.value().toInt() > sensors.getTempCByIndex(0)) {
      Serial.println("Activate Relay 2&3");
      Serial.println("Current Bottle Temperature: ");
      Serial.println(sensors.getTempCByIndex(0));
      Serial.println("Degrees Celsius");
      digitalWrite(relayPin2, LOW);
      digitalWrite(relayPin1, HIGH);
      digitalWrite(relayPin3, LOW);
    } 
    else if (CharacteristicZ.value().toInt() == 0) {
      Serial.print("Idle");
    }
    else {
      Serial.println("Unidentfied");
    }
    } // keep looping while connected

    // when the central disconnects, turn off the LED:
    digitalWrite(LED_BUILTIN, LOW);
    Serial.print("Disconnected from central MAC: ");
    Serial.println(central.address());
  }
  
}
