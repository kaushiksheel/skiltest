import React from 'react'
import QSidebar from '../components/QSidebar'
import questions from "../data/questions";

const  QSections = () => {

  return (
<>
<div  className="w-full grid h-28 grid-cols-1 md:grid-cols-4 gap-x-3 py-6 px-4 ">
<div className=" col-span-3 p-2   ">

<div className=' mt-[29px] flex gap-5  px-2 py-2 items-center fixed bg-white w-full h-auto'> <h2 className='font-bold'>Sections :</h2> <button className='py-2 px-3  rounded-full border-blue-600 text-blue-600'>Quiz</button> </div>

 <div>
  <h2 className='mt-[85px] px-2 py-2 font-semibold text-[18px] '>Question Paper</h2>
  {questions.map((el)=>{
    return <div key={el.id} className=' mt-[-7px] py-2 px-2 mb-5'> 
      <h2  className='font-semibold'>{el.question}</h2>
<hr className='mt-5'/>
      <div className='grid grid-cols-5 gap-2'>{el.options.map((el)=>{
        return <div key={el}> <p>{el}</p></div> 
      })}</div>
    </div>
  })}



<div className='border w-full  py-2 sticky bottom-0 bg-white h-fit'> 
<button  
 className="px-2  mb-0 py-2 w-[110px] h-9  grid place-content-center mx-auto  content-center  border rounded  text-black border-black bg-white">Back to Test</button></div>




 </div> 
</div>

<div className="w-full sticky  hidden md:block h-fit">
          <QSidebar />
        </div>
</div>

</>
  )
}

export default QSections