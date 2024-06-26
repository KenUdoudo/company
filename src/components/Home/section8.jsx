import { HiArrowUpRight } from "react-icons/hi2";
const Section8 = () => {
    return (
        <div className="px-[0] md:px-[20px] lg:px-[50px] mt-[50px] ">
            <div  className="bg-[#F7941D] py-[50px] rounded-lg flex flex-col justify-center items-center px-[10px] md:px-[40px]">
                <p className="text-[28px] font-semibold text-center">Support PLEF to unlock the vast and <br className="hidden md:block"/> robust human capital in Nigerians</p>
                <p className="text-[13px] text-center">Your contributions will help PLEF recognize & incentivizethe innovative minds in the Nation</p>
                <div className="h-[58px] mt-[20px] flex flex-row justify-center items-center rounded-full px-[10px] gap-x-[10px] bg-[#FFD4A1] md:w-full">
                    <div className="hidden md:block text-[14px] w-[520px] text-black grow outline-none bg-transparent font-semibold cursor-default">To get started with contributing, Click,</div>
                    <div className='flex flex-row justify-center items-center gap-[4px] rounded-full px-[13px] py-[10px] bg-[#F7941D] cursor-pointer'>
                        <p className='text-[13px] font-[500] text-nowrap'>Contribute</p>
                        <div className='h-[25px] w-[25px] rounded-full border-[1px] bg-orange-100 flex justify-center items-center'><HiArrowUpRight/></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default Section8;