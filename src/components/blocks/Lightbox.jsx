import React from "react";
import "./Lightbox.scss";

function Lightbox(props) {
    return (
        <div className={`lightbox${props.visibility ? " active" : ""}`}>
            <div 
            onClick={() => {
                props.onClose();
            }}
            className="close">
              +
            </div>
            <img src={process.env.PUBLIC_URL + "/assets/images/" + props.imgAddress} />
            <div className="caption">{props.imgCaption}</div>
        </div>
    )
}

export default Lightbox;