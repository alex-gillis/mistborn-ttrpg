/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
/* Era 1 Parts*/
import Basics from './Build/Basics';
import Hero from './Build/Hero';
import First from './Build/First';
import Second from './Build/Second';
import Third from './Build/Third';
import Fourth from './Build/Fourth';
import Fifth from './Build/Fifth';
/* Era 2 Parts*/
import Building from './Era2/Building';
import Change from './Era2/Change';
import New from './Era2/New';
import Crews from './Era2/Crews';
import One from './Era2/One';
import Two from './Era2/Two';
import Three from './Era2/Three';
import Four from './Era2/Four';
import Five from './Era2/Five';

const Build = (props) => {
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
        <h3 className='notButter'>Era 1 Heroes</h3>
          {myEra1 && myEra1.map((mySelection, index) => (
            <li  id="nav-list" className='basicBuild' key={index}>
              <button className="index-button" onClick={() => changeSelect(mySelection.id)}>
                <span id="bold">{mySelection.select}</span>
              </button>
            </li>
          ))}
        <h3>Era 2 Heroes</h3>
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
        { myInfo === 7 && <Change basics={props.built.basics} change={props.built.change} /> }
        { myInfo === 8 && <New new={props.built.new} /> }
        { myInfo === 9 && <Crews crews={props.built.crews} /> }
        { myInfo === 10 && <Building build={props.built.build} /> }
        { myInfo === 11 && <One step={props.built.stepOne} /> }
        { myInfo === 12 && <Two step={props.built.stepTwo} /> }
        { myInfo === 13 && <Three step={props.built.stepThree} /> }
        { myInfo === 14 && <Four step={props.built.stepFour} /> }
        { myInfo === 15 && <Five step={props.built.stepFive} propped={props.propped} /> }
      </div>
    </>
  )
}

export default Build
