/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Points from "../../Modules/Points"

function Nudges(props) {
  
    return (
      <>
      <div>
        <h1>Complications</h1>
        <div>{props.nudges.part1}</div>
        <h2>Nudging Successes</h2>
        <div>{props.nudges.part2}</div>
        <Points points={props.nudges.points} />
        <div>{props.nudges.part3}</div>
        <br/>
        <div id="example">{props.nudges.example}</div>
        <br/>
        <div>{props.nudges.part4}</div>
        <h2>Nudging Failures</h2>
        <div>{props.nudges.part5}</div>
        <br/>
        <div id="example">{props.nudges.example2}</div>
      </div>
      </>
    )
  }
  
  export default Nudges
  