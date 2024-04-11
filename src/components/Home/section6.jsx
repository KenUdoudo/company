import { useState } from "react";
import { HiMiniArrowLeft } from "react-icons/hi2";
import { HiMiniArrowRight } from "react-icons/hi2"; 
const Section6 = () => {
   const [tab, setTab] = useState(0);

   const increment = () => {
    setTab(preTab => preTab + 1);
   };
   const decrement = () => {
    setTab(preTab => preTab - 1);
   };

    return (
        <div className="mt-[50px] px-[50px]">
            <div className="text-center">
                <p className="text-[28px] font-semibold">Spreading Smiles, Changing Lives</p>
                <p className="text-[13px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat odio maxime nobis dolorum distinctio dolor minus magni, ratione rem vero <br /> dignissimos delectus ipsa quod. Expedita animi veritatis quas laboriosam mollitia?</p>
            </div>

            <div className="border-[#EAFFCC] rounded-lg border-[5px] mt-[30px] bg-slate-100 px-[100px] py-[40px] h-[398px]">
                <div className="flex flex-row justify-center items-center space-x-[30px]">
                    <div className="h-[32px] w-[32px] rounded-full bg-[#C2FF66] flex justify-center items-center border-[3px] border-[#E9E9E9]" onClick={ decrement }><HiMiniArrowLeft/></div>
                    <div className={`${tab === -3 ? "bg-[#C2FF66] h-[40px] w-[40px]" : ""} h-[35px] w-[35px] rounded-full bg-[#E9E9E9]`}></div>
                    <div className={`${tab === -2 ? "bg-[#C2FF66] h-[40px] w-[40px]" : ""} h-[35px] w-[35px] rounded-full bg-[#E9E9E9]`}></div>
                    <div className={`${tab === -1 ? "bg-[#C2FF66] h-[40px] w-[40px]" : ""} h-[35px] w-[35px] rounded-full bg-[#E9E9E9]`}></div>
                    <div className={`${tab === 0 ? "bg-[#C2FF66] h-[40px] w-[40px]" : ""} h-[35px] w-[35px] rounded-full bg-[#E9E9E9]`}></div>
                    <div className={`${tab === 1 ? "bg-[#C2FF66] h-[40px] w-[40px]" : ""} h-[35px] w-[35px] rounded-full bg-[#E9E9E9]`}></div>
                    <div className={`${tab === 2 ? "bg-[#C2FF66] h-[40px] w-[40px]" : ""} h-[35px] w-[35px] rounded-full bg-[#E9E9E9]`}></div>
                    <div className={`${tab === 3 ? "bg-[#C2FF66] h-[40px] w-[40px]" : ""} h-[35px] w-[35px] rounded-full bg-[#E9E9E9]`}></div>
                    <div className="h-[32px] w-[32px] rounded-full bg-[#C2FF66] flex justify-center items-center border-[3px] border-[#E9E9E9]" onClick={ increment }><HiMiniArrowRight/></div>
                </div>
                <div className="px-[50px] border-[5px] rounded-lg border-white flex justify-center items-center mt-[20px]">
                    <div className="flex flex-row justify-center space-x-[20px] py-[50px]">
                        <div className="border-[1px] h-[80px] w-[60px] shrink-0"></div>
                        {tab === -3 && (
                            <div className="flex flex-col gap-[20px]">
                                <p className="text-[20px] font-semibold">"Thank you so much for your support!"</p>
                                <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate consequuntur odit nobis dolores ea dolor similique adipisci dignissimos? Nihil blanditiis repellat natus aliquam labore quia voluptatem sunt laborum possimus?</p>
                                <p className="text-[13px]">- John Smith</p>
                            </div>
                        )}
                        {tab === -2 && (
                            <div className="flex flex-col gap-[20px]">
                                <p className="text-[20px] font-semibold">"Dey play"</p>
                                <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate consequuntur odit nobis dolores ea dolor similique adipisci dignissimos? Nihil blanditiis repellat natus aliquam labore quia voluptatem sunt laborum possimus?</p>
                                <p className="text-[13px]">- Ikike John</p>
                            </div>
                        )}
                        {tab === -1 && (
                            <div className="flex flex-col gap-[20px]">
                                <p className="text-[20px] font-semibold">"Thank you so much"</p>
                                <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate consequuntur odit nobis dolores ea dolor </p>
                                <p className="text-[13px]">- Jane Smith</p>
                            </div>
                        )}
                        {tab === 0 && (
                            <div className="flex flex-col gap-[20px]">
                                <p className="text-[20px] font-semibold">"Thank you so much for your support!"</p>
                                <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate consequuntur odit nobis dolores ea dolor similique adipisci dignissimos? Nihil blanditiis repellat natus aliquam labore quia voluptatem sunt laborum possimus?</p>
                                <p className="text-[13px]">- John Smith</p>
                            </div>
                        )}
                        {tab === 1 && (
                            <div className="flex flex-col gap-[20px]">
                                <p className="text-[20px] font-semibold">"Thank you so much"</p>
                                <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate consequuntur odit nobis dolores ea dolor </p>
                                <p className="text-[13px]">- Jane Smith</p>
                            </div>
                        )}
                         {tab === 2 && (
                            <div className="flex flex-col gap-[20px]">
                                <p className="text-[20px] font-semibold">"Dey play"</p>
                                <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate consequuntur odit nobis dolores ea dolor similique adipisci dignissimos? Nihil blanditiis repellat natus aliquam labore quia voluptatem sunt laborum possimus?</p>
                                <p className="text-[13px]">- Ikike John</p>
                            </div>
                        )}
                        {tab === 3 && (
                            <div className="flex flex-col gap-[20px]">
                                <p className="text-[20px] font-semibold">"Thank you so much for your support!"</p>
                                <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate consequuntur odit nobis dolores ea dolor similique adipisci dignissimos? Nihil blanditiis repellat natus aliquam labore quia voluptatem sunt laborum possimus?</p>
                                <p className="text-[13px]">- John Smith</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Section6;