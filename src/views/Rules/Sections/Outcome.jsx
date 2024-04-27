/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Points from "../../Modules/Points"

function Outcome(props) {
  
    return (
      <>
      <div>
        <h2>What`s the Outcome?</h2>
        <div>{props.outcome.part1}</div>
        <div id="example">{props.outcome.example}</div>
        <div>{props.outcome.part2}</div>
        <br/>
        <div>
            <table id="buildTable">
                <tbody className="centered">
                <tr>
                    <th>Outcome</th>
                    <th>``That was...``</th>
                </tr>
                    {props.outcome.table?.map((myObject, index) => (
                        <tr key={index}>
                            <td id="buildRow">{myObject.one}</td>
                            <td id="buildRow">{myObject.two}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <br/>
        <div>{props.outcome.part3}</div>
      </div>

      <div>
        <h2>Describing Outcomes</h2>
        <div>{props.describing.part1}</div>
        <Points points={props.describing.points}/>
        <div>{props.describing.part2}</div>
        <br/>
        <div id="example">{props.describing.example}</div>
        <br/>
        <div>{props.describing.part3}</div>
        <br/>
        <div id="example">{props.describing.example2}</div>
        <br/>
        <div>{props.describing.part4}</div>
        <br/>
        <div id="example">{props.describing.example3}</div>
        <br/>
        <div>{props.describing.part5}</div>
        <br/>
        <div id="example">{props.describing.example4}</div>
        <br/>
        <div>{props.describing.part6}</div>
        <br/>
        <div id="example">
            {props.describing.example5}
            <Points points={props.describing.examplePoints}/>
            {props.describing.example6}
        </div>
        <br/>
        <div>{props.describing.part7}</div>
        <br/>
        <div id="brandon">
            {props.describing.conversation}
        </div>
        <br/>
        <div id="example">{props.describing.example7}</div>
      </div>

      <div>
        <h2>When not to use an Outcome</h2>
        <div>{props.not.part1}</div>
        <br/>
        <div id="example">{props.not.example}</div>
        <br/>
        <div>{props.not.part2}</div>
      </div>
      </>
    )
  }
  
  export default Outcome
  