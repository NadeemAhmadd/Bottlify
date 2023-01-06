import "./Modal.css";

function Modal(props){
    return <div className="modal">
        <p>
            Are you sure you want to adjust the temp?
        </p>
        <button class="button-82-pushable" role="button">
        <span class="button-82-shadow"></span>
        <span class="button-82-edge"></span>
        <span class="button-82-front text">Confirm</span>
      </button>
      <button class="button-82-pushable" role="button"  onClick={props.onClick}>
        <span class="button-82-shadow"></span>
        <span class="button-82-edge"></span>
        <span class="button-82-front text">Cancel</span>
      </button>
    </div>
}

export default Modal;