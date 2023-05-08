
import { useState } from "react";
import Backdrop from "./Backdrop";
import "./ConnectBluetoothButton.css"
// https://www.youtube.com/watch?v=TsXUcAKi790 
function BluetoothButton(){

    // var bleservice= "MY_SERVICE_UUID"
    // var blecharacteristic= "MY_CHARACTERISTIC_UUID"

    function getDeviceInfo() {
      let options = {
        acceptAllDevices: true
      }
      console.log("Requesting BLE device info")
      navigator.bluetooth.requestDevice(options)
        .then(device => {
          console.log('Name: ' + device.name)
        })
        .catch(error => {
          console.log("The error was: " + error)
        })
    }


    function attempt42(){

      const SERVICE_UUID ="19b10000-e8f2-537e-4f6c-d104768a1214";
      const CHARACTERISTIC_UUID = "19b10001-e8f2-537e-4f6c-d104768a1214";
      const value = 42;

      navigator.bluetooth.requestDevice({ filters: [{ services: [SERVICE_UUID] }] })
    .then(device => {
      console.log('Device:', device.name);

      // connect to the device
      return device.gatt.connect();
    })
    .then(server => {
      console.log('Connected to GATT server');

      // get the service
      return server.getPrimaryService(SERVICE_UUID);
    })
    .then(service => {
      console.log('Got GATT service');

      // get the characteristic
      return service.getCharacteristic(CHARACTERISTIC_UUID);
    })
    .then(characteristic => {
      console.log('Got GATT characteristic');

      // write the value to the characteristic
      const buffer = new ArrayBuffer(2);
      const view = new DataView(buffer);
      view.setUint16(0, value, true); // true for little-endian
      return characteristic.writeValue(buffer);
    })
    .then(() => {
      console.log(`Sent the value ${value} to the BLE device`);
    })
    .catch(error => {
      console.error(error);
    });

    }




    return <div className="bluetoothlocation">
        <button class="button-82-pushable" role="button"         onClick={(event) => {
          event.preventDefault();
            attempt42();
            // getDeviceInfo();
            // sendNumberToArduinoNanoBLE(42);

        }}>
        <span class="button-82-shadow"></span>
        <span class="button-82-edge"></span>
        <span class="button-82-front text">Connect</span>
      </button>
      </div>

}

export default BluetoothButton;