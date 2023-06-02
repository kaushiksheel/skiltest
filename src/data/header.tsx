import React from "react";
import { BsListStars, BsPercent } from "react-icons/Bs";
import { RiCheckDoubleLine, RiTimerLine } from "react-icons/Ri";
import { RxCrossCircled } from "react-icons/Rx";
import { GiChart } from "react-icons/gi";
import { SiSimpleanalytics } from "react-icons/si";

export const header = [
  {
    id: 1,
    title: "Right",
    icon: <RiCheckDoubleLine size={18} />,
  },
  {
    id: 2,
    title: "Wrong",
    icon: <RxCrossCircled size={15} />,
  },
  {
    id: 3,
    title: "Score",
    icon: <SiSimpleanalytics size={12} />,
  },
  {
    id: 4,
    title: "Time",
    icon: <RiTimerLine size={18} />,
  },
  {
    id: 5,
    title: "Accuracy",
    icon: <GiChart size={14} />,
  },
  {
    id: 8,
    title: "Rank",
    icon: <BsListStars size={18} />,
  },
];