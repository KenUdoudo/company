import { HiArrowUpRight } from "react-icons/hi2";
const Section8 = () => {
    return (
        <div className="px-[50px] mt-[50px] ">
            <div  className="bg-[#F7941D] py-[50px] rounded-lg flex flex-col justify-center items-center">
                <p className="text-[28px] font-semibold text-center">Donate Now and Help Level Up the Lives <br />of Children in Need</p>
                <p className="text-[13px] text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consecteturcommodi eligendi ullam <br /> eius voluptatum veniam qui, </p>
                <div className="h-[58px] mt-[20px] flex flex-row justify-center items-center rounded-full px-[10px] space-x-[10px] bg-[#FFD4A1]">
                    <div className="text-[14px] w-[520px] text-black grow outline-none bg-transparent font-semibold cursor-default">Click here to donate now and help level up the lives of children in need</div>
                    <div className='flex flex-row justify-center items-center gap-[4px] rounded-full px-[13px] py-[10px] bg-[#F7941D] cursor-pointer'>
                        <p className='text-[13px] font-[500]'>Donate Now</p>
                        <div className='h-[25px] w-[25px] rounded-full border-[1px] bg-orange-100 flex justify-center items-center'><HiArrowUpRight/></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default Section8;