import { useState } from 'react';
import Allomancy from "./Allomancy/Allomancy"
import Feruchemy from "./Feruchemy/Feruchemy"
import Hemalurgy from "./Hemalurgy/Hemalurgy"

/* eslint-disable react/prop-types */
function Metal(props) {
  const [myAllo, setAllo] = useState(false);
  const [myFeru, setFeru] = useState(false);
  const [myHema, setHema] = useState(false);
  let myReference = "the Symbol for" + props.metal.name + "symbol"

  function viewAllo() {
    setAllo(!myAllo);
  }

  function viewFeru() {
    setFeru(!myFeru);
  }

  function viewHema() {
    setHema(!myHema);
  }

  return (
    < >
      <h2>{ props.metal.name }</h2>
      <h4>{ props.metal.category } / { props.metal.firstQuality } / { props.metal.secondQuality }</h4>
      <div className='centerAlphabet'>
        <div id="steelAlphabet">
          <img id="alphabet" src={ props.metal.allomancy.icon } alt={myReference} />
        </div>
        <div>
          { props.metal.rarity }
        </div>
      </div>
      <br/>
      <div id='filters'>
        <button id="filter-button" className={myAllo ? 'selected' : 'unselected'} onClick={() => viewAllo()}>Allomancy</button>
        <button id="filter-button" className={myFeru ? 'selected' : 'unselected'} onClick={() => viewFeru()}>Feruchemy</button>
        <button id="filter-button" className={myHema ? 'selected' : 'unselected'} onClick={() => viewHema()}>Hemalurgy</button>
      </div>

      <br/>
      {myAllo && <Allomancy metal={ props.metal }/>}
      <br/>
      {myFeru && <Feruchemy metal={ props.metal }/>}
      <br/>
      {myHema && <Hemalurgy metal={ props.metal }/>}
    </>
  )
}
  
  export default Metal
  