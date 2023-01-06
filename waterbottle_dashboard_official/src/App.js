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


function App() {
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
      <div className="Knobposition">
      <div className="card">
        <Dial 
        />
      </div>
      </div>
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
