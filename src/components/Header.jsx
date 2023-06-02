import Image from "next/image";
import React from "react";
import Counter from "./Counter";


const Header = () => {
  return (
    <div className="flex py-4 fixed  px-4 w-full border justify-between overflow-hidden bg-white">
      <div className="flex">
        <Image
          width={80}
          height={35}
          src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Google_2011_logo.png"
          alt="google"
          className="object-contain"
        />

        <h2 className="ml-10 text-[15px] flex font-semibold ">
          UPSC Civil Services<span className="block md:hidden">....</span><span className="hidden md:block">Prelims CSAT Full Test 4</span>{" "}
        </h2>
      
      </div>

      <div>
        <Counter />
      </div>
    </div>
  );
};

export default Header;
