import React from "react";
import { useNavigate } from "react-router-dom";
// Note - some styling for margins and such will be found in App.scss. For more styling reference Button.scss
const TheButton = (props) => {
    return (<button>{props.content}</button>)
}

function Button(props) {
    const navigate = useNavigate();
    return (
        <div className={props.design}>
            {
                props.destination.toString().includes("http") || props.destination.toString().includes("*.")
                ?
                <a href={props.destination} target={props.target}>
                    <TheButton content={props.content} />
                </a>
                :
                <a onClick={() => navigate(props.destination)} target={props.target}>
                    <TheButton content={props.content} />
                </a>
            }
        </div>
    )
}

export default Button;