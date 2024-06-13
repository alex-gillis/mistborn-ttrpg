/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Sample from './Sample';

const Samples = (props) => {
  // getJSONData(metalJSON, collectMetals, onError);
  const [myEra1] = useState(props.era1);
  const [myEra2] = useState(props.era2);
  // const [myHeroEra1] = useState(props.rogues.era1);
  // const [myHeroEra2] = useState(props.rogues.era2);
  const [mySamples] = useState(props.era1.concat(props.era2));
  const [myHeroes] = useState(props.rogues[0].rogues.concat(props.rogues[1].rogues));
  const [myInfo, setInfo] = useState(0);
  
  function changeSample(desiredSample) {
    setInfo(desiredSample);
  }

  return (
    <>
      <div className='mobMargin'>
        <ol id="list">
        <h3 className='notButter'>Era 1 Heroes</h3>
          {myEra1 && myEra1.map((myHero, index) => (
            <li  id="nav-list"  className={myInfo === index ? "nav-chosen" : "nav-unchosen"} key={index}>
              <button className="index-button" onClick={() => changeSample(myHero.id)}>
                <span id="bold">{myHero.name}</span>
              </button>
            </li>
          ))}
        <h3>Era 2 Heroes</h3>
          {myEra2 && myEra2.map((myHero, index) => (
            <li  id="nav-list"  className={myInfo === index + 8 ? "nav-chosen" : "nav-unchosen"} key={index}>
              <button className="index-button" onClick={() => changeSample(myHero.id)}>
                <span id="bold">{myHero.name}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div id="info">
        {<Sample hero={mySamples[myInfo] } rogue={myHeroes[myInfo]} />}
      </div>
    </>
  )
}

export default Samples
