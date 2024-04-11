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
            <div className="bg-[#E9E9E9] p-[20px] rounded-lg mt-[20px]">
                <div className=" flex flex-row justify-between items-center px-[30px] h-[72px] bg-white rounded-md">
                    <div className="flex flex-row items-center space-x-[20px]">
                        <p className="text-[28px] font-semibold">01</p>
                        <div>
                            <p className="font-semibold">What is ForHelp?</p>
                            {displayText ? 'lorem kisubvfiuyb': '' }
                        </div>
                    </div>
                    <div className="h-[30px] w-[30px] rounded-full bg-[#D0F49C] flex justify-center items-center" onclick={ handleClick }>
                        {iconClicked ? <IoMdClose /> : <HiPlus />}
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Section7;