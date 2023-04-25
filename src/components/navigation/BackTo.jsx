import { NavLink } from "react-router-dom";

function BackTo(props) {
    const dest = props.dest;
    return (
        <div className="backto-fab">
        <NavLink to={`/${dest}`}>
            <button>Back to Work</button>
        </NavLink>
        </div>
    )
}

export default BackTo;