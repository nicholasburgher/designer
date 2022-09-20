import React from "react";
//NOTE: styling can be manipulated from App.scss
function List(props) {
    switch (props.listType) {
        case "ordered":
            return (
                <ol>
                    {props.content.map((listItem) => { return <li>{listItem}</li>})}
                </ol>
            )
        default:
            return (
                <ul>
                    {props.content.map((listItem) => { return <li>{listItem}</li>})}
                </ul>
            )
    }
}

export default List;