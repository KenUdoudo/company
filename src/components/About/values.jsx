import { FaThumbsUp } from "react-icons/fa";
import { GiStumpRegrowth } from "react-icons/gi";
import { IoMdBuild } from "react-icons/io";
import { TbHeartHandshake } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi";

const Values = () => {
    return (
        <div className="mt-[60px]">
            <p className="text-[40px] font-[700] text-center">Our values</p>

            <div className="flex flex-col flex-wrap md:flex-row justify-between mt-[20px] gap-y-[20px] md:gap-y-[50px]">
                <div className="flex flex-col w-full md:w-[45%]">
                    <div className="flex items-center gap-[30px]">
                        <FaThumbsUp className="p-[20px] bg-[#d0e3ff] rounded-md"/>
                        <p className="text-[25px] font-[700]">Excellence</p>
                    </div>
                    <p className="mt-[20px]">We are committed to fostering a culture of academic and vocational excellence.</p>
                </div>
                <div className="flex flex-col w-full md:w-[45%]">
                    <div className="flex items-center gap-[30px]">
                        <GiStumpRegrowth className="p-[20px] bg-[#ffd7e3] rounded-md"/>
                        <p className="text-[25px] font-[700]">Empowerment</p>
                    </div>
                    <p className="mt-[20px]">We believe in empowering youth to unlock their full potential.</p>
                </div>
                <div className="flex flex-col w-full md:w-[45%]">
                    <div className="flex items-center gap-[30px]">
                        <IoMdBuild className="p-[20px] bg-[#ead8fc] rounded-md"/>
                        <p className="text-[25px] font-[700]">Innovation</p>
                    </div>
                    <p className="mt-[20px]">We encourage creativity, innovation, and entrepreneurial thinking in all our programs.</p>
                </div>
                <div className="flex flex-col w-full md:w-[45%]">
                    <div className="flex items-center gap-[30px]">
                        <IoMdBuild className="p-[20px] bg-[#e7f8c7] rounded-md"/>
                        <p className="text-[25px] font-[700]">Partnership</p>
                    </div>
                    <p className="mt-[20px]">We build strong collaborations with communities, schools, businesses, and other stakeholders to support youth development.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Values;