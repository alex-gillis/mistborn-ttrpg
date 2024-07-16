/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Maker from "./Creator/Maker";
import Character from "./Creator/Character";

function Creator(props) {
    const [myCharacters, setCharacters] = useState([]);
    const [myCharacter, setCharacter] = useState(null);
    const [myView, setView] = useState(true);
    const [myInfo, setInfo] = useState(-1);

    function switchView(option) {
      if (option === 1) {
        // Creating Characters
        setInfo(-1);
        setView(true);
      } else if (option === 2) {
        // Viewing Characters
        setView(false);
      }
    }

    function changeSample(desiredSample) {
      switchView(2);
      setInfo(desiredSample);
    }

    // Function to fetch character data from localStorage
    const getCharacterData = () => {
        const characterInfo = localStorage.getItem("characterInfo");
        if (characterInfo) {
          const data = JSON.parse(characterInfo);
          setCharacters(data);
          setCharacter(data.length > 0 ? data[0] : null);
      } else {
          setCharacters([]);
          setCharacter(null);
      }
    };

    useEffect(() => {
        getCharacterData(); 
    }, []); 

    const refreshData = () => {
      getCharacterData();
      if (myCharacter === null) {
        switchView(1)
      } else {
        switchView(2)
        setInfo(0)
      }
    }

    const deleteCharacter = (index) => {
        const updatedCharacters = [...myCharacters];
        if (index >= 0 && index < updatedCharacters.length) {
            updatedCharacters.splice(index, 1);
            setCharacters(updatedCharacters);
            localStorage.setItem("characterInfo", JSON.stringify(updatedCharacters));
            setCharacter(updatedCharacters.length > 0 ? updatedCharacters[0] : null);
            setInfo(-1);
        }
    };

    return (
        <>
            <h1 className='notButter'>Charactermancer</h1>
            <div className='mobMargin'>
              <ol id="list">
                <h3 className='notButter'>Your Heroes</h3>
                <li id="nav-list" className={myInfo === -1 ? "nav-chosen" : "nav-unchosen"}>
                  <button className="index-button" onClick={() => switchView(1)}>
                    <span id="bold">New Character?</span>
                  </button>
                </li>
                {myCharacters !== 0 && myCharacters !== null ? ( 
                  <span>
                    {myCharacters.map((myCharacter, index) => (
                      <li  id="nav-list"  className={myInfo === index ? "nav-chosen" : "nav-unchosen"} key={index}>
                        <button className="index-button" onClick={() => changeSample(index)}>
                          <span id="bold">{myCharacter.name === "" ? "Unknown" : myCharacter.name}</span>
                        </button>
                      </li>
                    ))}
                  </span>
                ) : (
                  <span></span>
                )}
              </ol>
            </div>
            <div id="centerSheet" style={{ marginLeft: "25px", marginBottom: "20px" }}>
                <div className="sheet">
                    {myView ? (
                        <Maker metals={props.metals} stunts={props.stunts} characters={myCharacters} refreshData={getCharacterData} />
                    ) : (
                        <span>
                          {myCharacter ? (
                              <span>
                                <Character rogue={myCharacter} />
                                <button onClick={() => deleteCharacter(myInfo)}>Delete Character</button> 
                              </span>
                          ) : (
                              <span>No character selected.</span>
                          )}
                        </span>
                    )}
                </div>
                
            </div>
        </>
    );
}

export default Creator;

  