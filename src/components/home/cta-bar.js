import React from "react";
import "../../styles/home/cta-bar.css";

function CtaBar() {
    return(
        <div className="cta-bar-content">
            <div className="cta-text">
                <h1>
                    Whats This button For??
                </h1>
            </div>
            <div className="cta-button">
                <button onClick={() => window.location.href='/contact'}>
                    Psssst..
                </button>
            </div>
        </div>
    )
}

export default CtaBar;
