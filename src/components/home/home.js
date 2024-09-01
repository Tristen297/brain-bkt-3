import { useEffect } from "react";
import "../../styles/home/home.css";

function Home() {
    useEffect(() => {
        const handleScroll = () => {
            const heroText = document.querySelectorAll(".hero-text");
            const overlay = document.querySelector(".hero-overlay");
            const scrollPosition = window.scrollY;

            if (scrollPosition > 50) { 
                heroText.forEach(text => text.classList.add("scrolled"));
                overlay.classList.add("scrolled");
                
                // Start cutting animation after text is fully revealed
                setTimeout(() => {
                    const cuttingText = document.querySelector(".cutting");
                    cuttingText.classList.add("cutting-animate");
                }, 5000); // Delay to ensure the typewriter animation completes
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="home-content">
            <div className="hero-div">
                <div className="hero-overlay"></div>
                <h1 className="hero-text title-1">Transform Your Brand</h1>
                <h1 className="hero-text title-2">
                    With <span className="cutting">Cutting</span> Edge Design
                </h1>
            </div>
            <div className="dummy-content">
                <p>This is some additional content to test scrolling.</p>
                {Array.from({ length: 50 }, (_, index) => (
                    <p key={index}>Dummy content line {index + 1}</p>
                ))}
            </div>
        </div> 
    );
}

export default Home;
