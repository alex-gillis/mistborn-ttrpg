/* eslint-disable react/jsx-key */
import '../styles/App.css';
import { useState, useEffect } from 'react';
import Metal from './Metallurgy/Metal';
import Basics from './Metallurgy/Basics';

function App() {
  // getJSONData(metalJSON, collectMetals, onError);
  const [myMetals, setMetals] = useState([]);
  const [myBasics, setBasics] = useState([]);
  const [myInfo, setInfo] = useState(0);
  const [myBasic, setBasic] = useState(0);
  const [myView, setView] = useState(true);


  useEffect(() => {
    const getMetals = async () => {
      try {
        const response = await fetch('./src/assets/information.json'); 
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setMetals(data.metals); 
        setBasics (data.basics);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    getMetals();
  }, []);

  function changeBasics(desiredBasic) {
    setBasic(desiredBasic);
    setView(true);
  }
  
  function changeMetals(desiredMetal) {
    setInfo(desiredMetal);
    setView(false);
  }

  return (
    <>
      <div>
        <ol id="list">
          <li id="nav-list">
            <button className="index-button" onClick={() => changeBasics(0)}>
              <span id="bold">Basics</span>
            </button>
          </li>
          {myMetals && myMetals.map(myMetal => (
            <li  id="nav-list" key={myMetal.id}>
              <button className="index-button" onClick={() => changeMetals(myMetal.id)}>
                <span id="bold">{myMetal.name}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div id="info">
        {myView === true && myBasics[myBasic] && <Basics info={myBasics}/>}
        {myView === false && myMetals[myInfo] && <Metal metal={myMetals[myInfo]} />}
      </div>
    </>
  )
}

export default App
