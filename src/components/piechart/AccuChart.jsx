import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


const AccuracyChart = () => {
  // Define your chart data
  const data = {
    labels: ['gray', 'bule', ],
    datasets: [
      {
        data: [700, 300, ],
        backgroundColor: ['#EEEEEE', '#189ef7'],
        hoverBackgroundColor: ['#EEEEEE', '#189ef7'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default AccuracyChart;
