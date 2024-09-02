import React from "react";
import "../../styles/home/collage.css";
import WrappedCar from "../../images-and-icons/wrapped-car.jpg";
import WrappedTrailer from "../../images-and-icons/wrapped-trailer.jpg";
import WrappedVan from "../../images-and-icons/wrapped-van.jpg";
import WrappedSuv from "../../images-and-icons/wrapped-suv.jpg";

function Collage() {
    return (
        <div className="collage-content">
            <div className="photo-line-1">
                <div className="photo-container photo-1">
                    <a href="/services">
                        <img src={WrappedCar} alt="car with flashy wrapping" />
                    </a>
                </div>
                <div className="photo-container photo-2">
                    <a href="/services">
                        <img src={WrappedTrailer} alt="trailer with flashy wrapping" />
                    </a>
                </div>
            </div>
            <div className="text-line">
                <h1>Premier graphic design and fleet wrap service in the tri-state area.</h1>
            </div>
            <div className="photo-line-2">
                <div className="photo-container photo-3">
                    <a href="/services">
                        <img src={WrappedVan} alt="van with flashy wrapping" />
                    </a>
                </div>
                <div className="photo-container photo-4">
                    <a href="/services">
                        <img src={WrappedSuv} alt="suv with flashy wrapping" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Collage;
