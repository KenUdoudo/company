import { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io"; 
const AccItem = ({ number, title, content, isOpen, onToggle }) => {
    return (  
        <div className="rounded-md bg-white mb-[20px]">
            <button onClick={onToggle} className="w-full text-left p-4 focus-outline-none focus:bg-gray-100 hover:bg-gray-100">
                <div className="flex justify-between items-center">
                    <div className="flex flex-row items-center space-x-[20px]">
                        <span className="text-[28px] font-semibold">{number}</span>
                        <span className="text-[13px] md:text-[16px] font-semibold">{title}</span>
                    </div>
                    <span className="h-[30px] w-[30px] rounded-full bg-[#F7941D] flex justify-center items-center shrink-0">{isOpen ? <IoMdClose /> : <HiPlus />}</span>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 bg-gray-50">
                    { content }
                </div>
            )}
        </div>
    );
};
const Acc = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };
    const items = [
        {
            number: '01',
            title: 'Accordion Item 1',
            content: 'This is the content for item 1.'
        },
        {
            number: '02',
            title: 'Accordion Item 2',
            content: 'This is the content for item 2.'
        },
        {
            number: '03',
            title: 'Accordion Item 3',
            content: 'This is the content for item 3.'
        }
    ];
    return (
        <div className="w-full px-[20px] py-[20px] font-monts">
            {items.map((item, index) =>(
                <AccItem 
                    key={index}
                    number={item.number}
                    title={item.title}
                    content={item.content}
                    isOpen={index === openIndex}
                    onToggle={() => toggleItem(index)}/>
            ))}
        </div>
    );
};

 
export default Acc;