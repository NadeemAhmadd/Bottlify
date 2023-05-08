//import required packages
#include <OneWire.h>
#include <DallasTemperature.h>

//initialize variables, change numbers to BLE ports
#define ONE_WIRE_PIN 9   //initializes sensors
const int relayPin1 = 5; //controls the fans and always stay on
const int relayPin2 = 4; //controls the first peltier
const int relayPin3 = 3; //controls the second peltier

OneWire oneWire(ONE_WIRE_PIN);
DallasTemperature sensors(&oneWire);  //Pass one wire reference to Dallas Temperature Library
float input = 0; 

void setup()
{
  Serial.begin(9600); // initialize serial communication
  while (!Serial)
    ;
  
  pinMode(relayPin1, OUTPUT);
  pinMode(relayPin2, OUTPUT);
  pinMode(relayPin3, OUTPUT);
  pinMode(LED_BUILTIN, OUTPUT); // initialize the built-in LED pin

//name it whatever u want to display
//have to set advertised service to add this to bluetooth.

  sensors.begin();
}

void loop()
{

  digitalWrite(relayPin1, HIGH);
  digitalWrite(relayPin2, HIGH);
  digitalWrite(relayPin3, HIGH);

  while (Serial.available()) Serial.read(); // Throw away anything in the input buffer
  while (!Serial.available()); // Wait for another character to arrive
  int userInput = Serial.parseInt();  // Accept the next set of digits.
  sensors.requestTemperatures();
  Serial.print("Wire temp: ");
  Serial.println(sensors.getTempCByIndex(0));
  if(Serial.read() == '\n'){
  input = userInput; 
  Serial.print("New value received: ");
  Serial.println(input);
  }
//***AUTOMATION***
//First case turns on heat by sending the correct relay signal
    if (input > sensors.getTempCByIndex(0)){
    while (input > sensors.getTempCByIndex(0)) {
      //Serial.println("Initiating heating, activating Relay 1");
      sensors.requestTemperatures();
      Serial.print("Current Bottle Temperature: ");
      Serial.println(sensors.getTempCByIndex(0));
      digitalWrite(relayPin1, LOW);
      digitalWrite(relayPin2, HIGH);
      digitalWrite(relayPin3, HIGH);
      delay(2000);

      Serial.print("User input: ");
      Serial.println(userInput);
    }
    }
//      else if (input == sensors.getTempCByIndex(0)) {
//        Serial.println("Done");
//        break;
//      }
    else if (input < sensors.getTempCByIndex(0)) {
      while (input < sensors.getTempCByIndex(0)) {
      //Serial.println("Initiating cooling, activate Relay 2&3");
      sensors.requestTemperatures();
      Serial.print("Current Bottle Temperature: ");
      Serial.println(sensors.getTempCByIndex(0));
      digitalWrite(relayPin2, LOW);
      digitalWrite(relayPin1, HIGH);
      digitalWrite(relayPin3, LOW);
      delay(2000);
      Serial.print("User input: ");
      Serial.println(userInput);
    }
    digitalWrite(relayPin3, LOW);
    delay(300000);
    digitalWrite(relayPin3, HIGH);
  }
}
  
  
  // keep looping while connected
