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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <div className='px-[20px] lg:px-[50px] font-monts'>
        <div className='flex flex-row justify-between items-center bg-white md:bg-gray-100 rounded-full px-[15px] py-[15px] mt-[10px] w-full'>
          <div className=" w-[100px]"><img src={ logo }/></div>

          <button onClick={toggleMenu} className='block md:hidden z-30'><HiOutlineMenu className="h-[25px] w-[25px]"/></button>

        <div className={`fixed top-0 right-0 h-full bg-[#e9e9e9] w-[75%] transform ${isOpen ? '-translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out overflow-hidden`}>
            <div className="flex flex-col items-start gap-y-[20px] px-[20px] py-[20px]">
              <Link to="/" className=" hover:bg-[#E9E9E9] rounded-full px-[15px] py-[3px] text-[16px] font-[500]" >Home</Link>
              <Link to="/getinvolved" className=" hover:bg-[#E9E9E9] rounded-full px-[15px] py-[3px] text-[16px] font-[500]" >Get Involved</Link>
              <Link to="/donate" className=" hover:bg-[#E9E9E9] rounded-full px-[15px] py-[3px] text-[16px] font-[500]" >Donate</Link>
              <Link to="/impactareas" className=" hover:bg-[#E9E9E9] rounded-full px-[15px] py-[3px] text-[16px] font-[500]" >Impact Areas</Link>
              <Link to="/successstories" className=" hover:bg-[#E9E9E9] rounded-full px-[15px] py-[3px] text-[16px] font-[500]" >Success Stories</Link>
              <Link to="/news" className=" hover:bg-[#E9E9E9] rounded-full px-[15px] py-[3px] text-[16px] font-[500]" >News</Link>
            </div>
            <div className='flex flex-row justify-center items-center gap-[4px] px-[13px] py-[10px] bg-[#F7941D] cursor-pointer'>
              <p className='text-[13px] font-[500]'>Contact Us</p>
              <div className='h-[25px] w-[25px] rounded-full border-[1px] bg-[#FFD4A1] flex justify-center items-center'><HiMiniEnvelope/></div>
            </div>
          </div>

          <div className="hidden md:flex flex-row justify-center items-center gap-x-[4px] lg:gap-x-[15px]">
            <Link to="/" className="hover:bg-[#E9E9E9] rounded-full px-[10px] lg:px-[15px] py-[3px] text-nowrap text-[13px] lg:text-[16px] font-[500]">Home</Link>
            <Link to="/getinvolved" className="hover:bg-[#E9E9E9] rounded-full px-[10px] lg:px-[15px] py-[3px] text-nowrap text-[13px] lg:text-[16px] font-[500]">Get Involved</Link>
            <Link to="/donate" className="hover:bg-[#E9E9E9] rounded-full px-[10px] lg:px-[15px] py-[3px] text-nowrap text-[13px] lg:text-[16px] font-[500]">Donate</Link>
            <Link to="/impactareas" className="hover:bg-[#E9E9E9] rounded-full px-[10px] lg:px-[15px] py-[3px] text-nowrap text-[13px] lg:text-[16px] font-[500]">Impact Areas</Link>
            <Link to="/successstories" className="hover:bg-[#E9E9E9] rounded-full px-[10px] lg:px-[15px] py-[3px] text-nowrap text-[13px] lg:text-[16px] font-[500]">Success Stories</Link>
            <Link to="/news" className="hover:bg-[#E9E9E9] rounded-full px-[10px] lg:px-[15px] py-[3px] text-nowrap text-[13px] lg:text-[16px] font-[500]">News</Link>
          </div>
          <div className='hidden md:flex flex-row justify-center items-center gap-[4px] rounded-full px-[13px] py-[10px] bg-[#F7941D] cursor-pointer'>
            <p className='text-[13px] font-[500]'>Contact Us</p>
            <div className='h-[25px] w-[25px] rounded-full border-[1px] bg-[#FFD4A1] flex justify-center items-center'><HiMiniEnvelope/></div>
          </div>
        </div>

        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/getinvolved' element={<GetInvolved />} />
            <Route path='/donate' element={<Donate />} />
            <Route path='/impactareas' element={<ImpactAreas />} />
            <Route path='/successstories' element={<SuccessStories />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </div>

        <div className='hidden md:flex flex-row justify-between items-center bg-gray-100 rounded-full px-[20px] py-[20px] mt-[80px]'>
        <div className=" w-[100px]"><img src={ logo }/></div>
          <div className="flex flex-row justify-center items-center gap-x-[4px] lg:gap-x-[15px]">
            <Link to="/" className="rounded-full px-[15px] py-[3px] text-nowrap text-[13px] font-[500]" onClick={()=> setTab(0)}>Home</Link>
            <Link to="/getinvolved" className="rounded-full px-[15px] py-[3px] text-nowrap text-[13px] font-[500]" onClick={()=> setTab(1)}>Get involved</Link>
            <Link to="/donate" className="rounded-full px-[15px] py-[3px] text-nowrap text-[13px] font-[500]" onClick={()=> setTab(2)}>Donate</Link>
            <Link to="/impactareas" className="rounded-full px-[15px] py-[3px] text-nowrap text-[13px] font-[500]" onClick={()=> setTab(3)}>Impact Areas</Link>
            <Link to="/successstories" className="rounded-full px-[15px] py-[3px] text-nowrap text-[13px] font-[500]" onClick={()=> setTab(4)}>Success Stories</Link>
            <Link to="/news" className="rounded-full px-[15px] py-[3px] text-nowrap text-[13px] font-[500]" onClick={()=> setTab(5)}>News</Link>
          </div>
          <div className='flex flex-row justify-center items-center space-x-[10px]'>
            <div className="h-[30px] w-[30px] rounded-full bg-[#F7941D] flex justify-center items-center"><IoLogoFacebook/></div>
            <div className="h-[30px] w-[30px] rounded-full bg-[#F7941D] flex justify-center items-center"><FaTwitter/></div>
            <div className="h-[30px] w-[30px] rounded-full bg-[#F7941D] flex justify-center items-center"><FaLinkedin/></div>
          </div>
          

        </div>
        <p className='text-[13px] text-center text-[#8f8d8d] py-[30px]'>© 2023 ForHelp. All rights reserved.</p>
      </div>
    </Router>
  )
}

export default App
