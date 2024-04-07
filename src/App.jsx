import { useState } from 'react'

function App() {
  const [tab, setTab] = useState(0);
  return (
    <div className='px-[50px]'>
      <div className='flex flex-row justify-between items-center bg-gray-100 rounded-full px-[10px] py-[20px]'>
        <div className="flex flex-row justify-center items-center gap-x-[15px]">
          <div className="h-[30px] w-[30px] rounded-full bg-green-500"></div>
          <button className={`${tab === 0 ? " bg-gray-200" : ""} border-[1px] rounded-full px-[15px] py-[3px] font-roboto text-[16px] font-[500]`} onClick={()=> setTab(0)}>Home</button>
          <button className={`${tab === 0 ? " bg-gray-200" : ""} border-[1px] rounded-full px-[15px] py-[3px] font-roboto text-[16px] font-[500]`} onClick={()=> setTab(0)}>Get involved</button>
          <button className={`${tab === 0 ? " bg-gray-200" : ""} border-[1px] rounded-full px-[15px] py-[3px] font-roboto text-[16px] font-[500]`} onClick={()=> setTab(0)}>Donate</button>
          <button className={`${tab === 0 ? " bg-gray-200" : ""} border-[1px] rounded-full px-[15px] py-[3px] font-roboto text-[16px] font-[500]`} onClick={()=> setTab(0)}>Impact Areas</button>
          <button className={`${tab === 0 ? " bg-gray-200" : ""} border-[1px] rounded-full px-[15px] py-[3px] font-roboto text-[16px] font-[500]`} onClick={()=> setTab(0)}>Success Stories</button>
          <button className={`${tab === 0 ? " bg-gray-200" : ""} border-[1px] rounded-full px-[15px] py-[3px] font-roboto text-[16px] font-[500]`} onClick={()=> setTab(0)}>News</button>
        </div>
        <div className='flex flex-row justify-center items-center gap-[4px] rounded-full px-[10px] py-[3px] bg-green-500 cursor-pointer'>
          <p className='text-[13px] font-roboto font-[500]'>Contact Us</p>
          <div className='h-[25px] w-[25px] rounded-full border-[1px] bg-green-200'></div>
        </div>
      </div>

    </div>
  )
}

export default App
