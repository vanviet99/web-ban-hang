import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './adminchart.css'
import axios from 'axios';
ChartJS.register(ArcElement, Tooltip, Legend);

 const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Quantyti',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
 function AdminChart() {
  // const [data, setData] = useState([1,2,3])
useEffect(()=>{
  axios.get("http://localhost:8000/v1/product/getall")
  .then(value => {
    console.log(value.data);
    // setData(value.data)
  })
  .catch(value => {
    console.log(value);
  })
},[])
  return (
    <div className="adminchart">
      <Pie data={data} />;
    </div>
  )
}

export default AdminChart