import React, { useContext, useState } from 'react'
import QSidebar from './QSidebar'
import { MyContext } from '@/context/AppContext';


const QInstruction = () => {
  const { instructionPage, setinstructionPage} = useContext(MyContext);


  const handlePageChange=()=>{
    setinstructionPage(true)
  
    console.log("Ramm" , instructionPage )
  }
  

 
  return (
<>

<div  className="w-full grid h-28 grid-cols-1 md:grid-cols-4 gap-x-3 mt-[55px] ">
<div className=" col-span-3 p-2">

    <p className='py-0 px-2 font-semibold  text-[#565151] text-[15px]'>1. Test will auto submit when the Time is up.</p>
    <p className='py-0 px-2 font-semibold  text-[#565151] text-[15px]'>2. The Test comprises of multiple choice questions (MCQ) with one or more correct answers.</p>
    <p className='py-0 px-2 font-semibold  text-[#565151] text-[15px]'>3. The clock in the top right corner will display the remaining time available for you to complete the examination.</p>
    <h1 className='py-1 px-2 font-semibold  text-[#080707] text-[25px]'> Navigating & Answering a Question</h1>

    <p className='py-0 px-2 font-semibold  text-[#565151] text-[15px]'>1. Test will auto submit when the Time is up.</p>
    <p className='py-0 px-2 font-semibold  text-[#565151] text-[15px]'>2. The Test comprises of multiple choice questions (MCQ) with one or more correct answers.</p>
    <p className='py-0 px-2 font-semibold  text-[#565151] text-[15px]'>3. The clock in the top right corner will display the remaining time available for you to complete the examination.</p>


    <div className='border w-full mt-96 py-2 sticky bottom-0 bg-white h-fit'> <button onClick={handlePageChange} className="px-2  mb-0 py-2 w-[110px] h-9  grid place-content-center mx-auto  content-center  border rounded  text-black border-black bg-white hover:bg-black hover:text-white">Back to Test</button></div>
  
</div>
<div className="w-full  sticky top-10 hidden md:block h-fit">
          <QSidebar />
        </div>
</div>

</>
  )
}

export default QInstruction