import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


const PieChart = () => {
  // Define your chart data
  const data = {
    labels: ['Green', 'gray', ],
    datasets: [
      {
        data: [700, 300, ],
        backgroundColor: ['#008000', '#EEEEEE'],
        hoverBackgroundColor: ['#008000', '#EEEEEE'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
