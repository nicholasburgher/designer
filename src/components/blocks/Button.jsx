import React from "react";
import "./Button.scss";
// Note - some styling for margins and such will be found in App.scss. For more styling reference Button.scss
function Button(props) {

    return (
        <div className={props.design}>
            <a href={props.destination} target={props.target}>
                <button
            >{props.content}</button>
            </a>
        </div>
    )
}

export default Button;