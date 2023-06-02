
import Image from 'next/image'
import React from 'react'
const Sidebar = () => {
  return (
    <div className=' fixed border-l-2  h-[655px]  left-auto top-0  mt-[60px]  '>

      <div className='flex justify-center mt-10 mx-20'> 
        <Image width={220} height={220} alt="user-profile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png"/>
      </div>
    <h2 className='text-center from-neutral-800 text-[25px] font-semibold'>Shivam Dubey</h2>
    </div>
  )
}

export default Sidebar
