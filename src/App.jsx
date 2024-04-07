import { useState } from 'react'

function App() {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <div>
        <div className="flex flex-row justify-around items-center">
          <div className="h-[30px] w-[30px] rounded-full bg-green-500"></div>
          <button className={`${tab === 0 ? " bg-gray-300" : ""} border-[1px] px-[3px] py-[1px] font-roboto text-[16px]`} onClick={()=> setTab(0)}>Home</button>
        

        </div>
      </div>

    </div>
  )
}

export default App
