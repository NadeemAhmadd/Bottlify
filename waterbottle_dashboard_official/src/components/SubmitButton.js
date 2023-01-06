import "./Modal.css";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import "./SubmitButton.css"

function Submitbutton(){

    const [modalIsOpen,setModalIsOpen]=useState(false);

    function deletehandler(){
      setModalIsOpen(true)
    }
    function closemodalhandler(){
        setModalIsOpen(false)
      }

    return <div className="location">
        <button class="button-82-pushable" role="button" onClick={deletehandler} >
        <span class="button-82-shadow"></span>
        <span class="button-82-edge"></span>
        <span class="button-82-front text">Submit</span>
      </button>

      {modalIsOpen && <Modal onClick={closemodalhandler}/>}
      {modalIsOpen && <Backdrop onClick={closemodalhandler}/>}

      </div>

}

export default Submitbutton;