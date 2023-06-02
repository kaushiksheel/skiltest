import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


const LeftAnsPie = () => {
  // Define your chart data
  const data = {
    labels: ['gray', 'yellow', ],
    datasets: [
      {
        data: [700, 300, ],
        backgroundColor: ['#EEEEEE', '#f9bd09'],
        hoverBackgroundColor: ['#EEEEEE', '#f9bd09'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default LeftAnsPie;
