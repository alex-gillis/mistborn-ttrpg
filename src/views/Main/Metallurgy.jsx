/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Metal from '../Metallurgy/Metal';
import Basics from '../Metallurgy/Basics';

function Metallurgy(props) {
  // getJSONData(metalJSON, collectMetals, onError);
  const [myMetals] = useState(props.metals);
  const [myBasics] = useState(props.basics);
  const [myInfo, setInfo] = useState(0);
  const [myBasic, setBasic] = useState(0);
  const [myView, setView] = useState(true);

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
        <ol id="list" className='marginTop'>
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
        {myView === false && myMetals[myInfo] && <Metal metal={myMetals[myInfo]} info={myBasics} />}
      </div>
    </>
  )
}

export default Metallurgy
