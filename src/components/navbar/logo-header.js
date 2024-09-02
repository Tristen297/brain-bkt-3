import React, { useEffect } from "react";
import "../../styles/navbar/navbar.css";
import logo from "../../images-and-icons/brain-bkt-logo-small.png";

function LogoHeader() {

    useEffect(() => {
        const handleScroll = () => {
            const logoHeader = document.querySelector(".LogoHeader");
            if (window.scrollY > 50) { // Adjust the scroll position as needed
                logoHeader.classList.add("scroll-left");
            } else {
                logoHeader.classList.remove("scroll-left");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="LogoHeader">
            <a href="#home">
                <div className="LogoHeader-circle">
                    <img src={logo} alt="Brain BKT Logo" className="LogoHeader-logo" />
                </div>
            </a>
        </div>
    );
}

export default LogoHeader;
