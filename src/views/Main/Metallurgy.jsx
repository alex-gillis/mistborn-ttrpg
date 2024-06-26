/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Metal from '../Metallurgy/Metal';
import Basics from '../Metallurgy/Basics';

function Metallurgy(props) {
  // getJSONData(metalJSON, collectMetals, onError);
  const [myMetals] = useState(props.metals);
  const [myBasics] = useState(props.basics);
  const [myBasic, setBasic] = useState(0);
  const [myInfo, setInfo] = useState(20);
  const [myView, setView] = useState(true);

  function changeBasics(desiredBasic) {
    setBasic(desiredBasic);
    setInfo(20)
    setView(true);
  }
  
  function changeMetals(desiredMetal) {
    setInfo(desiredMetal);
    setBasic(20);
    setView(false);
  }

  return (
    <>
      <div id='creation'>
        <ol id="list" className='mobMargin' style={{paddingTop:"25px"}}>
          <h3 className='notButter'>Metallurgy</h3>
          <li id="nav-list" className={myBasic === 0 ? "nav-chosen" : "nav-unchosen"}>
            <button className="index-button" onClick={() => changeBasics(0)}>
              <span id="bold">Basics</span>
            </button>
          </li>
          {myMetals && myMetals.map(myMetal => (
            <li id="nav-list" className={myMetal.id === myInfo  ? "nav-chosen" : "nav-unchosen"} key={myMetal.id}>
              <button className="index-button" onClick={() => changeMetals(myMetal.id)}>
                <span id="bold">{myMetal.name}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div id="info" style={{marginTop:"0px"}}>
        {myView === true && myBasics[myBasic] && <Basics info={myBasics}/>}
        {myView === false && myMetals[myInfo] && <Metal metal={myMetals[myInfo]} info={myBasics} />}
      </div>
    </>
  )
}

export default Metallurgy
