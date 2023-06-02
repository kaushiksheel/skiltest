import React from "react";
import { RxCrossCircled } from "react-icons/Rx";
import { SiSimpleanalytics } from "react-icons/si";
import { RiCheckDoubleLine, RiTimerLine } from "react-icons/Ri";
import { GiChart } from "react-icons/gi";
import { BsListStars, BsPercent } from "react-icons/Bs";
import { FaRegTimesCircle } from "react-icons/Fa";
import { FiFlag } from "react-icons/Fi";
import { AiTwotoneStar } from "react-icons/ai";
import PieChart from "./piechart/PieChart";
import WrongAnsPie from "./piechart/wrongAnsPie";
import LeftAnsPie from "./piechart/LeftPie";
import AccuracyChart from "./piechart/AccuChart";
import { header } from "@/data/header";
import { Container } from "./Container";



const Result = () => {
  return (
   <Container>
      <div className="w-full   mt-20  ">
        <h1 className="font-semibold text-start text-[19px] ">
          Overall Performance Analysis
        </h1>











        <div className="grid md:grid-cols-5 lg:grid-cols-8 grid-cols-4 mt-5 border ">
          <div className="border-l-2  text-left px-2  full h-16">
            <p className="font-semibold md:text-center text-left text-green-600 text-sm md:text-lg ">0/30</p>

            <div className="flex md:justify-center gap-1 py-2">
              <div className="flex items-center ">
                {" "}
                <RiCheckDoubleLine size={18} />
              </div>
              <p className="font-semibold md:text-center text-lefttext-gray-600 text-xs md:text-lg lg:text-[14px]">Right</p>{" "}
            </div>
          </div>

          <div className="border-l-2 text-left px-2  full h-16">
            <p className="font-semibold md:text-center text-left text-red-600 text-sm md:text-lg  ">0/30</p>

            <div className="flex md:justify-center gap-1 py-2 items-center">
              <RxCrossCircled size={15} />
              <p className="font-semibold md:text-center text-lefttext-gray-600  text-xs md:text-lg lg:text-[14px]">
                Wrong
              </p>{" "}
            </div>
          </div>

          <div className="border-l-2  text-left px-2  full h-16">
            <p className="font-semibold md:text-center text-left  text-sm md:text-lg  ">0/30</p>

            <div className="flex md:justify-center gap-1 items-center">
              <SiSimpleanalytics size={12} />
              <p className="font-semibold md:text-center text-lefttext-gray-600 py-2 text-xs md:text-lg lg:text-[14px]">
                Score
              </p>{" "}
            </div>
          </div>

          <div className="border-l-2  text-left px-2 full h-16">
            <p className="font-semibold md:text-center text-left  text-sm md:text-lg  ">00:00:05</p>

            <div className="flex md:justify-center gap-1 items-center">
              <RiTimerLine size={18} />
              <p className="font-semibold md:text-center text-lefttext-gray-600 py-2 text-xs md:text-lg lg:text-[14px]">
                Time
              </p>{" "}
            </div>
          </div>

          <div className="border-l-2  text-left px-2  full h-16">
            <p className="font-semibold md:text-center text-left  text-sm md:text-lg  ">0%</p>

            <div className="flex md:justify-center gap-2 items-center">
              <GiChart size={14} />
              <p className="font-semibold md:text-center text-lefttext-gray-600 py-2 text-xs md:text-lg lg:text-[14px]">
                Accuracy
              </p>{" "}
            </div>
          </div>

          <div className="border-l-2  text-left px-2  full h-16">
            <p className="font-semibold md:text-center text-left  text-sm md:text-lg  ">10%</p>

            <div className="flex md:justify-center gap-1 items-center">
              <BsPercent />
              <p className="font-semibold md:text-center text-lefttext-gray-600 py-2 text-xs md:text-lg lg:text-[14px]">
                Percentile
              </p>{" "}
            </div>
          </div>

          <div className="border-l-2  text-left px-2  full h-16">
            <p className="font-semibold md:text-center text-left text-green-600  text-sm md:text-lg  ">0/30</p>

            <div className="flex md:justify-center gap-1 py-2">
              <div className="flex items-center ">
                {" "}
                <RiCheckDoubleLine size={18} />
              </div>
              <p className="font-semibold md:text-center text-lefttext-gray-600 text-xs md:text-lg lg:text-[14px]">
                Attempted
              </p>{" "}
            </div>
          </div>

          <div className="border-l-2  text-left px-2  full h-16">
            <p className="font-semibold md:text-center text-left  text-sm md:text-lg  ">45/9252</p>

            <div className="flex md:justify-center gap-1 items-center">
              <BsListStars size={18} />
              <p className="font-semibold text-gray-600 py-2 text-xs md:text-lg lg:text-[14px]">
                Rank
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* Blow */}
   
  
      <div
        className="grid grid-cols-4 lg:grid-cols-7  border 
 mt-7 flex-wrap  px-3 place-items-center "
      >
     
          <p className="py-2 px-2 whitespace-nowrap">Section Name</p>
   

{header.map(({icon,id,title})=>
<p key={id} className="font-semibold text-gray-600  text-[14px] text-center py-3  w-full grid place-items-center">
  <span>{icon}</span>
  {title}
</p>
)}
      </div>

      {/* Quiz */}
      <div
        className="grid grid-cols-4 lg:grid-cols-7
 border  w-full  mt-2 px-3 "
      >
        <div className="  font-semibold ">
          <p className="py-2 px-3">Quiz</p>
        </div>

        <div className="   px-4  py-3  w-full grid place-items-center">
          <p className="text-green-600">0/30</p>
        </div>

        <div className="   px-4 py-3  w-full grid place-items-center">
          <p className="text-red-600">0/30</p>
        </div>

        <div className="   px-4 py-3  w-full grid place-items-center">
          <p>0/30</p>
        </div>

        <div className="   px-4 py-3  w-full grid place-items-center">
          <p className="whitespace-nowrap">00m 05s</p>
        </div>

        <div className="   px-6 py-3  w-full grid place-items-center">
          <p>0%</p>
        </div>

        <div className="   px-6 py-3  w-full grid place-items-center">
          <p>45</p>
        </div>
      </div>

      {/* Total */}

      <div
        className="grid grid-cols-4 lg:grid-cols-7
        border  w-full  mt-2 px-3 "
      >
        <div className="  font-semibold ">
          <p className="py-2 px-3">Total</p>
        </div>

        <div className="   px-4 py-3  w-full grid place-items-center">
          <p className="text-green-600">0/30</p>
        </div>

        <div className=" px-4 py-3  w-full grid place-items-center">
          <p className="text-red-600">0/30</p>
        </div>

        <div className=" px-4 py-3  w-full grid place-items-center">
          <p>0/30</p>
        </div>

        <div className=" px-4 py-3  w-full grid place-items-center">
          <p className="whitespace-nowrap">00m 05s</p>
        </div>

        <div className="  py-3 px-4 grid place-items-center">
          <p>0%</p>
        </div>

        <div className=" px-4 py-3  w-full grid place-items-center">
          <p>45</p>
        </div>







      </div>





      <div className="mt-4 grid grid-cols-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="w-full py-2 px-2 mx-auto  border rounded-md">
          <div className="flex gap-2 justify-center ">
            <div className="flex items-center  text-[green]">
              {" "}
              <RiCheckDoubleLine size={18} />
            </div>
            <p className=" font-semibold ">Correct </p>
          </div>
          <div className="h-32 w-32 mx-auto mt-1 ">
            <PieChart />
          </div>

          <div className="flex gap-2 text-[15px] justify-center font-semibold">
            <p>83.00% </p>
            <p>
              <span className="text-[green]">164</span>/200
            </p>
          </div>
        </div>

        <div className="w-full py-2 px-2 mx-auto  border rounded-md ">
          <div className="flex gap-2 justify-center">
            <div className="flex items-center  text-[red]">
              {" "}
              <FaRegTimesCircle size={18} />
            </div>
            <p className=" font-semibold ">Incorrect </p>
          </div>
          <div className="h-32 w-32 mx-auto mt-1  ">
            <WrongAnsPie />
          </div>

          <div className="flex gap-2 text-[15px] justify-center font-semibold">
            <p>53.00% </p>
            <p>
              <span className="text-[red]">12</span>/200
            </p>
          </div>
        </div>

        <div className="w-full py-2 px-2 mx-auto  border rounded-md">
          <div className="flex gap-2 justify-center">
            <div className="flex items-center  text-[#ff9900]">
              {" "}
              <FiFlag size={18} />
            </div>
            <p className=" font-semibold ">Left</p>
          </div>
          <div className="h-32 w-32 mx-auto mt-1 ">
            <LeftAnsPie />
          </div>

          <div className="flex gap-2 text-[15px] justify-center font-semibold">
            <p>63.00% </p>
            <p>
              <span className="text-[#ff9900]">46</span>/200
            </p>
          </div>
        </div>

        <div className="w-full py-2 px-2 mx-auto  border rounded-md">
          <div className="flex gap-2 justify-center">
            <div className="flex items-center  text-[#0077ff]">
              {" "}
              <AiTwotoneStar size={18} />
            </div>
            <p className=" font-semibold ">Accuracy </p>
          </div>
          <div className="h-32 w-32 mx-auto mt-1 ">
            <AccuracyChart />
          </div>

          <div className="flex gap-2 text-[15px] justify-center font-semibold">
            <p>23.00% </p>
            <p>
              <span className="text-[#0077ff]">75</span>/200
            </p>
          </div>
        </div>
      </div>


   
   </Container>
  );
};

export default Result;