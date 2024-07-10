
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

import Maker from "./Creator/Maker"
import Character from "./Creator/Character"
function Creator(props) {
    const getInitialCharacter = () => {
      const characterInfo = localStorage.getItem("characterInfo");
      return characterInfo ? JSON.parse(characterInfo) : null;
    };
  
    const [myCharacters, setCharacters] = useState(getInitialCharacter);
    const [myView, setView] = useState(true);
    const [myInfo, setInfo] = useState(0);

    useEffect(() => {
      const getData = async () => {
        try {
          const characterInfo = localStorage.getItem("characterInfo");
          if (!characterInfo) {
            throw new Error('No character info found');
          }
          const data = JSON.parse(characterInfo);
          setCharacters(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      getData();
    }, []);

    // console.log("This is my character ", myCharacters[0])

    function switchView() {
      setView(!myView);
    }

    function changeSample(desiredSample) {
      setInfo(desiredSample);
    }

    return (
      < >
        <h1 className='notButter'>Charactermancer</h1>
        <div className='mobMargin'>
          <ol id="list">
            <h3 className='notButter'>Your Heroes</h3>
          {myCharacters.map((myCharacter, index) => (
              <li  id="nav-list"  className={myInfo === index ? "nav-chosen" : "nav-unchosen"} key={index}>
                <button className="index-button" onClick={() => changeSample(index)}>
                  <span id="bold">{myCharacter.name}</span>
                </button>
              </li>
          ))}
          </ol>
        </div>
        
        <div id="info">
          <div id="centerSheet" style={{marginLeft:"25px", marginBottom:"20px"}}>
            <div className="sheet" style={{display:myView === true ? "none" : "block"}}>
              <Maker metals={props.metals} stunts={props.stunts} character={myCharacters} />
            </div>
            <br/>
            <div className="sheet" style={{display:myView === false ? "none" : "block"}}>
              <Character rogue={myCharacters[0]} />
              {/* <Maker metals={props.metals} stunts={props.stunts} /> */}
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Creator
  