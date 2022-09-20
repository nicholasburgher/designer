import React from "react";

function Video(props) {
    return (
        <video style={{display: "grid", width: "100%", maxWidth: "700px", padding: "1rem 0", margin: "0 auto"}} controls>
            <source src={process.env.PUBLIC_URL + "/assets/videos/" + props.source} type="video/mp4" />
            Your browser does not support video tags.
        </video>
    )
}

export default Video;