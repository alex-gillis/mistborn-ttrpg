/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Improvement(props) {

    return (
      < >
        <h1>Improving Heroes</h1>
        <div id="desc">
            {props.improvement.improving}
            <br/>
            <br/>
            <div id="brandon">
                <h4>Experienced Heroes</h4>
                {props.improvement.brandon}
            </div>
            <br/>
            {props.improvement.improvingTwo}
            <h2>How a Hero Advances</h2>
            {props.improvement.advances}
            <h3>Earning Advancements</h3>
            {props.improvement.earning}
            <br/><br/>
            {props.improvement.advancements.map((advancement, index) => (
            <div key={index}>
                <span id="italicked">{advancement.example}</span> <br/>
                {advancement.explain}
                <br/><br/>
            </div>
            ))}
            <div id="brandon">
                <h4>From Brandon</h4>
                {props.improvement.brandon2}
            </div>
            <br/>
            {props.improvement.advancements2.map((advancement, index) => (
            <div key={index}>
                <span id="italicked">{advancement.example}</span> <br/>
                {advancement.explain}
                <br/><br/>
            </div>
            ))}
            <h3>The Rate and Limits of Advancement</h3>
            {props.improvement.rate}
            <br/><br/>
            <div id="italicked">
                {props.improvement.example}
            </div>
            <br/>
            {props.improvement.limit}
            <br/>
            <div id="italicked">
                {props.improvement.example2}
            </div>
            <br/>
            <div id="brandon">
                <h4>From Brandon</h4>
                {props.improvement.brandon3}
            </div>
            <h3>Spending Advancements</h3>
            {props.improvement.spending}
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
        </div>
      </>
    )
  }
  
  export default Improvement
  