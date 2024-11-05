import { useState } from "react";
import { HiMiniArrowLeft } from "react-icons/hi2";
import { HiMiniArrowRight } from "react-icons/hi2";
import { FaQuoteRight } from "react-icons/fa";
const Section6 = () => {
  const [tab, setTab] = useState(0);

  const increment = () => {
    if (tab < 3) {
      setTab((preTab) => preTab + 1);
    }
  };
  const decrement = () => {
    if (tab > -3) {
      setTab((preTab) => preTab - 1);
    }
  };

  return (
    <div className="mt-[50px] px-[5px] lg:px-[50px]">
      <div className="text-center">
        <p className="text-[28px] font-semibold">Small Supports, Big Impact</p>
        <p className="text-[13px]">
          PLEF is humbled by the Youths whose academic & vocational journey was
          propelled by our little recognition and reward
        </p>
      </div>

      <div className="border-[#FFD4A1] rounded-lg border-[5px] mt-[30px] bg-[#fffeff] px-[50px] md:px-[100px] py-[40px]">
        <div className="flex flex-row justify-center items-center gap-x-[10px] md:gap-x-[30px]">
          <div
            className="h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full bg-[#F7941D] hover:bg-[#c28438] flex justify-center items-center border-[3px] border-[#fbfcfa] shrink-0"
            onClick={decrement}
          >
            <HiMiniArrowLeft />
          </div>
          <div
            className={`${
              tab === -3
                ? "bg-[#F7941D] h-[29px] w-[29px] md:h-[40px] md:w-[40px]"
                : "bg-[#fbfcfa]"
            } h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full shrink-0  transition duration-300 ease-in-out`}
          ></div>
          <div
            className={`${
              tab === -2
                ? "bg-[#F7941D] h-[29px] w-[29px] md:h-[40px] md:w-[40px]"
                : "bg-[#fbfcfa]"
            } h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full shrink-0 transition duration-300 ease-in-out`}
          ></div>
          <div
            className={`${
              tab === -1
                ? "bg-[#F7941D] h-[29px] w-[29px] md:h-[40px] md:w-[40px]"
                : "bg-[#fbfcfa]"
            } h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full shrink-0  transition duration-300 ease-in-out`}
          ></div>
          <div
            className={`${
              tab === 0
                ? "bg-[#F7941D] h-[29px] w-[29px] md:h-[40px] md:w-[40px]"
                : "bg-[#fbfcfa]"
            } h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full shrink-0  transition duration-300 ease-in-out`}
          ></div>
          <div
            className={`${
              tab === 1
                ? "bg-[#F7941D] h-[29px] w-[29px] md:h-[40px] md:w-[40px]"
                : "bg-[#fbfcfa]"
            } h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full shrink-0  transition duration-300 ease-in-out`}
          ></div>
          <div
            className={`${
              tab === 2
                ? "bg-[#F7941D] h-[29px] w-[29px] md:h-[40px] md:w-[40px]"
                : "bg-[#fbfcfa]"
            } h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full shrink-0  transition duration-300 ease-in-out`}
          ></div>
          <div
            className={`${
              tab === 3
                ? "bg-[#F7941D] h-[29px] w-[29px] md:h-[40px] md:w-[40px]"
                : "bg-[#fbfcfa]"
            } h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full shrink-0  transition duration-300 ease-in-out`}
          ></div>
          <div
            className="h-[25px] w-[25px] md:h-[32px] md:w-[32px] rounded-full bg-[#F7941D] hover:bg-[#c28438] flex justify-center items-center border-[3px] border-[#fbfcfa] shrink-0"
            onClick={increment}
          >
            <HiMiniArrowRight />
          </div>
        </div>
        <div className="px-[10px] md:px-[50px] md:border-[5px] rounded-lg border-white flex justify-center items-center mt-[20px]">
          <div className="flex flex-row justify-center gap-x-[20px] py-[50px]">
            <div className="shrink-0 hidden md:block"><FaQuoteRight className="h-[80px] w-[80px]"/></div>
            {tab === -3 && (
              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px]">
                As a two-time beneficiary of the foundation programs, I’ve felt and seen the positive impact that PLEF can bring about with just a little recognition & reward to people who’ve been starved of it.
                </p>
                <p className="text-[13px]">– Egbon Cedric</p>
              </div>
            )}
            {tab === -2 && (
              <div className="flex flex-col gap-[20px]">
                <p className="text-[16px]">
                It has been a pleasure to be a two-time beneficiary of the Piunoshaba Life Empowerment Foundation. The academic support aid I received not only empowered me but also gave me the confidence to pursue my academic goals with renewed determination. I am deeply grateful to the foundation for their unwavering support and for making a significant impact on my educational journey.
                </p>
                <p className="text-[13px]">– Okagbare Emmanuel</p>
              </div>
            )}
            {tab === -1 && (
              <div className="flex flex-col gap-[20px]">
              <p className="text-[16px]">
              As a two-time beneficiary of the foundation programs, I’ve felt and seen the positive impact that PLEF can bring about with just a little recognition & reward to people who’ve been starved of it.
              </p>
              <p className="text-[13px]">– Egbon Cedric</p>
            </div>
            )}
            {tab === 0 && (
              <div className="flex flex-col gap-[20px]">
              <p className="text-[16px]">
              It has been a pleasure to be a two-time beneficiary of the Piunoshaba Life Empowerment Foundation. The academic support aid I received not only empowered me but also gave me the confidence to pursue my academic goals with renewed determination. I am deeply grateful to the foundation for their unwavering support and for making a significant impact on my educational journey.
              </p>
              <p className="text-[13px]">– Okagbare Emmanuel</p>
            </div>
            )}
            {tab === 1 && (
              <div className="flex flex-col gap-[20px]">
              <p className="text-[16px]">
              As a two-time beneficiary of the foundation programs, I’ve felt and seen the positive impact that PLEF can bring about with just a little recognition & reward to people who’ve been starved of it.
              </p>
              <p className="text-[13px]">– Egbon Cedric</p>
            </div>
            )}
            {tab === 2 && (
              <div className="flex flex-col gap-[20px]">
              <p className="text-[16px]">
              It has been a pleasure to be a two-time beneficiary of the Piunoshaba Life Empowerment Foundation. The academic support aid I received not only empowered me but also gave me the confidence to pursue my academic goals with renewed determination. I am deeply grateful to the foundation for their unwavering support and for making a significant impact on my educational journey.
              </p>
              <p className="text-[13px]">– Okagbare Emmanuel</p>
            </div>
            )}
            {tab === 3 && (
              <div className="flex flex-col gap-[20px]">
              <p className="text-[16px]">
              As a two-time beneficiary of the foundation programs, I’ve felt and seen the positive impact that PLEF can bring about with just a little recognition & reward to people who’ve been starved of it.
              </p>
              <p className="text-[13px]">– Egbon Cedric</p>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
