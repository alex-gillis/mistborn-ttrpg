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
            <h3 id="italicked">2 Advancements</h3>
            <span id="bold">{props.improvement.advancement2.title}</span>
            {props.improvement.advancement2.description}
            <br/>
            <h3 id="italicked">4 Advancements</h3>
            <span id="bold">{props.improvement.advancement4.title1}</span>
            {props.improvement.advancement4.description}
            <ul>
                {props.improvement.advancement4.options?.map((myOption, index) => (
                    <li key={index}>
                        {myOption.option}
                    </li>
                ))}
            </ul>
            {props.improvement.advancement4.description2}
            <br/><br/>
            <span id="bold">{props.improvement.advancement4.title2}</span>
            {props.improvement.advancement4.description3}
            <h3 id="italicked">5 Advancements</h3>
            <span id="bold">{props.improvement.advancement5.title1}</span>
            {props.improvement.advancement5.description1}
            <br/>
            <span id="bold">{props.improvement.advancement5.title2}</span>
            {props.improvement.advancement5.description2}
            <br/>
            <h3 id="italicked">6 Advancements</h3>
            <span id="bold">{props.improvement.advancement6.title1}</span>
            {props.improvement.advancement6.description1}
            <br/><br/>
            <div id="italicked">
                {props.improvement.advancement6.example1}
            </div>
            {props.improvement.advancement6.description2}
            <br/><br/>
            <span id="bold">{props.improvement.advancement6.title2}</span>
            {props.improvement.advancement6.description3}
            <ul>
                {props.improvement.advancement6.increases?.map((myOption, index) => (
                    <li key={index}>
                        {myOption.option}
                    </li>
                ))}
            </ul>
            {props.improvement.advancement6.description4}
            <br/>
            <h3 id="italicked">10 Advancements</h3>
            <span id="bold">{props.improvement.advancement10.title1}</span>
            {props.improvement.advancement10.description1}
            <br/><br/>
            <span id="bold">{props.improvement.advancement10.title2}</span>
            {props.improvement.advancement10.description2}
            <br/><br/>
            <div id="italicked">
                {props.improvement.advancement10.example}
            </div>
            <br/>
            {props.improvement.advancement10.description3}
            <br/>
            <h3 id="italicked">15 Advancements</h3>
            <span id="bold">{props.improvement.advancement15.title}</span>
            {props.improvement.advancement15.description}
        </div>
      </>
    )
  }
  
  export default Improvement
  