import { HiArrowUpRight } from "react-icons/hi2";
const Section4 = () => {
    return (
        <div className="px-[20px] lg:px-[50px] mt-[70px]">
            <div className="flex flex-col justify-center items-center">
                <div className="bg-[#FFD4A1] rounded-lg border-[5px] h-[200px] md:h-[300px] w-full"></div>
                <div className="flex flex-col justify-center items-center text-center w-[90%] md:w-[70%] bg-white mt-[-100px] p-[30px] rounded-lg">
                    <p className="text-[20px] md:text-[28px] font-semibold">Our Vision</p>
                    <p className="text-[13px]">Empowering Nigerian youth to achieve academic and vocational excellence, fostering a culture of innovation, entrepreneurship a lifelong hearing.</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center bg-[#E9E9E9] p-[30px] rounded-lg mt-[30px] gap-x-[30px] gap-y-[20px]">
                <div className="flex flex-col justify-start w-full md:w-[50%] bg-white rounded-lg p-[20px] gap-[7px]">
                    <div className="flex flex-row justify-between items-center ">
                        <p className="font-semibold">Empowering a self-reliant nation</p>
                        <HiArrowUpRight />
                    </div>
                    <p className="text-[13px]">We see a future where every young Nigerian is empowered to dream BIG and innovate towards a self-reliant nation.</p>
                </div>
                <div className="flex flex-col justify-start w-full md:w-[50%] bg-white rounded-lg p-[20px] gap-[7px]">
                    <div className="flex flex-row justify-between items-center ">
                        <p className="font-semibold">Catalyzing global readers</p>
                        <HiArrowUpRight />
                    </div>
                    <p className="text-[13px]">We aim to be the catalyst for transforming Nigeria's youth into globally competitive leaders & skilled professionals.</p>
                </div>


            </div>


        </div>
    );
}
 
export default Section4;