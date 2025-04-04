import Intro from "../components/About/intro";
import Metrics from "../components/About/metrics";
import Mission from "../components/About/mission";
import Story from "../components/About/ourstory";
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

            <Link to="/gallery" className="flex w-full justify-center items-center mt-[20px] md:mt-[40px]">
                <p className="text-white bg-[#F7941D] hover:bg-[#f7951d98] font-[700] p-[20px] rounded-xl">See Gallery</p>
            </Link>
        </div>
    );
}
 
export default About;