import "../../styles/home/about-us.css";
import lightBulb from "../../images-and-icons/lightbulb-icon.png";
import paintBrush from "../../images-and-icons/paintbrush-icon.png";
import lineIcon from "../../images-and-icons/line-icon.png";
import teamPhoto from "../../images-and-icons/team-wrapping-trailers.jpg";
import { useEffect, useRef } from "react";

function AboutUs() {
    const aboutUsRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const aboutUsSection = aboutUsRef.current;
            if (aboutUsSection) {
                const rect = aboutUsSection.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Adjust the trigger point further down the screen
                if (rect.top <= windowHeight / 4) { // Trigger when the section is 1/4th of the way from the bottom
                    aboutUsSection.classList.add("in-view");
                } else {
                    aboutUsSection.classList.remove("in-view");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="about-us-content" ref={aboutUsRef}>
            <div className="text-content">
                <div className="title-div">
                    <div className="line-icon">
                        <img src={lineIcon} alt="line icon" />
                    </div>
                    <div className="title-main">
                        <h1>About Us</h1>
                    </div>
                    <div className="title-subtext">
                        <h4>
                            Specializing in eye-catching fleet wraps and innovative graphic design, we help businesses enhance their brand visibility and make a lasting impact in their market.
                        </h4>
                    </div>
                </div>

                {/* Quality Section */}
                <div className="quality-experience-wrapper">
                    <div className="quality-div">
                        <div className="lightbulb-icon">
                            <img src={lightBulb} alt="lightbulb icon" />
                        </div>
                        <div className="quality-text">
                            <h1>Quality</h1>
                            <h4>
                                Everything we create is driven by a dedicated team, fully committed and highly skilled.
                            </h4>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="experience-div">
                        <div className="paintbrush-icon">
                            <img src={paintBrush} alt="paintbrush icon" />
                        </div>
                        <div className="experience-text">
                            <h1>Experience</h1>
                            <h4>
                                Our seasoned team ensures every project is executed with precision, creativity, and a deep understanding of what makes brands stand out.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="img-div">
                <img src={teamPhoto} alt="two women wrapping trailers" className="team-photo-img" />
            </div>
        </div>
    );
}

export default AboutUs;
