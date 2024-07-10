
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

    useEffect(() => {
      const interval = setInterval(() => {
        // console.log('Fetching data every second');
  
        const characterInfo = localStorage.getItem("characterInfo");
        if (characterInfo) {
          const data = JSON.parse(characterInfo);
          setCharacters(data); 
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    // console.log("This is my character ", myCharacters[2])

    function switchView(option) {
      if (option === 1) {
        // New Character
        setInfo(1000000000000);
        setView(false);
      } else if (option === 2) {
        // New Character
        setView(true);
      }
    }

    function changeSample(desiredSample) {
      switchView(2);
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
            <li id="nav-list" className={myInfo === 1000000000000 ? "nav-chosen" : "nav-unchosen"}>
              <button className="index-button" onClick={() => switchView(1)}>
                <span id="bold">New Character?</span>
              </button>
            </li>
          </ol>
        </div>
        
        <div id="info">
          <div id="centerSheet" style={{marginLeft:"25px", marginBottom:"20px"}}>
            <br/>
            {myView === true ? (
              <div className="sheet">
                <Character rogue={myCharacters[myInfo]} />
                {/* <Maker metals={props.metals} stunts={props.stunts} /> */}
              </div>
            ) : (
              <div className="sheet">
                <Maker metals={props.metals} stunts={props.stunts} characters={myCharacters} />
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
  
  export default Creator
  