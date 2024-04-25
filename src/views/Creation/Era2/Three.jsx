/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Question from "./Modules/Question";
import Another from "./Modules/Another";
import Example from "./Modules/Example";
import TableTwo from "./Modules/TableTwo";

function Three(props) {
    return (
      <>
        <h1>Step 3: Answer 10 Important Questions</h1>
        <div>{props.step.basics}</div>
        {props.step.setOne?.map((myObject, index) => (
            <div key={index}>
                <Question info={myObject} />
            </div>
        ))}
        <br/>
        {props.step.setTwo?.map((myObject, index) => (
            <div key={index}>
                <Another info={myObject} />
            </div>
        ))}
        <br/>
        <div>
          <h2>{props.step.qNine.question}</h2>
          <div>{props.step.qNine.part1}</div>
          <br/>
          {props.step.qNine.drives?.map((myObject, index) => (
              <div key={index}>
                  <Example info={myObject} />
              </div>
          ))}
          <div>{props.step.qNine.part2}</div>
          <br/>
          <TableTwo info={props.step.qNine.table} />
          <br/>
          <div>{props.step.qNine.part3}</div>
          <div id="italicked">{props.step.qNine.example}</div>
        </div>
        <br/>
        <div>
          <h2>{props.step.qTen.question}</h2>
          <div>{props.step.qTen.part1}</div>
          <br/>
          <TableTwo info={props.step.qTen.table}/>
          
        <br/><div>{props.step.qTen.part2}</div>
          <br/>
          <div id="italicked">{props.step.qTen.example}</div>
        </div>
      </>
    );
}
  
export default Three;
