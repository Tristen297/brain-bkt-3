import Hero from "../home/hero";
import AboutUs from "./about-us";
import Collage from "./collage";
import CtaBar from "./cta-bar";

function Home() {
    return (
        <div className="home-content">
            <Hero />
            <Collage />
            <CtaBar />
        </div> 
    );
}

export default Home;
