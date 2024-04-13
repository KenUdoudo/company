import { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io"; 
const Section7 = () => {
    const [displayText1, setDisplayText1] = useState('');
    const [icon1, setIcon1] = useState(<HiPlus />);

    const [displayText2, setDisplayText2] = useState('');
    const [icon2, setIcon2] = useState(<HiPlus />);

    const [displayText3, setDisplayText3] = useState('');
    const [icon3, setIcon3] = useState(<HiPlus />);

    const [displayText4, setDisplayText4] = useState('');
    const [icon4, setIcon4] = useState(<HiPlus />);

    const [displayText5, setDisplayText5] = useState('');
    const [icon5, setIcon5] = useState(<HiPlus />);
    

    const handleClick = (buttonId) => {
        let message = '';
        let icon = <HiPlus />;
        switch (buttonId) {
            case 1:
                message = 'Text for button 1'
                setDisplayText1(prevText => prevText === message ? '' : message);
                icon = displayText1 === message ? <HiPlus /> : <IoMdClose />;
                setIcon1(icon);
                break;
            case 2:
                message = 'Text for button 2'
                setDisplayText2(prevText => prevText === message ? '' : message);
                icon = displayText2 === message ? <HiPlus /> : <IoMdClose />;
                setIcon2(icon);
                break;
            case 3:
                message = 'Text for button 3'
                setDisplayText3(prevText => prevText === message ? '' : message);
                icon = displayText3 === message ? <HiPlus /> : <IoMdClose />;
                setIcon3(icon);
                break;
            case 4:
                message = 'Text for button 4'
                setDisplayText4(prevText => prevText === message ? '' : message);
                icon = displayText4 === message ? <HiPlus /> : <IoMdClose />;
                setIcon4(icon);
                break;
            case 5:
                message = 'Text for button 5'
                setDisplayText5(prevText => prevText === message ? '' : message);
                icon = displayText5 === message ? <HiPlus /> : <IoMdClose />;
                setIcon5(icon);
                break;
            default:
                message = '';
        }
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
                            {displayText1}
                        </div>
                    </div>
                    <div className="h-[30px] w-[30px] rounded-full bg-[#D0F49C] flex justify-center items-center" onClick={() => handleClick(1)}>
                        {icon1}
                    </div>
                </div>
                <div className=" flex flex-row justify-between items-center px-[30px] h-[72px] bg-white rounded-md">
                    <div className="flex flex-row items-center space-x-[20px]">
                        <p className="text-[28px] font-semibold">02</p>
                        <div>
                            <p className="font-semibold">How can I help ForHelp?</p>
                            {displayText2}
                        </div>
                    </div>
                    <div className="h-[30px] w-[30px] rounded-full bg-[#D0F49C] flex justify-center items-center" onClick={() => handleClick(2)}>
                        {icon2}
                    </div>
                </div>
                <div className=" flex flex-row justify-between items-center px-[30px] h-[72px] bg-white rounded-md">
                    <div className="flex flex-row items-center space-x-[20px]">
                        <p className="text-[28px] font-semibold">03</p>
                        <div>
                            <p className="font-semibold">How does ForHelp use donations?</p>
                            {displayText3}
                        </div>
                    </div>
                    <div className="h-[30px] w-[30px] rounded-full bg-[#D0F49C] flex justify-center items-center" onClick={() => handleClick(3)}>
                        {icon3}
                    </div>
                </div>
                <div className=" flex flex-row justify-between items-center px-[30px] h-[72px] bg-white rounded-md">
                    <div className="flex flex-row items-center space-x-[20px]">
                        <p className="text-[28px] font-semibold">04</p>
                        <div>
                            <p className="font-semibold">How can I be sure that my donation is used effectively?</p>
                            {displayText4}
                        </div>
                    </div>
                    <div className="h-[30px] w-[30px] rounded-full bg-[#D0F49C] flex justify-center items-center" onClick={() => handleClick(4)}>
                        {icon4}
                    </div>
                </div>
                <div className=" flex flex-row justify-between items-center px-[30px] h-[72px] bg-white rounded-md">
                    <div className="flex flex-row items-center space-x-[20px]">
                        <p className="text-[28px] font-semibold">05</p>
                        <div>
                            <p className="font-semibold">What is the impact of ForHelp's work?</p>
                            {displayText5}
                        </div>
                    </div>
                    <div className="h-[30px] w-[30px] rounded-full bg-[#D0F49C] flex justify-center items-center" onClick={() => handleClick(5)}>
                        {icon5}
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Section7;