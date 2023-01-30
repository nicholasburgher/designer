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
            <img src={process.env.PUBLIC_URL + "/assets/images/" + props.lightboxArray[props.currentId].source} />
            <div className="caption">
            {props.currentId > 0 ? <button onClick={() => {
                props.onPrevious();
            }}>Previous</button> : ""}
            {props.lightboxArray[props.currentId].caption}
            {props.currentId < props.lightboxArray.length - 1 ? <button onClick={() => {
                props.onNext();
            }}>Next</button> : ""}
            </div>
        </div>
    )
}

export default Lightbox;