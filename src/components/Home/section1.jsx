import { HiArrowUpRight } from "react-icons/hi2";
import { IoIosSunny } from "react-icons/io";
import { HiSparkles } from "react-icons/hi2";
const Section1 = () => {
    return (
        <div className="mt-[20px]">
            <div className="flex flex-col justify-center items-center text-center gap-y-[20px]">
                <p className="text-[38px] font-[600]">Transforming Lives Through <br /> Hope and Education</p>
                <p className="px-[80px] text-[14px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur repudiandae numquam autem nostrum dolor maiores sapiente eaque aliquam adipisci nam quam soluta expedita dicta, voluptate vel at nisi dolores voluptates.</p>
                <div className='flex flex-row justify-center items-center gap-[4px] rounded-full px-[13px] py-[10px] bg-[#C2FF66] cursor-pointer'>
                    <p className='text-[13px] font-[500]'>Donate Now</p>
                    <div className='h-[25px] w-[25px] rounded-full border-[1px] bg-[#D0F49C] flex justify-center items-center'><HiArrowUpRight/></div>
                </div>
            </div>

            <div className="px-[50px] space-x-[20px] flex flex-row justify-center items-center h-[500px]">
                <div className="w-[25%] h-[350px] gap-[5px] flex flex-col justify-normal items-center">
                    <div className="h-[80%] w-full border-[2px] bg-[#D0F49C] rounded-md"></div>
                    <div className="h-[20%] w-full">
                        <div className='flex flex-row justify-start items-center gap-[4px] rounded-full px-[7px] py-[7px] bg-gray-100 cursor-pointer'>
                            <div className='h-[35px] w-[35px] rounded-full border-[1px] bg-[#C2FF66] flex justify-center items-center'><HiSparkles/></div>
                            <p className='text-[13px] font-roboto font-[500]'>Amplify Their Voice</p>
                        </div>
                    </div>
                </div>


                <div className="w-[25%] h-[350px] flex flex-col justify-normal items-center gap-[10px] mt-[260px]">
                    <div className="w-full flex flex-row justify-start items-center gap-[4px] rounded-full px-[10px] py-[7px] bg-gray-100"><p className="text-[13px]">Help for 8,892 Children in India</p></div>
                    <div className="bg-[#D0F49C] rounded-md px-[20px] py-[15px]">
                        <p className="text-[28px] font-semibold">62%</p>
                        <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur ipsum a, deserunt ut facilis at eius nesciunt? </p>
                    </div>
                </div>


                <div className="w-[25%] h-[350px] flex flex-col justify-normal items-center gap-[10px] mt-[5%]">
                    <div className="h-[73%] w-full bg-[#D0F49C] rounded-md flex flex-col justify-center items-center text-center px-[20px]">
                        <div className="h-[50px] w-[50px] flex justify-center items-center"><IoIosSunny className="h-[35px] w-[35px]"/></div>
                        <p className="font-semibold pt-[20px]">Support</p>
                        <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi dicta est commodi. </p>
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-1 rounded-full px-[7px] py-[7px] bg-gray-100 w-full">
                        <p className="text-[13px]">Find a Child</p>
                        <HiArrowUpRight/>
                    </div>
                </div>


                <div className="w-[25%] h-[400px] flex flex-col justify-normal items-center gap-[10px]">
                    <div className="flex flex-row justify-center items-center space-x-1 rounded-full px-[7px] py-[7px] bg-gray-100 w-full">
                            <p className="text-[13px]">Be a Volunteer</p>
                            <HiArrowUpRight/>
                    </div>
                    <div className="h-[75%] w-full bg-[#D0F49C] rounded-md flex flex-col justify-center text-[13px] px-[25px]">
                        <div className="h-[55%] w-full bg-[#BEF073] rounded-md"></div>
                        <p className="pt-[15px] font-semibold">Do Something Great</p>
                        <p>Help Others to Move and Grow and be in a better world</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Section1;