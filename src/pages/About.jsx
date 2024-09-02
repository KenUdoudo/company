import Intro from "../components/About/intro";
import Metrics from "../components/About/metrics";
import Mission from "../components/About/mission";
import Story from "../components/About/ourstory";

const About = () => {
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