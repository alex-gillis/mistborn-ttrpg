/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Points from "../../Modules/Points"

function Rolls(props) {
    // getJSONData(metalJSON, collectMetals, onError);
  
    return (
      <>
      <h1>When should I roll the dice?</h1>
      <div>{props.rolls.part1}</div>
      <div>
        <Points points={props.rolls.points} />
      </div>
      <div>{props.rolls.part2}</div>
      </>
    )
  }
  
  export default Rolls
  