import { FaThumbsUp } from "react-icons/fa";
import { GiStumpRegrowth } from "react-icons/gi";
import { IoMdBuild } from "react-icons/io";
import { TbHeartHandshake } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi";

const Values = () => {
    return (
        <div className="mt-[60px]">
            <p className="text-[40px] font-[700] text-center"><span className="italic font-[400] ">Our</span> Values</p>

            <p className="text-center mt-[20px]">At PLEF, our values guide everything we do:</p>

            <div className="flex flex-col flex-wrap md:flex-row justify-between mt-[70px] gap-y-[20px] md:gap-y-[50px]">
                <div className="flex flex-col w-full md:w-[45%]">
                    <div className="flex items-center gap-[30px]">
                        <div className="p-[15px] bg-[#d0e3ff] rounded-md">
                        <FaThumbsUp className="w-[20px] h-[20px]"/></div>
                        <p className="text-[25px] font-[700]">Excellence</p>
                    </div>
                    <p className="mt-[20px]">We are committed to fostering a culture of academic and vocational excellence.</p>
                </div>
                <div className="flex flex-col w-full md:w-[45%]">
                    <div className="flex items-center gap-[30px]">
                        <div className="p-[15px] bg-[#ffd7e3] rounded-md">
                        <GiStumpRegrowth className="w-[20px] h-[20px]"/></div>
                        <p className="text-[25px] font-[700]">Empowerment</p>
                    </div>
                    <p className="mt-[20px]">We believe in empowering youth to unlock their full potential.</p>
                </div>
                <div className="flex flex-col w-full md:w-[45%]">
                    <div className="flex items-center gap-[30px]">
                        <div className="p-[15px] bg-[#ead8fc] rounded-md">
                        <IoMdBuild  className="w-[20px] h-[20px]"/></div>
                        <p className="text-[25px] font-[700]">Innovation</p>
                    </div>
                    <p className="mt-[20px]">We encourage creativity, innovation, and entrepreneurial thinking in all our programs.</p>
                </div>
                <div className="flex flex-col w-full md:w-[45%]">
                    <div className="flex items-center gap-[30px]">
                        <div className="p-[15px] bg-[#e7f8c7] rounded-md">
                        <TbHeartHandshake  className="w-[20px] h-[20px]"/></div>
                        <p className="text-[25px] font-[700]">Partnership</p>
                    </div>
                    <p className="mt-[20px]">We build strong collaborations with communities, schools, businesses, and other stakeholders to support youth development.</p>
                </div>
                <div className="flex flex-col w-full md:w-[45%]">
                    <div className="flex items-center gap-[30px]">
                        <div className="p-[15px] bg-[#d0e3ff] rounded-md">
                        <HiSparkles  className="w-[20px] h-[20px]"/></div>
                        <p className="text-[25px] font-[700]">Integrity</p>
                    </div>
                    <p className="mt-[20px]">We uphold the highest standards of transparency, fairness, and accountability in our operations.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Values;