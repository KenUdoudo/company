import { HiArrowUpRight } from "react-icons/hi2";
import ourprocess from './ourprocess.png';
const Section5 = () => {
  return (
    <div className="px-[0] md:px-[20px] lg:px-[50px] mt-[70px]">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[#FFD4A1] rounded-lg border-[#fbfcfa] border-[5px] h-[200px] md:h-[300px] lg:h-[400px] w-full"><img src={ ourprocess } className="object-cover w-full h-full object-top"/></div>
        <div className="flex flex-col justify-center items-center text-center w-[90%] md:w-[70%] bg-white mt-[-100px] p-[30px] rounded-lg">
          <p className="text-[20px] md:text-[28px] font-semibold">
            Our Process
          </p>
          <p className="text-[13px]">
            At PLEF, we are not seeking only the best, we are aiming to groom
            those who put in the effort to maintain a culture of excellence in
            academics or vocation. Here's our process.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center bg-[#fbfcfa] p-[30px] rounded-lg mt-[30px] gap-x-[30px] gap-y-[20px]">
        <div className="flex flex-col justify-start w-full md:w-[33%] bg-white rounded-lg p-[20px] gap-[7px]">
          <div className="flex flex-row justify-between items-center ">
            <p className="font-semibold">Assess performance</p>
            <HiArrowUpRight />
          </div>
          <p className="text-[13px]">
            Assess Students & Craftsman with a grade system for shortlisting
          </p>
        </div>
        <div className="flex flex-col justify-start w-full md:w-[33%] bg-white rounded-lg p-[20px] gap-[7px]">
          <div className="flex flex-row justify-between items-center ">
            <p className="font-semibold">Test candidate</p>
            <HiArrowUpRight />
          </div>
          <p className="text-[13px]">
            Validate shortlisted candidate with our easy test tailored to
            student/craftsman
          </p>
        </div>
        <div className="flex flex-col justify-start w-full md:w-[33%] bg-white rounded-lg p-[20px] gap-[7px]">
          <div className="flex flex-row justify-between items-center ">
            <p className="font-semibold">Recognize & Reward</p>
            <HiArrowUpRight />
          </div>
          <p className="text-[13px]">
            Provide financial aid/scholarship and other material support for
            successful candidates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
