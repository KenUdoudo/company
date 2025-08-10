import Intro from "../components/About/intro";
import Metrics from "../components/About/metrics";
import Mission from "../components/About/mission";
import Story from "../components/About/ourstory";
import Poster from "../components/About/IMG_4408.png"
import { useEffect } from "react";
import Values from "../components/About/values";
import { Link } from "react-router-dom";
const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="font-monts">
            <Intro />

            <Story />

            <Mission />

            <Metrics />

            <Values />

            <div className="flex w-full justify-center items-center mt-[30px] px-[20px]">
                 <img src={ Poster } className="w-full" />
            </div>

            <Link to="/gallery" className="flex w-full justify-center items-center mt-[20px] md:mt-[40px]">
                <p className="text-white bg-[#F7941D] hover:bg-[#f7951d98] font-[700] p-[20px] rounded-xl">See Gallery</p>
            </Link>
        </div>
    );
}
 
export default About;
