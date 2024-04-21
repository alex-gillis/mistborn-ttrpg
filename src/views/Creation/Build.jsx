/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Basics from './Build/Basics';
import Hero from './Build/Hero';
import First from './Build/First';
import Second from './Build/Second';
import Third from './Build/Third';
import Fourth from './Build/Fourth';
import Fifth from './Build/Fifth';

function Build(props) {
  const [myEra1] = useState(props.start.selectEra1);
  const [myEra2] = useState(props.start.selectEra2);
  const [myInfo, setInfo] = useState(0);
  
  function changeSelect(desiredSelect) {
    setInfo(desiredSelect);
  }
  

  return (
    <>
      <div>
        <ol id="list">
        <h2>Era 1 Heroes</h2>
          {myEra1 && myEra1.map((mySelection, index) => (
            <li  id="nav-list" className='basicBuild' key={index}>
              <button className="index-button" onClick={() => changeSelect(mySelection.id)}>
                <span id="bold">{mySelection.select}</span>
              </button>
            </li>
          ))}
        <h2>Era 2 Heroes</h2>
          {myEra2 && myEra2.map((mySelection, index) => (
            <li  id="nav-list" className='basicBuild' key={index}>
              <button className="index-button" onClick={() => changeSelect(mySelection.id)}>
                <span id="bold">{mySelection.select}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div id="buildInfo">
        { myInfo === 0 && <Basics build={props.start}/> }
        { myInfo === 1 && <Hero build={props.building}/> }
        { myInfo === 2 && <First build={props.building}/> }
        { myInfo === 3 && <Second build={props.building}/> }
        { myInfo === 4 && <Third build={props.building}/> }
        { myInfo === 5 && <Fourth build={props.building}/> }
        { myInfo === 6 && <Fifth build={props.building} propped={props.propped}/> }
      </div>
    </>
  )
}

export default Build
