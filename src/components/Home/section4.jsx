import { HiArrowUpRight } from "react-icons/hi2";
const Section4 = () => {
    return (
        <div className="px-[50px] mt-[70px]">
            <div className="flex flex-col justify-center items-center">
                <div className="bg-[#dfee9b] rounded-lg border-[5px] h-[300px] w-full"></div>
                <div className="flex flex-col justify-center items-center text-center w-[70%] bg-white mt-[-100px] p-[30px] rounded-lg">
                    <p className="text-[28px] font-semibold">Goals and Objectives</p>
                    <p className="text-[13px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique fugiat modi ducimus in perspiciatis iusto voluptas, magnam omnis culpa deleniti ex, molestiae repudiandae ullam laboriosam sapiente nemo voluptate et natus?</p>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center bg-gray-200 p-[30px] rounded-lg mt-[30px] space-x-[30px]">
                <div className="flex flex-col justify-start w-[50%] bg-white rounded-lg p-[20px] gap-[7px]">
                    <div className="flex flex-row justify-between items-center ">
                        <p className="font-semibold">The goal of ForHelp</p>
                        <HiArrowUpRight />
                    </div>
                    <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae maxime qui. Minima adipisci id, amet distinctio nihil nostrum, quae illum nobis,</p>
                </div>
                <div className="flex flex-col justify-start w-[50%] bg-white rounded-lg p-[20px] gap-[7px]">
                    <div className="flex flex-row justify-between items-center ">
                        <p className="font-semibold">The organization's objective</p>
                        <HiArrowUpRight />
                    </div>
                    <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae maxime qui. Minima adipisci id, amet distinctio nihil nostrum, quae illum nobis,</p>
                </div>


            </div>


        </div>
    );
}
 
export default Section4;