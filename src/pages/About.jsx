import Intro from "../components/About/intro";
import Metrics from "../components/About/metrics";
import Mission from "../components/About/mission";
import Story from "../components/About/ourstory";
import { useEffect } from "react";
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
        </div>
    );
}
 
export default About;