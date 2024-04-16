/* eslint-disable react/jsx-key */
import '../styles/App.css';
import { useState, useEffect } from 'react';
import Metal from './Metallurgy/Metal';

function App() {
  // getJSONData(metalJSON, collectMetals, onError);
  const [myMetals, setMetals] = useState([]);
  const [myInfo, setInfo] = useState(0);


  useEffect(() => {
    const getMetals = async () => {
      try {
        const response = await fetch('./src/assets/metals.json'); // Update the path to your local JSON file
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        let myData = data.metals;
        myData.shift();
        setMetals(myData); // Assuming your JSON file has a structure like { "metals": [...] }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    getMetals();
  }, []);

  function changeMetals(desiredMetal) {
    setInfo(desiredMetal);
  }

  return (
    <>
      <div>
        <ol id="list">
          {myMetals && myMetals.map(myMetal => (
            <li key={myMetal.metalId}>
              <button className="index-button" onClick={() => changeMetals(myMetal.metalId)}>
                <span id="bold">{myMetal.name}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div id="info">
        {myMetals[myInfo] && <Metal metal={myMetals[myInfo]} />}
      </div>
    </>
  )
}

export default App
