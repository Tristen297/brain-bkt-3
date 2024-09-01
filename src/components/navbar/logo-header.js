import "../../styles/navbar/navbar.css";
import logo from "../../images-and-icons/brain-bkt-logo-small.png";

function LogoHeader() {
    return (
        <div className="LogoHeader">
            <a href="#home">
                <div className="LogoHeader-circle">
                    <img src={logo} alt="Brain BKT Logo" className="LogoHeader-logo" />
                </div>
            </a>
        </div>
    )
}

export default LogoHeader;
