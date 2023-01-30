import React, {useState} from "react";
import "./Gallery.scss";
import Lightbox from "./Lightbox";

//NOTE: some styling can be manipulated from App.scss
function Gallery(props) {
    const [lightboxVisibility, setLightboxVisibility] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    function triggerLightbox() {
        setLightboxVisibility(!lightboxVisibility)
    }
    function handleClick(i) {
        triggerLightbox();
        setCurrentIndex(i);
    }

    return (
        <div className={`gallery ${props.type}`}>
            <div onClick={triggerLightbox} className={`lightbox-matte${lightboxVisibility ? " active" : ""}`}></div>
            <Lightbox onClose={triggerLightbox} onPrevious={() => {setCurrentIndex(currentIndex - 1)}} onNext={() => {setCurrentIndex(currentIndex + 1)}} visibility={lightboxVisibility} lightboxArray={props.content} currentId={currentIndex}
            />
            {props.content.map((item, index) => { return (
                    <div className="image-group">
                        <img onClick={() => {
                            handleClick(index);
                        }} src={process.env.PUBLIC_URL + "/assets/images/" + item.source} alt={item.alt} />
                        {item.caption ? <p className="caption">{item.caption}</p> : ""}
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery;