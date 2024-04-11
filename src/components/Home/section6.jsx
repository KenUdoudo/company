import { useState } from "react";
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

            <div className="border-[#dfee9b] rounded-lg border-[5px] mt-[30px]">
                <div>
                    <div className="h-[35px] w-[35px] rounded-full bg-[#C2FF66]" onClick={ decrement }></div>
                    <div className={`${tab === -3 ? "bg-[#C2FF66]" : ""} h-[35px] w-[35px] rounded-full bg-[#E9E9E9]`}></div>
                    <div className={`${tab === -2 ? "bg-[#C2FF66]" : ""} h-[35px] w-[35px] rounded-full bg-[#E9E9E9]`}></div>
                    <div className={`${tab === -1 ? "bg-[#C2FF66]" : ""} h-[35px] w-[35px] rounded-full bg-[#E9E9E9]`}></div>
                    <div className={`${tab === 0 ? "bg-[#C2FF66]" : ""} h-[35px] w-[35px] rounded-full bg-[#E9E9E9]`}></div>
                    <div className={`${tab === 1 ? "bg-[#C2FF66]" : ""} h-[35px] w-[35px] rounded-full bg-[#E9E9E9]`}></div>
                    <div className={`${tab === 2 ? "bg-[#C2FF66]" : ""} h-[35px] w-[35px] rounded-full bg-[#E9E9E9]`}></div>
                    <div className={`${tab === 3 ? "bg-[#C2FF66]" : ""} h-[35px] w-[35px] rounded-full bg-[#E9E9E9]`}></div>
                    <div className="h-[35px] w-[35px] rounded-full bg-[#C2FF66]" onClick={ increment }></div>
                </div>
            </div>

        </div>
    );
}
 
export default Section6;