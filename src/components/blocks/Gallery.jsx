import React, {useState} from "react";
import "./Gallery.scss";
import Lightbox from "./Lightbox";

//NOTE: some styling can be manipulated from App.scss
function Gallery(props) {
    const [lightboxVisibility, setLightboxVisibility] = useState(false);
    const [currentImageAddress, setCurrentImageAddress] = useState();
    const [currentCaption, setCurrentCaption] = useState();

    function handleClick() {
        setLightboxVisibility(!lightboxVisibility);
    }

    return (
        <div className={`gallery ${props.type}`}>
            <div onClick={handleClick} className={`lightbox-matte${lightboxVisibility ? " active" : ""}`}></div>
            <Lightbox onClose={handleClick} visibility={lightboxVisibility} imgAddress={currentImageAddress} imgCaption={currentCaption}/>
            {props.content.map((item) => { return (
                    <div className="image-group">
                        <img onClick={() => {
                            handleClick();
                            setCurrentImageAddress(item.source);
                            setCurrentCaption(item.caption);
                        }} src={process.env.PUBLIC_URL + "/assets/images/" + item.source} alt={item.alt} />
                        {item.caption ? <p className="caption">{item.caption}</p> : ""}
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery;