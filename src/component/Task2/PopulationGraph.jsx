import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
              const data = await response.json();
              const processedData = data.data.map(entry => ({
                  nation: entry.Nation,
                  population: entry.Population,
              }));
              setPopulationData(processedData);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);

  const data = {
      labels: populationData.map(entry => entry.nation),
      datasets: [{
          label: 'Population',
          data: populationData.map(entry => entry.population),
          backgroundColor: 'rgba(22, 171, 86, 1)',
          borderColor: 'rgba(22, 171, 86, 1)',
          borderWidth: 1,
      }],
  };

  return (
      <div className='container'>
        <div className='heading'>
        <h1>US Population Data</h1>
        </div>
          
          <div className='lineChart'>
              <Line data={data} />
          </div>
      </div>
  );
};

export default PopulationGraph;