import { NavLink } from "react-router-dom";

function BackTo() {
    return (
        <div className="backto-fab">
        <NavLink to="/work">
            <button>Back to Work</button>
        </NavLink>
        </div>
    )
}

export default BackTo;