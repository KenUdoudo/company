import { useState } from 'react'
import Home from './pages/home';
import GetInvolved from './pages/getinvolved';
import Donate from './pages/donate';
import ImpactAreas from './pages/impact';
import SuccessStories from './pages/success';
import News from './pages/News';
import { HiMiniEnvelope } from "react-icons/hi2";
import { IoLogoFacebook } from 'react-icons/io'; 
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from 'react-icons/fa'; 
import logo from './assets/newlogo.svg';
import { HiOutlineMenu } from "react-icons/hi";
function App() {
  const [tab, setTab] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='px-[50px] font-monts'>
      <div className='flex flex-row justify-between items-center bg-gray-100 rounded-full px-[15px] py-[15px] mt-[10px] w-full'>
        <div className=" w-[100px]"><img src={ logo }/></div>

        <button onClick={toggleMenu} className='block md:hidden z-30'><HiOutlineMenu className="h-[25px] w-[25px]"/></button>

        <div className={`fixed top-0 right-0 h-full bg-[#e9e9e9] w-[75%] transform ${isOpen ? '-translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out overflow-hidden`}>
          <div className="flex flex-col items-start gap-y-[20px] px-[20px] py-[20px]">
            <button className={`${tab === 0 ? " bg-[#E9E9E9]" : ""} rounded-full px-[15px] py-[3px] text-[16px] font-[500]`} onClick={()=> setTab(0)}>Home</button>
            <button className={`${tab === 1 ? " bg-[#E9E9E9]" : ""} rounded-full px-[15px] py-[3px] text-[16px] font-[500]`} onClick={()=> setTab(1)}>Get involved</button>
            <button className={`${tab === 2 ? " bg-[#E9E9E9]" : ""} rounded-full px-[15px] py-[3px] text-[16px] font-[500]`} onClick={()=> setTab(2)}>Donate</button>
            <button className={`${tab === 3 ? " bg-[#E9E9E9]" : ""} rounded-full px-[15px] py-[3px] text-[16px] font-[500]`} onClick={()=> setTab(3)}>Impact Areas</button>
            <button className={`${tab === 4 ? " bg-[#E9E9E9]" : ""} rounded-full px-[15px] py-[3px] text-[16px] font-[500]`} onClick={()=> setTab(4)}>Success Stories</button>
            <button className={`${tab === 5 ? " bg-[#E9E9E9]" : ""} rounded-full px-[15px] py-[3px] text-[16px] font-[500]`} onClick={()=> setTab(5)}>News</button>
          </div>
          <div className='flex flex-row justify-center items-center gap-[4px] rounded-full px-[13px] py-[10px] bg-[#F7941D] cursor-pointer'>
            <p className='text-[13px] font-[500]'>Contact Us</p>
            <div className='h-[25px] w-[25px] rounded-full border-[1px] bg-[#FFD4A1] flex justify-center items-center'><HiMiniEnvelope/></div>
          </div>
        </div>

        <div className="hidden md:flex flex-row justify-center items-center gap-x-[15px]">
          <button className={`${tab === 0 ? " bg-[#E9E9E9]" : ""} rounded-full px-[15px] py-[3px] text-[16px] font-[500]`} onClick={()=> setTab(0)}>Home</button>
          <button className={`${tab === 1 ? " bg-[#E9E9E9]" : ""} rounded-full px-[15px] py-[3px] text-[16px] font-[500]`} onClick={()=> setTab(1)}>Get involved</button>
          <button className={`${tab === 2 ? " bg-[#E9E9E9]" : ""} rounded-full px-[15px] py-[3px] text-[16px] font-[500]`} onClick={()=> setTab(2)}>Donate</button>
          <button className={`${tab === 3 ? " bg-[#E9E9E9]" : ""} rounded-full px-[15px] py-[3px] text-[16px] font-[500]`} onClick={()=> setTab(3)}>Impact Areas</button>
          <button className={`${tab === 4 ? " bg-[#E9E9E9]" : ""} rounded-full px-[15px] py-[3px] text-[16px] font-[500]`} onClick={()=> setTab(4)}>Success Stories</button>
          <button className={`${tab === 5 ? " bg-[#E9E9E9]" : ""} rounded-full px-[15px] py-[3px] text-[16px] font-[500]`} onClick={()=> setTab(5)}>News</button>
        </div>
        <div className='hidden md:flex flex-row justify-center items-center gap-[4px] rounded-full px-[13px] py-[10px] bg-[#F7941D] cursor-pointer'>
          <p className='text-[13px] font-[500]'>Contact Us</p>
          <div className='h-[25px] w-[25px] rounded-full border-[1px] bg-[#FFD4A1] flex justify-center items-center'><HiMiniEnvelope/></div>
        </div>
      </div>

      <div>
        {tab === 0 && (
            <Home/>
        )}
        {tab === 1 && (
            <GetInvolved/>
        )}
        {tab === 2 && (
            <Donate/>
        )}
        {tab === 3 && (
            <ImpactAreas/>
        )}
        {tab === 4 && (
            <SuccessStories/>
        )}
        {tab === 5 && (
            <News/>
        )}
      </div>

      <div className='flex flex-row justify-between items-center bg-gray-100 rounded-full px-[20px] py-[20px] mt-[80px]'>
      <div className=" w-[100px]"><img src={ logo }/></div>
        <div className="flex flex-row justify-center items-center gap-x-[15px]">
          <button className="rounded-full px-[15px] py-[3px] text-[13px] font-[500]" onClick={()=> setTab(0)}>Home</button>
          <button className="rounded-full px-[15px] py-[3px] text-[13px] font-[500]" onClick={()=> setTab(1)}>Get involved</button>
          <button className="rounded-full px-[15px] py-[3px] text-[13px] font-[500]" onClick={()=> setTab(2)}>Donate</button>
          <button className="rounded-full px-[15px] py-[3px] text-[13px] font-[500]" onClick={()=> setTab(3)}>Impact Areas</button>
          <button className="rounded-full px-[15px] py-[3px] text-[13px] font-[500]" onClick={()=> setTab(4)}>Success Stories</button>
          <button className="rounded-full px-[15px] py-[3px] text-[13px] font-[500]" onClick={()=> setTab(5)}>News</button>
        </div>
        <div className='flex flex-row justify-center items-center space-x-[10px]'>
          <div className="h-[30px] w-[30px] rounded-full bg-[#F7941D] flex justify-center items-center"><IoLogoFacebook/></div>
          <div className="h-[30px] w-[30px] rounded-full bg-[#F7941D] flex justify-center items-center"><FaTwitter/></div>
          <div className="h-[30px] w-[30px] rounded-full bg-[#F7941D] flex justify-center items-center"><FaLinkedin/></div>
        </div>
        

      </div>
      <p className='text-[13px] text-center text-[#8f8d8d] py-[30px]'>© 2023 ForHelp. All rights reserved.</p>
    </div>
  )
}

export default App
