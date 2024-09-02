import { useEffect } from "react";
import "../../styles/home/hero.css";

function Hero() {
    useEffect(() => {
        const handleScroll = () => {
            const heroText = document.querySelectorAll(".hero-text");
            const overlay = document.querySelector(".hero-overlay");
            const scrollPosition = window.scrollY;

            if (scrollPosition > 50) { 
                heroText.forEach(text => text.classList.add("scrolled"));
                overlay.classList.add("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="hero-div">
            <div className="hero-overlay"></div>
            <h1 className="hero-text title-1">Transform Your Brand</h1>
            <h1 className="hero-text title-2">With Cutting Edge Design</h1>
        </div>
    );
}

export default Hero;
