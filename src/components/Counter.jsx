import React, { useState, useEffect } from "react";
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai";

const Counter = () => {
  const [time, setTime] = useState(150); 
  const [play, setPlay] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (play && time > 0) {
        setTime((prevTime) => prevTime - 1);
      }
    },  1000);

    if (time === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [play, time]);

  return (
    <div className="md:flex hidden md:block">
      <div className="py-0 px-2 mt-[2px]">
        {play ? (
          <AiOutlinePauseCircle
            onClick={() => setPlay(false)}
            color="teal"
            size={24}
            cursor="pointer"
          />
        ) : (
          <AiOutlinePlayCircle
            onClick={() => setPlay(true)}
            color="teal"
            size={24}
            cursor="pointer"
          />
        )}
      </div>
      <h1 className="font-bold">Time: 00:{time >= 0 ? time : 0}</h1>
    </div>
  );
};

export default Counter;
