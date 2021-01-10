import React from 'react';
import { Bar } from 'react-chartjs-2';
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};
function MapChart({ provinceData }) {
  const datasetValues = {
    labels: provinceData.map((element) => element.name),
    datasets: [
      {
        label: 'Doses distributed',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#00a5e0',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#00a5e0',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: provinceData.map((element) => element.total_vaccines_distributed),
      },
      {
        label: 'Doses administered',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#89a1ef',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: provinceData.map((element) => element.total_vaccinations),
      },
    ],
  };
  return (
    <div>
      <h2>Bar Example (custom size)</h2>
      <Bar
        data={datasetValues}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
export default MapChart;
