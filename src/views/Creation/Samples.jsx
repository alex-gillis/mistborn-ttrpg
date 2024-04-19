/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Sample from './Sample';

function Samples(props) {
  // getJSONData(metalJSON, collectMetals, onError);
  const [myEra1] = useState(props.era1);
  const [myEra2] = useState(props.era2);
  const [mySamples] = useState(props.era1.concat(props.era2));
  const [myInfo, setInfo] = useState(0);
  
  function changeSample(desiredSample) {
    setInfo(desiredSample);
  }

  return (
    <>
      <div>
        <ol id="list">
        <h2>Era 1 Heroes</h2>
          {myEra1 && myEra1.map((myHero, index) => (
            <li  id="nav-list" className='samples' key={index}>
              <button className="index-button" onClick={() => changeSample(myHero.id)}>
                <span id="bold">{myHero.name}</span>
              </button>
            </li>
          ))}
        <h2>Era 2 Heroes</h2>
          {myEra2 && myEra2.map((myHero, index) => (
            <li  id="nav-list" className='samples' key={index}>
              <button className="index-button" onClick={() => changeSample(myHero.id)}>
                <span id="bold">{myHero.name}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div id="info">
        {<Sample hero={mySamples[myInfo]} />}
      </div>
    </>
  )
}

export default Samples
