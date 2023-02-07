import Dial from "./components/Dial";
import "./components/card.scss";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
import { useState } from "react";
import Submitbutton from "./components/SubmitButton";
import Guage from "./components/Guage";
import "./App.css";
import Thermometer from "react-thermometer-ecotropy";
import "./tester.scss";
import { UserData } from "./components/Data";
import LineChart from "./components/Graph";
import BluetoothButton from "./components/ConnectBluetoothButton";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "hsl(185, 28%, 40%)",

        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
//   window.onload = function () {

//   document.querySelector("BluetoothButton").addEventListener("submit",
//   function(event){
//       event.stopPropagation()
//       event.preventDefault()

//       if (BluetoothButton.isWebBLEavailable()){
//           BluetoothButton.getDeviceInfo()
//       }
//   })
// };

  return (
    
    
    <div class="bubbles">
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
      <div class="bubble"></div>
     <div className="Graphposition">
      <div className="cardgraph">
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      </div>
      </div>


      <div className="Knobposition">
      <div className="card">

        <Dial 
        />
      </div>
      </div>
      <BluetoothButton/>
      
      <Submitbutton/>
      <div className="Thermometerposition">
      <div className="cardthin">
        
      <Thermometer
        theme="dark"
        value="99"
        max="100"
        format="°C"
        size="large"
        height="300"
      />
      </div>
      </div>

    </div>
  );
}

export default App;
