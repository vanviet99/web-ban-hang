import React, { useState ,useEffect} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './adminchart.css'
import axios from 'axios';
ChartJS.register(ArcElement, Tooltip, Legend);


 function AdminChart() {
  const [dataproduct,setDataproduct] = useState([])
useEffect(() => {
  axios.get('http://localhost:8000/v1/product/getall')
  .then((dataa)=>{
    setDataproduct(dataa.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}, [])
console.log(9,dataproduct)
  const data = {
    labels: dataproduct.map((value)=>value.name), 
    datasets: [
      {
        label: 'Quantyti',
        data:dataproduct.map((value)=>value.price) ,
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
  console.log(23,data.labels)
  return  <div className="adminchart">
  <Pie data={data} />;
</div>
}

export default AdminChart