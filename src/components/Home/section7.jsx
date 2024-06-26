import { useState } from "react";
import { HiPlus } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import Acc from "./accordion";
const Section7 = () => {
  const [displayText1, setDisplayText1] = useState("");
  const [icon1, setIcon1] = useState(<HiPlus />);

  const [displayText2, setDisplayText2] = useState("");
  const [icon2, setIcon2] = useState(<HiPlus />);

  const [displayText3, setDisplayText3] = useState("");
  const [icon3, setIcon3] = useState(<HiPlus />);

  const [displayText4, setDisplayText4] = useState("");
  const [icon4, setIcon4] = useState(<HiPlus />);

  const [displayText5, setDisplayText5] = useState("");
  const [icon5, setIcon5] = useState(<HiPlus />);

  const handleClick = (buttonId) => {
    let message = "";
    let icon = <HiPlus />;
    switch (buttonId) {
      case 1:
        message = "Text for button 1";
        setDisplayText1((prevText) => (prevText === message ? "" : message));
        icon = displayText1 === message ? <HiPlus /> : <IoMdClose />;
        setIcon1(icon);
        break;
      case 2:
        message = "Text for button 2";
        setDisplayText2((prevText) => (prevText === message ? "" : message));
        icon = displayText2 === message ? <HiPlus /> : <IoMdClose />;
        setIcon2(icon);
        break;
      case 3:
        message = "Text for button 3";
        setDisplayText3((prevText) => (prevText === message ? "" : message));
        icon = displayText3 === message ? <HiPlus /> : <IoMdClose />;
        setIcon3(icon);
        break;
      case 4:
        message = "Text for button 4";
        setDisplayText4((prevText) => (prevText === message ? "" : message));
        icon = displayText4 === message ? <HiPlus /> : <IoMdClose />;
        setIcon4(icon);
        break;
      case 5:
        message = "Text for button 5";
        setDisplayText5((prevText) => (prevText === message ? "" : message));
        icon = displayText5 === message ? <HiPlus /> : <IoMdClose />;
        setIcon5(icon);
        break;
      default:
        message = "";
    }
  };
  return (
    <div className="mt-[50px] px-[0] md:px-[20px] lg:px-[50px]">
      <div className="text-center">
        <p className="text-[28px] font-semibold">Frequently Asked Questions</p>
        <p className="text-[13px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat odio
          maxime nobis dolorum distinctio dolor minus magni, ratione rem vero{" "}
          <br /> dignissimos delectus ipsa quod. Expedita animi veritatis quas
          laboriosam mollitia?
        </p>
      </div>
      <div className="bg-[#e9e9e9] w-full rounded-md mt-[50px]">
        <Acc />
      </div>
    </div>
  );
};

export default Section7;
