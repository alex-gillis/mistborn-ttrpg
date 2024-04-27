/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Points from "../../Modules/Points"

function Rolling(props) {
    // getJSONData(metalJSON, collectMetals, onError);
  
    return (
      <>
      <h1>Rolling the Dice</h1>
      <div>{props.rolling.part1}</div>
      <div>
        <Points points={props.rolling.points} />
      </div>
      <div id="example">{props.rolling.example}</div>
      </>
    )
  }
  
  export default Rolling
  