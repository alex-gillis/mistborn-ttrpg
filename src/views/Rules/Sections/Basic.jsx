/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Points from "../../Modules/Points"

function Basic(props) {
    // getJSONData(metalJSON, collectMetals, onError);
  
    return (
      <>
      <h1>Game Basics</h1>
      <div>{props.basic.part1}</div>
      <br/>
      <div id="brandon">
        {props.basic.example}
      </div>
      <br/>
      <div>{props.basic.part2}</div>
      <div>
        <Points points={props.basic.points} />
      </div>
      <div>{props.basic.part3}</div>
      <br/>
      <div id="brandon">
        {props.basic.example2}
      </div>
      <br/>
      <div>{props.basic.part4}</div>
      <br/>
      <div id="brandon">
        <h4>From Brandon</h4>
        {props.basic.brandon}
      </div>
      </>
    )
  }
  
  export default Basic
  