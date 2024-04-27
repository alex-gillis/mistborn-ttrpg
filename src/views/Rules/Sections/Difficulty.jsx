/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Difficulty(props) {
    // getJSONData(metalJSON, collectMetals, onError);
  
    return (
      <>
      <h1>Difficulty</h1>
      <div>{props.diff.part1}</div>
      <br/>
      <div>
        <table id="buildTable">
            <tbody className="centered">
              <tr>
                <th>Assign this Difficulty...</th>
                <th>...when the task seems...</th>
              </tr>
                {props.diff.table?.map((myObject, index) => (
                    <tr key={index}>
                        <td id="buildRow">{myObject.one}</td>
                        <td id="buildRow">{myObject.two}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
      <br/>
      <div id="example">{props.diff.example}</div>
      <div>{props.diff.part2}</div>
      </>
    )
  }
  
  export default Difficulty
  