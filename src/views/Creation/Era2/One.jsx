/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Table from "../../Modules/Table";

function One(props) {
    return (
      <>
        <h1>Step 1: Start with the Crew</h1>
        <div>{props.step.basics}</div>
        <h2 id="italicked">What is your crew`s common cause?</h2>
        <div>{props.step.common}</div>
        <Table info={props.step.causes}/>
        <h2 id="italicked">Who is your crew`s primary target?</h2>
        <div>{props.step.primary}</div>
        <Table info={props.step.targets}/>
        <h2 id="italicked">What is your crew`s preferred method?</h2>
        <div>{props.step.preferred}</div>
        <Table info={props.step.methods}/>
        <div id="italicked">{props.step.example}</div>
      </>
    );
}
  
export default One;
