
import { NavLink } from "react-router-dom";
import logo from '../../content/resumes/myLogo.png';

function BrandedHeader() {
    return (
        <div class="Header">
            <NavLink to="/">
                <span>Nicholas Burgher Design Portfolio</span>
                <span className="mobile">NB Design Portfolio</span>
                {/*<img className="logo" src={process.env.PUBLIC_URL + "/assets/images/logos/NB_Designer_Logo.svg" }/>*/}
                {/*<img className="logo" style={{filter: 'brightness(5)'}} src={logo}/>*/}
            </NavLink>
        </div>
    )
}

export default BrandedHeader;

//<Image source="logos/NBCLogo_Alt.png" customClass="logo"/>