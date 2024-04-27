/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Points from "../../Modules/BigPoint"

function Beats(props) {
    // getJSONData(metalJSON, collectMetals, onError);
  
    return (
      <>
      <h1>Game Beats</h1>
      <div>{props.beat.part1}</div>
      <br/>
      <div id="brandon">
        {props.beat.example}
      </div>
      <br/>
      <div>{props.beat.part2}</div>
      <h2>Breathers</h2>
      <div>{props.breath.part1}</div>
      <div>
        <Points points={props.breath.breaths} />
      </div>
      <div>{props.breath.part2}</div>
      </>
    )
  }
  
  export default Beats
  