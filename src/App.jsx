import { useState } from "react";
import Home from "./pages/home";
import GalleryOptions from "./pages/GalleryOptions";
import Donate from "./pages/donate";
import ImpactAreas from "./pages/impact";
import SuccessStories from "./pages/success";
import About from "./pages/About";
import { HiMiniEnvelope } from "react-icons/hi2";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "./assets/newlogo.svg";
import { HiOutlineMenu } from "react-icons/hi";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <div className="px-[20px] lg:px-[50px] font-monts max-w-[1280px] mx-auto">
        <div className="flex flex-row justify-between items-center bg-white md:bg-[#fffeff] rounded-full px-[15px] py-[15px] mt-[10px] md:mt-[30px] w-full">
          <div className="flex items-center gap-[10px]">
            <Link to="/" className=" w-[100px]">
              <img src={logo} />
            </Link>
          </div>

          <button onClick={toggleMenu} className="block md:hidden z-30">
            <HiOutlineMenu className="h-[25px] w-[25px]" />
          </button>

          <div
            className={`fixed z-20 top-0 right-0 h-full bg-[#e9e9e9] w-[75%] transform ${
              isOpen ? "-translate-x-0" : "translate-x-full"
            } transition-transform duration-500 ease-in-out overflow-hidden`}
          >
            <div className="hidden flex-col items-start gap-y-[20px] px-[20px] py-[20px]">
              <Link
                to="/"
                className=" hover:bg-[#E9E9E9] rounded-full px-[15px] py-[3px] text-[16px] font-[500]"
              >
                Home
              </Link>
              <Link
                to="/gallery"
                className=" hover:bg-[#E9E9E9] rounded-full px-[15px] py-[3px] text-[16px] font-[500]"
              >
                Gallery
              </Link>
              <Link
                to="/contribute"
                className=" hover:bg-[#E9E9E9] rounded-full px-[15px] py-[3px] text-[16px] font-[500]"
              >
                Contribute
              </Link>
              <Link
                to="/stories"
                className=" hover:bg-[#E9E9E9] rounded-full px-[15px] py-[3px] text-[16px] font-[500]"
              >
                Stories
              </Link>
              <Link
                to="/blog"
                className=" hover:bg-[#E9E9E9] rounded-full px-[15px] py-[3px] text-[16px] font-[500]"
              >
                Blog
              </Link>
              <Link
                to="/aboutus"
                className=" hover:bg-[#E9E9E9] rounded-full px-[15px] py-[3px] text-[16px] font-[500]"
              >
                About Us
              </Link>
            </div>
            <div className="flex flex-col justify-center  mt-[80px]">
              <Link to="/GalleryOptions"><div className="flex flex-row justify-center items-center px-[13px] py-[10px]"><p className="text-[13px] text-center">Gallery</p></div></Link>
            <a href="mailto:officialplefoundation@gmail.com"><div className="flex flex-row justify-center items-center gap-[4px] px-[13px] py-[10px] bg-[#F7941D] hover:bg-[#c28438] cursor-pointer">
              <p className="text-[13px] font-[500]">Contact Us</p>
              <div className="h-[25px] w-[25px] rounded-full border-[1px] bg-[#FFD4A1] flex justify-center items-center">
                <HiMiniEnvelope />
              </div>
            </div></a>
            </div>
          </div>

          
          <a href="mailto:officialplefoundation@gmail.com" className="hidden md:block"><div className="flex flex-row justify-center items-center gap-[4px] rounded-full px-[13px] py-[10px] bg-[#F7941D] hover:bg-[#c28438] cursor-pointer">
            <p className="text-[13px] font-[500]">Contact Us</p>
            <div className="h-[25px] w-[25px] rounded-full border-[1px] bg-[#FFD4A1] flex justify-center items-center">
              <HiMiniEnvelope />
            </div>
          </div></a>
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryOptions />} />
            <Route path="/contribute" element={<Donate />} />
            <Route path="/stories" element={<ImpactAreas />} />
            <Route path="/blog" element={<SuccessStories />} />
            <Route path="/aboutus" element={<About />} />
          </Routes>
        </div>

        <div className="hidden md:flex flex-row justify-between items-center bg-[#fffeff] rounded-full px-[20px] py-[20px] mt-[80px]">
          <div className=" w-[100px]">
            <img src={logo} />
          </div>
          <div className="hidden flex-row justify-center items-center gap-x-[4px] lg:gap-x-[15px]">
            <Link
              to="/"
              className="rounded-full px-[15px] py-[3px] text-nowrap text-[13px] font-[500]"
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className="rounded-full px-[15px] py-[3px] text-nowrap text-[13px] font-[500]"
            >
              Gallery
            </Link>
            <Link
              to="/contribute"
              className="rounded-full px-[15px] py-[3px] text-nowrap text-[13px] font-[500]"
            >
              Contribute
            </Link>
            <Link
              to="/stories"
              className="rounded-full px-[15px] py-[3px] text-nowrap text-[13px] font-[500]"
            >
              Stories
            </Link>
            <Link
              to="/blog"
              className="rounded-full px-[15px] py-[3px] text-nowrap text-[13px] font-[500]"
            >
              Blog
            </Link>
            <Link
              to="/aboutus"
              className="rounded-full px-[15px] py-[3px] text-nowrap text-[13px] font-[500]"
            >
              About Us
            </Link>
          </div>
          <div className="flex flex-row justify-center items-center space-x-[10px]">
            <a href="https://www.instagram.com/officialplef/"><div className="h-[30px] w-[30px] rounded-full bg-[#F7941D] hover:bg-[#c28438] flex justify-center items-center">
              <RiInstagramFill />
            </div></a>
            <a href="https://x.com/officialplef"><div className="h-[30px] w-[30px] rounded-full bg-[#F7941D] hover:bg-[#c28438] flex justify-center items-center">
              <FaTwitter />
            </div></a>
            <a href="https://www.linkedin.com/company/91017212/admin/dashboard/"><div className="h-[30px] w-[30px] rounded-full bg-[#F7941D] hover:bg-[#c28438] flex justify-center items-center">
              <FaLinkedin />
            </div></a>
          </div>
        </div>
        <p className="text-[13px] text-center text-[#8f8d8d] py-[30px]">
          © 2024 PLEFoundation. All rights reserved.
        </p>
      </div>
    </Router>
  );
}

export default App;
