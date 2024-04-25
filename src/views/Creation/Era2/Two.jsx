/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Table from "./Modules/Table";

function Two(props) {
    return (
      <>
        <h1>Step 2: Devise a Concept</h1>
        <div>{props.step.basics}</div>
        <br/>
        <Table info={props.step.concepts}/>
        <br/>
        <div id="italicked">{props.step.example}</div>
      </>
    );
}
  
export default Two;
