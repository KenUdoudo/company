import { HiArrowUpRight } from "react-icons/hi2";
import { IoIosSunny } from "react-icons/io";
import { HiSparkles } from "react-icons/hi2";
const Section1 = () => {
    return (
        <div className="mt-[20px]">
            <div className="flex flex-col justify-center items-center text-center gap-y-[20px]">
                <p className="text-[38px] font-[600]">Transforming Lives Through <br /> Hope and Education</p>
                <p className="px-[80px] text-[14px] font-inter font-[500]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repudiandae numquam autem nostrum dolor maiores sapiente eaque aliquam adipisci nam quam soluta expedita dicta, voluptate vel at nisi dolores voluptates.</p>
                <div className='flex flex-row justify-center items-center gap-[4px] rounded-full px-[13px] py-[10px] bg-[#CEFA05] cursor-pointer'>
                    <p className='text-[13px] font-roboto font-[500]'>Donate Now</p>
                    <div className='h-[25px] w-[25px] rounded-full border-[1px] bg-green-100 flex justify-center items-center'><HiArrowUpRight/></div>
                </div>
            </div>

            <div className="px-[50px] space-x-[20px] flex flex-row justify-center items-center mt-[40px]">
                <div className="w-[25%] h-[350px] gap-[5px] flex flex-col justify-normal items-center">
                    <div className="h-[80%] w-full border-[2px] bg-[#CEFA05] rounded-md"></div>
                    <div className="h-[20%] w-full">
                        <div className='flex flex-row justify-start items-center gap-[4px] rounded-full px-[7px] py-[7px] bg-gray-100 cursor-pointer'>
                            <div className='h-[35px] w-[35px] rounded-full border-[1px] bg-[#CEFA05] flex justify-center items-center'><HiSparkles/></div>
                            <p className='text-[13px] font-roboto font-[500]'>Amplify Their Voice</p>
                        </div>
                    </div>
                </div>


                <div className="w-[25%] h-[350px] flex flex-col justify-normal items-center gap-[10px] mt-[300px]">
                    <div className="w-full flex flex-row justify-start items-center gap-[4px] rounded-full px-[7px] py-[7px] bg-gray-100"><p className="text-[13px]">Help for 8,892 Children in India</p></div>
                    <div className="bg-[#CEFA05] rounded-md px-[20px] py-[15px]">
                        <p className="text-[28px] font-semibold">62%</p>
                        <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur ipsum a, deserunt ut facilis at eius nesciunt? </p>
                    </div>
                </div>


                <div className="w-[25%] h-[350px] flex flex-col justify-normal items-center">
                    <div className="h-[60%] w-full bg-[#CEFA05] rounded-md flex flex-col justify-center items-center text-center px-[20px]">
                        <div className="h-[50px] w-[50px] flex justify-center items-center"><IoIosSunny className="h-[35px] w-[35px]"/></div>
                        <p className="font-semibold pt-[20px]">Support</p>
                        <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi dicta est commodi. </p>
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-1">
                        <p className="text-[13px]">Find a Child</p>
                        <HiArrowUpRight/>
                    </div>
                </div>


                <div className="w-[25%] h-[400px] flex flex-col justify-normal items-center"></div>
            </div>
        </div>
    );
}
 
export default Section1;