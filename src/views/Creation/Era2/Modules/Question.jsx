/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Table from "./Table";

function Question(props) {
    return (
      <>
        <h2>{props.info.question}</h2>
        <div>{props.info.part1}</div>
          <br/>
        <Table info={props.info.table}/>
          <br/>
        <div>{props.info.part2}</div>
          <br/>
        <div id="italicked">{props.info.example}</div>
      </>
    );
}
  
export default Question;
