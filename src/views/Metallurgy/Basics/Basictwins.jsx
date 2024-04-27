/* eslint-disable react/prop-types */
function Basictwins(props) { 
    return (
        < >
            <h2>{ props.info.name }</h2>
            { props.info.basics }
            <h3>Twinborn in Society</h3>
            { props.info.society }
            <h3>Types of Twinborn</h3>
            { props.info.types }
            <h3>Compounding</h3>
            { props.info.compounding }
            <h4>Compounding Rules</h4>
            { props.info.rules.part1 }
            <br/><br/>
            <div id="italicked">
                { props.info.rules.example1 }
            </div>
            <br/>
            { props.info.rules.part2 }
            <br/><br/>
            <div id="italicked">
                { props.info.rules.example2 }
            </div>
            <br/>
            { props.info.rules.part3 }
            <br/><br/>
            <div id="italicked">
                { props.info.rules.example3 }
            </div>
            <br/>
            { props.info.rules.part4 }
            <br/><br/>
            <div id="italicked">
                { props.info.rules.example4 }
            </div>
            <br/>
            {props.info.rules.uncharged.map((mySelection, index) => (
                <div key={index}>
                    <span id="bold">{mySelection.title}</span>
                    {mySelection.desc}
                    <br/><br/>
                </div>
            ))}
            <div id="italicked">
                { props.info.rules.example5 }
            </div>
            <br/>
            { props.info.rules.compounder }
            <br/>
            <br/>
            <table id="buildTable" className="propTable">
                <thead>
                    <tr>
                        <th>Allomantic Metal</th>
                        <th>Feruchemical Metal</th>
                        <th>Twinborn Name</th>
                        <th>Reputation</th>
                    </tr>
                </thead>
                <tbody>
                    {props.info.rules.nicknames.map((myRule, index) => (
                        <tr key={index}>
                            <td>{myRule.allomancy}</td>
                            <td>{myRule.feruchemy}</td>
                            <td>{myRule.twinborn}</td>
                            <td>{myRule.reputation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}
  
export default Basictwins
  