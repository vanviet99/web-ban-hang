import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Quantity Order',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];


export const data = {
  labels,
  datasets: [
    {
      label: 'Quantity',
      data: [100,200,300,400,500,600],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export function Orderadmintable() {
  return <Bar options={options} data={data} />;
}
