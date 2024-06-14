import { useState } from "react";
import { HiMiniArrowLeft } from "react-icons/hi2";
import { HiMiniArrowRight } from "react-icons/hi2"; 
const Section6 = () => {
   const [tab, setTab] = useState(0);

   const increment = () => {
    if (tab < 3){
    setTab(preTab => preTab + 1);
    }
   };
   const decrement = () => {
    if (tab > -3){
    setTab(preTab => preTab - 1);
    }
   };

    return (
        <div className="mt-[50px] px-[5px] lg:px-[50px]">
            <div className="text-center">
                <p className="text-[28px] font-semibold">Spreading Smiles, Changing Lives</p>
                <p className="text-[13px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat odio maxime nobis dolorum distinctio dolor minus magni, ratione rem vero <br /> dignissimos delectus ipsa quod. Expedita animi veritatis quas laboriosam mollitia?</p>
            </div>

            <div className="border-[#FFD4A1] rounded-lg border-[5px] mt-[30px] bg-slate-100 px-[50px] md:px-[100px] py-[40px]">
                <div className="flex flex-row justify-center items-center gap-x-[10px] md:gap-x-[30px]">
                    <div className="h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full bg-[#F7941D] flex justify-center items-center border-[3px] border-[#E9E9E9] shrink-0" onClick={ decrement }><HiMiniArrowLeft/></div>
                    <div className={`${tab === -3 ? "bg-[#F7941D] h-[29px] w-[29px] md:h-[40px] md:w-[40px]" : "bg-[#E9E9E9]"} h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full shrink-0`}></div>
                    <div className={`${tab === -2 ? "bg-[#F7941D] h-[29px] w-[29px] md:h-[40px] md:w-[40px]" : "bg-[#E9E9E9]"} h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full shrink-0`}></div>
                    <div className={`${tab === -1 ? "bg-[#F7941D] h-[29px] w-[29px] md:h-[40px] md:w-[40px]" : "bg-[#E9E9E9]"} h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full shrink-0`}></div>
                    <div className={`${tab === 0 ? "bg-[#F7941D] h-[29px] w-[29px] md:h-[40px] md:w-[40px]" : "bg-[#E9E9E9]"} h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full shrink-0`}></div>
                    <div className={`${tab === 1 ? "bg-[#F7941D] h-[29px] w-[29px] md:h-[40px] md:w-[40px]" : "bg-[#E9E9E9]"} h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full shrink-0`}></div>
                    <div className={`${tab === 2 ? "bg-[#F7941D] h-[29px] w-[29px] md:h-[40px] md:w-[40px]" : "bg-[#E9E9E9]"} h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full shrink-0`}></div>
                    <div className={`${tab === 3 ? "bg-[#F7941D] h-[29px] w-[29px] md:h-[40px] md:w-[40px]" : "bg-[#E9E9E9]"} h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full shrink-0`}></div>
                    <div className="h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full bg-[#F7941D] flex justify-center items-center border-[3px] border-[#E9E9E9] shrink-0" onClick={ increment }><HiMiniArrowRight/></div>
                </div>
                <div className="px-[10px] md:px-[50px] md:border-[5px] rounded-lg border-white flex justify-center items-center mt-[20px]">
                    <div className="flex flex-row justify-center gap-x-[20px] py-[50px]">
                        <div className="border-[3px] h-[80px] w-[60px] shrink-0 hidden md:block"></div>
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