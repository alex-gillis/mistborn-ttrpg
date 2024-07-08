
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from 'react';

import Maker from "./Creator/Maker"
// import Character from "./Sample/Character"
function Creator(props) {
    const [myCharacters, setCharacters] = useState([]);

    if (localStorage.getItem("characterInfo")) {
      setCharacters(JSON.parse(localStorage.getItem("characterInfo")));
    } 

    return (
      < >
        <h1>Charactermancer</h1>
        <div id="centerSheet" style={{marginLeft:"25px", marginBottom:"20px"}}>
          <div className="sheet">
            <Maker metals={props.metals} stunts={props.stunts} character={myCharacters} />
          </div>
          <br/>
          <div className="sheet">
            {/* <Character rogue={} /> */}
            {/* <Maker metals={props.metals} stunts={props.stunts} /> */}
          </div>
        </div>
      </>
    )
  }
  
  export default Creator
  