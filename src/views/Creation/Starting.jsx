
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Starting(props) {

    return (
      < >
        <div id="starting" className='marginTop'>
            <h1 className="notButter">Getting Started</h1>
            {props.create.info}
            <h2>If You`ve Never Played An RPG Before...</h2>
            {props.create.neverPlayed}
            <h2>If You`re Experienced in TTRPG...</h2>
            {props.create.experienced} <br/>
            <div id="filters">
                <img className="icons" src="./assets/icons/atiumVial.png" alt="Atium Vial" />
            </div>
            <h2>What you need to play</h2>
            {props.create.needPlay}
            <h1 className="notButter">Your First Game</h1>
            <div id="filters">Eager to get started? Excellent. Here`s all you need to do.</div>
            <h2>Your Narrator</h2>
            {props.create.narrator}
            <h2>Everyone Else</h2>
            {props.create.everyoneElse}
        </div>
      </>
    )
  }
  
  export default Starting
  