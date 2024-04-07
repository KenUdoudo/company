import { useState } from 'react'
import Home from './pages/home';
import GetInvolved from './pages/getinvolved';
import Donate from './pages/donate';
import ImpactAreas from './pages/impact';
import SuccessStories from './pages/success';
function App() {
  const [tab, setTab] = useState(0);
  return (
    <div className='px-[50px]'>
      <div className='flex flex-row justify-between items-center bg-gray-100 rounded-full px-[10px] py-[20px] mt-[10px]'>
        <div className="flex flex-row justify-center items-center gap-x-[15px]">
          <div className="h-[30px] w-[30px] rounded-full bg-[#CEFA05]"></div>
          <button className={`${tab === 0 ? " bg-gray-200" : ""} border-[1px] rounded-full px-[15px] py-[3px] font-roboto text-[16px] font-[500]`} onClick={()=> setTab(0)}>Home</button>
          <button className={`${tab === 1 ? " bg-gray-200" : ""} border-[1px] rounded-full px-[15px] py-[3px] font-roboto text-[16px] font-[500]`} onClick={()=> setTab(1)}>Get involved</button>
          <button className={`${tab === 2 ? " bg-gray-200" : ""} border-[1px] rounded-full px-[15px] py-[3px] font-roboto text-[16px] font-[500]`} onClick={()=> setTab(2)}>Donate</button>
          <button className={`${tab === 3 ? " bg-gray-200" : ""} border-[1px] rounded-full px-[15px] py-[3px] font-roboto text-[16px] font-[500]`} onClick={()=> setTab(3)}>Impact Areas</button>
          <button className={`${tab === 4 ? " bg-gray-200" : ""} border-[1px] rounded-full px-[15px] py-[3px] font-roboto text-[16px] font-[500]`} onClick={()=> setTab(4)}>Success Stories</button>
          <button className={`${tab === 5 ? " bg-gray-200" : ""} border-[1px] rounded-full px-[15px] py-[3px] font-roboto text-[16px] font-[500]`} onClick={()=> setTab(5)}>News</button>
        </div>
        <div className='flex flex-row justify-center items-center gap-[4px] rounded-full px-[10px] py-[10px] bg-#CEFA05 cursor-pointer'>
          <p className='text-[13px] font-roboto font-[500]'>Contact Us</p>
          <div className='h-[25px] w-[25px] rounded-full border-[1px] bg-green-100'></div>
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

    </div>
  )
}

export default App
