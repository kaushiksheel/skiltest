import React, { useContext } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { Dot } from "./Dot";
import Link from "next/link";

export const Accordian = ({ children }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <div className="flex items-center  justify-between border-b-2  mt-3 ">
        <p className="mb-1 ml-2 font-normal">Testing</p>

        <div className="mr-30 " >
          {isActive ? (
            <IoIosArrowUp
              cursor="pointer"
              size={20}
              onClick={() => setIsActive((prev) => !isActive)}
            />
          ) : (
            <IoIosArrowDown
              cursor="pointer"
              size={20}
              onClick={() => setIsActive((prev) => !isActive)}
            />
          )}
        </div>
      </div>
      <div className="flex items-center space-x-6  px-3 py-1 ">
        <div className="flex space-x-2 items-center">
          <Dot color={"green"} />
          <span>3</span>
        </div>
        <div className="flex space-x-2 items-center">
          <Dot color={"black"} />
          <span>33</span>
        </div>
        <div className="flex space-x-2 items-center">
          <Dot color={"gray"} />
          <span>47</span>
        </div>
        <div className="flex space-x-2 items-center">
          <Dot color={"orange"} />
          <span>13</span>
        </div>
      </div>
      {isActive && <div className="">{children}</div>}
 

 <div className="  px-4 py-2 mt-[260px]  h-24  fixed  overflow-hidden mx-auto" >
  <div className="flex gap-5 h-10 w-full   ">

  <button  className="px-1  py-2 w-32 h-9  grid place-content-center hover:bg-black hover:text-white  border rounded border-black text-black bg-white">Instructions</button>

 
  <Link href="/QSections">
  <button className="px-2 py-2 w-32 h-9  grid place-content-center hover:bg-black hover:text-white border rounded border-black text-black bg-white">All Questions</button>
  </Link>
    
  </div>
  <button className="px-2    py-2 w-full h-9  grid  mt-2  border rounded  text-black hover:bg-amber-300 bg-amber-400">Submit</button>
 </div>
    </div>
  );
};
