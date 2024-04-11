import { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io"; 
const Section7 = () => {
    const [iconClicked, setIconClicked] = useState(false);
    const [displayText, setDisplayText] = useState(false);

    const handleClick = () => {
        setIconClicked(prevState => !prevState);
        setDisplayText(prevState => !prevState);
    }
    return (
        <div className="mt-[50px] px-[50px]">
            <div className="text-center">
                <p className="text-[28px] font-semibold">Frequently Asked Questions</p>
                <p className="text-[13px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat odio maxime nobis dolorum distinctio dolor minus magni, ratione rem vero <br /> dignissimos delectus ipsa quod. Expedita animi veritatis quas laboriosam mollitia?</p>
            </div>
            <div className="bg-[#E9E9E9] p-[30px] rounded-lg mt-[20px] flex flex-col gap-y-[20px]">
                <div className=" flex flex-row justify-between items-center px-[30px] h-[72px] bg-white rounded-md">
                    <div className="flex flex-row items-center space-x-[20px]">
                        <p className="text-[28px] font-semibold">01</p>
                        <div>
                            <p className="font-semibold">What is ForHelp?</p>
                            {displayText && <p className="text-[13px] py-[2px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>}
                        </div>
                    </div>
                    <div className="h-[30px] w-[30px] rounded-full bg-[#D0F49C] flex justify-center items-center" onClick={ handleClick }>
                        {iconClicked ? <IoMdClose /> : <HiPlus />}
                    </div>
                </div>
                <div className=" flex flex-row justify-between items-center px-[30px] h-[72px] bg-white rounded-md">
                    <div className="flex flex-row items-center space-x-[20px]">
                        <p className="text-[28px] font-semibold">02</p>
                        <div>
                            <p className="font-semibold">How can I help ForHelp?</p>
                            {displayText && <p className="text-[13px] py-[2px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>}
                        </div>
                    </div>
                    <div className="h-[30px] w-[30px] rounded-full bg-[#D0F49C] flex justify-center items-center" onClick={ handleClick }>
                        {iconClicked ? <IoMdClose /> : <HiPlus />}
                    </div>
                </div>
                <div className=" flex flex-row justify-between items-center px-[30px] h-[72px] bg-white rounded-md">
                    <div className="flex flex-row items-center space-x-[20px]">
                        <p className="text-[28px] font-semibold">03</p>
                        <div>
                            <p className="font-semibold">How does ForHelp use donations?</p>
                            {displayText && <p className="text-[13px] py-[2px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>}
                        </div>
                    </div>
                    <div className="h-[30px] w-[30px] rounded-full bg-[#D0F49C] flex justify-center items-center" onClick={ handleClick }>
                        {iconClicked ? <IoMdClose /> : <HiPlus />}
                    </div>
                </div>
                <div className=" flex flex-row justify-between items-center px-[30px] h-[72px] bg-white rounded-md">
                    <div className="flex flex-row items-center space-x-[20px]">
                        <p className="text-[28px] font-semibold">04</p>
                        <div>
                            <p className="font-semibold">How can I be sure that my donation is used effectively?</p>
                            {displayText && <p className="text-[13px] py-[2px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>}
                        </div>
                    </div>
                    <div className="h-[30px] w-[30px] rounded-full bg-[#D0F49C] flex justify-center items-center" onClick={ handleClick }>
                        {iconClicked ? <IoMdClose /> : <HiPlus />}
                    </div>
                </div>
                <div className=" flex flex-row justify-between items-center px-[30px] h-[72px] bg-white rounded-md">
                    <div className="flex flex-row items-center space-x-[20px]">
                        <p className="text-[28px] font-semibold">05</p>
                        <div>
                            <p className="font-semibold">What is the impact of ForHelp's work?</p>
                            {displayText && <p className="text-[13px] py-[2px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>}
                        </div>
                    </div>
                    <div className="h-[30px] w-[30px] rounded-full bg-[#D0F49C] flex justify-center items-center" onClick={ handleClick }>
                        {iconClicked ? <IoMdClose /> : <HiPlus />}
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Section7;