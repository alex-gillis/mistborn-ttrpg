import Basomancy from "./Basics/Basomancy";
import Basochemy from "./Basics/Basochemy";
import Basolurgy from "./Basics/Basolurgy";
import { useState } from 'react';

/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Basics(props) {
  const [myAllo, setAllo] = useState(true);
  const [myFeru, setFeru] = useState(false);
  const [myHema, setHema] = useState(false);

  function viewAllo() {
    setAllo(true);
    setFeru(false);
    setHema(false);
  }

  function viewFeru() {
    setAllo(false);
    setFeru(true);
    setHema(false);
  }

  function viewHema() {
    setAllo(false);
    setFeru(false);
    setHema(true);
  }
  return (
    < >
      <div id='filters'>
        <button id="filter-button" className={myAllo ? 'selected' : 'unselected'} onClick={() => viewAllo()}>Allomancy</button>
        <button id="filter-button" className={myFeru ? 'selected' : 'unselected'} onClick={() => viewFeru()}>Feruchemy</button>
        <button id="filter-button" className={myHema ? 'selected' : 'unselected'} onClick={() => viewHema()}>Hemalurgy</button>
      </div>
      {myAllo && <Basomancy info={ props.info[0] }/>}
      {myFeru && <Basochemy info={ props.info[1] }/>}
      {myHema && <Basolurgy info={ props.info[2] }/>}
    </>
  )
}
  
export default Basics