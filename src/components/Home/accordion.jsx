import { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io"; 
const AccItem = ({ number, title, content, isOpen, onToggle }) => {
    return (  
        <div className="rounded-md bg-white mb-[20px] p-[10px]">
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
                <div className="p-4 bg-gray-50 text-[13px]">
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
            title: 'How can I help PLEF?',
            content: (
                   <div>
                        <p>There are several ways to support our project:</p>
                        <ul className="list-disc pl-5">
                            <li>Volunteer →  Join us as a volunteer to assist in various programs and activities.</li>
                            <li>Donate → Financial contributions are always welcome to help us expand our reach and impact.</li>
                            <li>Partner → Collaborate with us as a corporate or community partner to provide resources, expertise, or opportunities for our beneficiaries.</li>
                            <li>Advocate → Spread the word about our mission and programs to raise awareness and garner more support.</li>
                        </ul>
                   </div> 
            ),
        },
        {
            number: '02',
            title: 'How does PLEF receive donations and other contributions?',
            content: 'Donations can be made through our website via secure online payment methods. We also accept contributions via bank transfers, checks, and in-kind donations. For corporate sponsorships and larger contributions, please contact our fundraising team directly.'
        },
        {
            number: '03',
            title: 'How can I benefit from PLEF?',
            content: (
                <div>
                     <p>If you are a young person in Nigeria, you can benefit from our project by:</p>
                     <ul className="list-disc pl-5">
                         <li>Scholarships: Access financial aid to support your education.</li>
                         <li>Participating in Training Programs: Enroll in our vocational training courses to gain marketable skills.</li>
                         <li>Receiving Mentorship: Benefit from mentorship opportunities with experienced professionals.</li>
                         <li>Joining Workshops and Events: Attend our workshops and events to enhance your personal and professional development.</li>
                     </ul>
                </div> 
         ),
        },
        {
            number: '04',
            title: 'Who is eligible to benefit from PLEF?',
            content: 'Our programs are designed for young people in Nigeria, typically aged between 15 and 30 years. We prioritize individuals from underserved communities, those with financial needs, and those who show a strong commitment to academic and vocational excellence.'
        },
        {
            number: '05',
            title: 'What types of vocational training programs are offered?',
            content: 'While we do not offer training directly we partner with local skilled men to provide these vocational training programs in trades such as carpentry, tailoring, ICT, plumbing, agriculture, and more. Each program is designed to provide practical, hands-on experience and is led by experienced instructors.'
        },
        {
            number: '06',
            title: 'How does PLEF select beneficiaries?',
            content: 'Participants are selected based on a combination of factors, including, academic performance, financial need, commitment to personal and professional development, and recommendations from community leaders and educators. An application process is in place to ensure fairness and transparency.'
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