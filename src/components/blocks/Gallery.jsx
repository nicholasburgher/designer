import React from "react";
import "./Gallery.scss";

//NOTE: some styling can be manipulated from App.scss
function Gallery(props) {
    return (
        <div className={`gallery ${props.type}`}>
            {props.content.map((item) => { return (
                    <div className="image-group">
                        <img src={process.env.PUBLIC_URL + "/assets/images/" + item.source} alt={item.alt} />
                        {item.caption ? <p className="caption">{item.caption}</p> : ""}
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery;