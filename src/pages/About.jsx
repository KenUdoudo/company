import Intro from "../components/About/intro";
import Metrics from "../components/About/metrics";
import Story from "../components/About/ourstory";

const About = () => {
    return (
        <div className="font-monts">
            <Intro />

            <Story />

            <Metrics />
        </div>
    );
}
 
export default About;