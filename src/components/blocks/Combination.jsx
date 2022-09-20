import "./Combination.scss";
import Body from "./Body";
import Image from "./Image";
import Subheading from "./Subheading";

function Combination(props) {
    return (
        <div className={`combination-block ${props.design}`}>
            <div>
                {props.title ? <Subheading content={props.title}/> : ""}
                <Body content={props.content} />
            </div>
            <div className="image-group">
                <Image source={props.source} alt={props.alt} />
                {props.caption ? <p className="caption">{props.caption}</p> : ""}
            </div>
            
        </div>
    )
}

export default Combination;