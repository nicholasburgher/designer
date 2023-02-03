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
            {props.lightboxArray[props.currentId].caption ? 
            <div className="caption">
                {props.lightboxArray[props.currentId].caption}
            </div>
            : ""}
            {props.currentId > 0 ? <button className="button-previous" onClick={() => {
                props.onPrevious();
            }}></button> : ""}
            {props.currentId < props.lightboxArray.length - 1 ? <button className="button-next" onClick={() => {
                props.onNext();
            }}></button> : ""}
        </div>
    )
}

export default Lightbox;