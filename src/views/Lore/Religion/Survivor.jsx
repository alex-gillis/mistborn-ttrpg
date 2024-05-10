/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import BigPoints from "../../Modules/BigPoint"

function Survivor(props) {
  
    return (
      <>
      <h1>Church of the Survivor</h1>
      <div>{props.info.open}</div>
      <div>
        <h2>Beliefs</h2>
        {props.info.belief.part}
        <div>
            {props.info.belief.commandments.map((section, index) => (
                <div key={index}>
                    <span id="bold">{section.name}</span> {section.desc}
                </div>
            ))}
        </div>
      </div>
      <div>
        <h2>Organization</h2>
        {props.info.organization}
      </div>
      <div>
        <h2>Symbols</h2>
        {props.info.symbol}
      </div>
      <div>
        <h2>Figues of Note</h2>
        <BigPoints points= {props.info.figures} />
      </div>
      </>
    )
  }
  
  export default Survivor
  