import "./BrandedHeader.scss";
import { NavLink } from "react-router-dom";

function BrandedHeader() {
    return (
        <div class="Header">
            <NavLink to="work">NB</NavLink>
        </div>
    )
}

export default BrandedHeader;