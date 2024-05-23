/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Improve(props) {
    return (
      <>
        <h1>Improving Alloy Heroes</h1>
        <div>{props.info.intro}</div>
        <h2>Alloy of Law Advancements</h2>
        <div>{props.info.advancements.part1}</div>
        <br/>
        <table id="buildTable" className="propTable" style={{textAlign:"center"}}>
            <tbody>
                <tr>
                    <th>Improvement</th>
                    <th>Cost</th>
                    <th>Description</th>
                </tr>
                {props.info.advancements.table.map((advancement, index) => (
                <tr key={index}>
                    <td>{advancement.one}</td>
                    <td>{advancement.two}</td>
                    <td>{advancement.three}</td>
                </tr>
                ))}
            </tbody>
        </table>
        <br/>
        <div>{props.info.advancements.part2}</div>
        <br/>
        <div>
            <h4>
                Using Advancements From Other Mistborn Supplements
            </h4>
            {props.info.advancements.brandon}
        </div>
      </>
    );
}
  
export default Improve;
