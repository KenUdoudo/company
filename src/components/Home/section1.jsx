import { HiArrowUpRight } from "react-icons/hi2";
import { IoIosSunny } from "react-icons/io";
import { HiSparkles } from "react-icons/hi2";
const Section1 = () => {
    return (
        <div className="mt-[60px]">
            <div className="flex flex-col justify-center items-center text-center gap-y-[20px]">
                <p className="text-[38px] font-[600]">Transforming Lives Through <br /> Hope and Education</p>
                <p className="px-[80px] text-[14px] font-inter font-[500]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repudiandae numquam autem nostrum dolor maiores sapiente eaque aliquam adipisci nam quam soluta expedita dicta, voluptate vel at nisi dolores voluptates.</p>
                <div className='flex flex-row justify-center items-center gap-[4px] rounded-full px-[13px] py-[10px] bg-[#CEFA05] cursor-pointer'>
                    <p className='text-[13px] font-roboto font-[500]'>Donate Now</p>
                    <div className='h-[25px] w-[25px] rounded-full border-[1px] bg-green-100'></div>
                </div>
            </div>

            <div className="px-[50px] flex flex-row justify-center items-center mt-[40px]">
                <div className="w-[25%] h-[400px] flex flex-col justify-normal items-center">
                    <div className="h-[80%] w-full border-[2px] bg-[#CEFA05] rounded-md"></div>
                    <div>
                        <div className='flex flex-row justify-start items-center gap-[4px] rounded-full px-[10px] py-[3px] bg-gray-100 cursor-pointer'>
                            <div className='h-[25px] w-[25px] rounded-full border-[1px] bg-[#CEFA05]'></div>
                            <p className='text-[13px] font-roboto font-[500]'>Amplify Their Voice</p>
                        </div>
                    </div>
                </div>


                <div className="w-[25%]"></div>
                <div className="w-[25%]"></div>
                <div className="w-[25%]"></div>
            </div>
        </div>
    );
}
 
export default Section1;