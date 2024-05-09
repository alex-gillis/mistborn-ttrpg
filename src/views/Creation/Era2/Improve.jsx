/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Improve(props) {
    return (
      <>
        <h1>Improving Alloy Heroes</h1>
        <div>{props.info.intro}</div>
        <h2>Alloy of Law Advancements</h2>
        <div>{props.info.advancements.part1}</div>
        <table id="buildTable" className="propTable">
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
        <div>{props.info.advancements.part2}</div>
        <div>
            <h4>
                Using Advancements From Other 
                <br/> 
                Mistborn Supplemetns
            </h4>
            {props.info.advancements.brandon}
        </div>
      </>
    );
}
  
export default Improve;
