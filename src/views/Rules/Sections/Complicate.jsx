/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Points from "../../Modules/Points"

function Complicate(props) {
  
    return (
      <>
      <div>
        <h1>Complications</h1>
        <div>{props.complication.part1}</div>
        <br/>
        <Points points={props.complication.points} />
        <br/>
        <div>{props.complication.part2}</div>
        <br/>
        <div>
          <span id="bold">{props.complication.part3}</span> {props.complication.part4}
        </div>
        <br/>
        <div id="example">{props.complication.example}</div>
        <br/>
        <div>{props.complication.part5}</div>
      </div>
      </>
    )
  }
  
  export default Complicate
  