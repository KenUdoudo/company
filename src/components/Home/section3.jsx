import { HiArrowUpRight } from "react-icons/hi2";
const Section3 = () => {
    return (
        <div className="mt-[50px]">
            <div className="text-center flex flex-col justify-center items-center">
                <p className="text-[28px] font-semibold">Empowering Children, Creating Futures</p>
                <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quo nesciunt est similique quidem, dignissimos pariatur ad eligendi! <br /> Aperiam harum exercitationem aut incidunt quos, perferendis vero suscipit doloribus dolorum veritatis!</p>
                <p className="text-[13px] font-medium rounded-full px-[10px] py-[10px] bg-gray-200 mt-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quo nesciunt est similique quidem, dignissimos pariatur ad eligendi! </p>
            </div>

            <div className="flex flex-row justify-center items-center px-[50px] space-x-[30px] mt-[20px]">
                <div className="w-[40%] bg-[#dfee9b] rounded-lg border-[5px]"></div>
                <div className="w-[60%] bg-gray-200 p-[30px] rounded-lg">
                    <div className="flex flex-row justify-between items-center">
                        <p className="font-semibold text-[20px]">Mission</p>
                        <div className='flex flex-row justify-center items-center gap-[4px] rounded-full bg-white px-[13px] py-[10px] cursor-pointer'>
                            <p className='text-[13px] font-roboto font-[500]'>Learn More</p>
                            <HiArrowUpRight/>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
}
 
export default Section3;