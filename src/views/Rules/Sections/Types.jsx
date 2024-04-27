/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import BigPoints from "../../Modules/BigPoint"
import Points from "../../Modules/Points"

function Types(props) {
    // getJSONData(metalJSON, collectMetals, onError);
  
    return (
      <>
      <h1>Types of Dice Rolls</h1>
      <div>{props.types.part1}</div>
      <div>
        <BigPoints points={props.types.rolls} />
      </div>
      <div>{props.types.part2}</div>
      <div>
        <Points points={props.types.points} />
      </div>
      <div>{props.types.part3}</div>
      </>
    )
  }
  
  export default Types
  