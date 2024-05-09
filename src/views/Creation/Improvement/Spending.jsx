/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Spending(props) {

    return (
      < >
        <div>
            <h1>Spending Advancements</h1>
            {props.improvement.spending}
            <br/> <br/>
            <table id="buildTable" className="propTable">
                <tbody>
                    <tr>
                        <th>Improvement</th>
                        <th>Cost</th>
                        <th>Description</th>
                    </tr>
                    {props.improvement.advOptions.map((advancement, index) => (
                    <tr key={index}>
                        <td>{advancement.improvement}</td>
                        <td>{advancement.cost}</td>
                        <td>{advancement.description}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            {props.improvement.spending2}
            <br/><br/>
            <div id="italicked">
                {props.improvement.example3}
            </div>
            <br/>
            <div id="italicked">
                {props.improvement.example4}
            </div>
            <br/>
            <div id="brandon">
                <h4>From Brandon</h4>
                {props.improvement.brandon}
            </div>
        </div>
      </>
    )
  }
  
  export default Spending
  