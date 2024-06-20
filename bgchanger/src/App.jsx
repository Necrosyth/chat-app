import React, { useState } from 'react'
const App = () => {
  const [color,setColor]=useState("olive");

  return (
    <>
      <div className='h-screen w-full' style={{backgroundColor:color}}>

     

<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-full px-3 py-2'>

      <button style={{backgroundColor:"pink"}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>setColor("pink")}>Pink</button>
      <button style={{backgroundColor:"green" ,color:"white"}} className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("green")}>Green</button>
      <button style={{backgroundColor:"red" ,color:"white"}} className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("red")}>Red</button>
      <button style={{backgroundColor:"orange " ,color:"white"}} className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("orange")}>Orange</button>
      <button style={{backgroundColor:"blue" ,color:"white"}} className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("blue")}>Blue</button>

    </div>
</div>
      </div>

    </>
  )
}

export default App
