//NOTE: some styling can be manipulated from App.scss
import "./Image.scss";

function Image(props) {
    return <img className={`image${props.customClass ? ` ${props.customClass}` : ``}`} alt={props.alt} src={process.env.PUBLIC_URL + "/assets/images/" + props.source }/>
}

export default Image;