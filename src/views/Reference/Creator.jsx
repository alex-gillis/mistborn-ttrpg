/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Maker from "./Creator/Maker";
import Editor from "./Creator/Editor";
import Character from "./Creator/Character";

function Creator(props) {
    const [myCharacters, setCharacters] = useState([]);
    const [myCharacter, setCharacter] = useState(null);
    const [myView, setView] = useState(true);
    const [myInfo, setInfo] = useState(-1);
    const [myEdit, setEdit] = useState(false);

    function switchView(option) {
      if (option === 1) {
        // Creating Characters
        setInfo(-1);
        setView(true);
        setEdit(false);
      } else if (option === 2) {
        // Viewing Characters
        setView(false);
        setEdit(false);
      }
    }

    function changeSample(desiredSample) {
      switchView(2);
      setInfo(desiredSample);
      setCharacter(myCharacters[desiredSample])
      setEdit(false);
    }

    // Function to fetch character data from localStorage
    const getCharacterData = (index) => {
      const characterInfo = localStorage.getItem("characterInfo");
      if (characterInfo) {
        const data = JSON.parse(characterInfo);
        setCharacters(data);
        setCharacter(data.length > 0 ? data[0] : null);
      } else {
        setCharacters([]);
        setCharacter(null);
      }

      if (index !== undefined) {
        setEdit(false);
        setInfo(index);
      }
      
    };

    function refreshData(index) {
      getCharacterData(index);
    }

    useEffect(() => {
        getCharacterData(); 
    }, []); 

    const deleteCharacter = (index) => {
        const updatedCharacters = [...myCharacters];
        if (index >= 0 && index < updatedCharacters.length) {
            updatedCharacters.splice(index, 1);
            setCharacters(updatedCharacters);
            localStorage.setItem("characterInfo", JSON.stringify(updatedCharacters));
            setCharacter(updatedCharacters.length > 0 ? updatedCharacters[0] : null);
            switchView(1);
        }
    };

    return (
        <>
            <h1 className='notButter' style={{fontSize:"200%"}}>Charactermancer</h1>
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
                      <li id="nav-list"  className={myInfo === index ? "nav-chosen" : "nav-unchosen"} key={index}>
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
              <div id="info">
                <div className="sheet">
                    {myView ? (
                        <Maker metals={props.metals} stunts={props.stunts} characters={myCharacters} refreshData={refreshData} />
                    ) : (
                        <span>
                          {myCharacter ? (
                              <span>
                                {myEdit ? (
                                  <span>
                                    <Editor metals={props.metals} stunts={props.stunts} characters={myCharacters} refreshData={refreshData} index={myInfo} />
                                  </span>
                                ) : (
                                  <span>
                                    <Character rogue={myCharacter} />
                                    <button className='selected' style={{width:"120px", backgroundColor:"goldenrod", color:"black", marginLeft:"15px"}} onClick={() => setEdit(!myEdit)}>Edit</button> 
                                    <button className='selected' style={{width:"120px", backgroundColor:"red", color:"black", marginLeft:"15px"}} onClick={() => deleteCharacter(myInfo)}>Delete</button> 
                                    <br/><br/>
                                  </span>
                                )}
                              </span>
                          ) : (
                              <span>No character selected.</span>
                          )}
                        </span>
                    )}
                </div>
              </div>
            </div>
        </>
    );
}

export default Creator;

  