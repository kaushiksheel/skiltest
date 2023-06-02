import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


const WrongAnsPie = () => {
  // Define your chart data
  const data = {
    labels: ['gray', 'red'],
    datasets: [
      {
        data: [910, 90],
        backgroundColor: ['#EEEEEE', '#FF0000'],
        hoverBackgroundColor: ['#EEEEEE', '#FF0000'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default WrongAnsPie;
