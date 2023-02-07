
import { useState } from "react";
import Backdrop from "./Backdrop";
import "./ConnectBluetoothButton.css"
// https://www.youtube.com/watch?v=TsXUcAKi790 
function BluetoothButton(){

    function isWebBLEavailable(){
        if(!navigator.bluetooth){
            console.log("Web Bluetooth not available.")
            return false
        }

        return true
    }
    
    function getDeviceInfo(){
         let options = {
            acceptAllDevices: true
         }
         console.log("Requesting BLE device info")
         navigator.bluetooth.requestDevice(options).then(device =>{
            console.log('Name'+device.name).catch(error => {
                console.log("The error was: "+ error)
              })
         })
    }

    // window.onload = function () {

    // document.querySelector("BluetoothButton").addEventListener("submit",
    // function(event){
    //     event.stopPropagation()
    //     event.preventDefault()

    //     if (isWebBLEavailable()){
    //         getDeviceInfo()
    //     }
    // })
    // };
    return <div className="bluetoothlocation">
        <button class="button-82-pushable" role="button"         onClick={(event) => {
          event.preventDefault();
          if (isWebBLEavailable) {
            getDeviceInfo();
          }
        }}>
        <span class="button-82-shadow"></span>
        <span class="button-82-edge"></span>
        <span class="button-82-front text">Connect</span>
      </button>
      </div>

}

export default BluetoothButton;