/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Fifth(props) {
    return (
      < >
        <h1>Step 5: Fill in the Details</h1>
        <div>{props.build.step5}</div>
        <br/>
        <h3>Choose your race</h3>
        <div>{props.build.race1}</div>
        <br/>
        <div>
            {props.build.racialOptions.map((myItem, index) => (
                <div key={index}>
                    <li>{myItem.name}</li>  
                </div> 
            ))}
        <div/>
        <br/>
        <div>Write your choice (or required race) in the space provided beneath the Mistborn logo on your character sheet</div>
        <br/>
        <div id="italicked">{props.build.example10}</div>
        <div id="brandon">
            <h4>From Brandon</h4>
            {props.build.brandon3}
        </div>
        <h3>Choose a name</h3>
        <div>{props.build.chooseName}</div>
        <h5>Skaa</h5>
        <div>
            {props.build.skaa}
        </div>
            <table id="buildTable">
                {props.build.skaaNames.map((myName, index) => (
                    <tr key={index}>
                        <td id="buildRow">{myName.one}</td> 
                        <td id="buildRow">{myName.two}</td>
                        <td id="buildRow">{myName.three}</td> 
                        <td id="buildRow">{myName.four}</td>
                    </tr> 
                ))}
            </table>
        <h5>Noble</h5>
        <div>
            {props.build.noble}
        </div>
            <table id="buildTable">
                <tr><thead>Male Names</thead></tr>
                {props.build.nobleMale.map((myName, index) => (
                    <tr key={index}>
                        <td id="buildRow">{myName.one}</td> 
                        <td id="buildRow">{myName.two}</td>
                        <td id="buildRow">{myName.three}</td> 
                        <td id="buildRow">{myName.four}</td>
                    </tr> 
                ))}
            </table>
            <br/>
            <table id="buildTable">
                <tr><thead>Female Names</thead></tr>
                {props.build.nobleFemale.map((myName, index) => (
                    <tr key={index}>
                        <td id="buildRow">{myName.one}</td> 
                        <td id="buildRow">{myName.two}</td>
                        <td id="buildRow">{myName.three}</td> 
                        <td id="buildRow">{myName.four}</td>
                    </tr> 
                ))}
            </table>
            <br/>
            <table id="buildTable">
                <tr><thead>Family Names</thead></tr>
                {props.build.nobleFamily.map((myName, index) => (
                    <tr key={index}>
                        <td id="buildRow">{myName.one}</td> 
                        <td id="buildRow">{myName.two}</td>
                        <td id="buildRow">{myName.three}</td> 
                        <td id="buildRow">{myName.four}</td>
                    </tr> 
                ))}
            </table>
            <br/>
            <div id="brandon">
                <h4>From Brandon</h4>
                {props.build.brandon4}
            <div/>
        </div>
        <h5>Terris</h5>
        <div>
            {props.build.terris}
        </div>
            <table id="buildTable">
                <tr><thead>Male Names</thead></tr>
                {props.build.terrisMale.map((myName, index) => (
                    <tr key={index}>
                        <td id="buildRow">{myName.one}</td> 
                        <td id="buildRow">{myName.two}</td>
                        <td id="buildRow">{myName.three}</td> 
                        <td id="buildRow">{myName.four}</td>
                    </tr> 
                ))}
            </table>
            <br/>
            <table id="buildTable">
                <tr><thead>Female Names</thead></tr>
                {props.build.terrisFemale.map((myName, index) => (
                    <tr key={index}>
                        <td id="buildRow">{myName.one}</td> 
                        <td id="buildRow">{myName.two}</td>
                        <td id="buildRow">{myName.three}</td> 
                        <td id="buildRow">{myName.four}</td>
                    </tr> 
                ))}
            </table>
        <h5>Kandra</h5>
        <div>
            {props.build.kandra}
        </div>
            <table id="buildTable">
                {props.build.kandraNames.map((myName, index) => (
                    <tr key={index}>
                        <td id="buildRow">{myName.one}</td> 
                        <td id="buildRow">{myName.two}</td>
                        <td id="buildRow">{myName.three}</td> 
                        <td id="buildRow">{myName.four}</td>
                    </tr> 
                ))}
            </table>
        <div id="italicked">{props.build.example11}</div>
        <br/>
        <h3>Set your Resiliences</h3>
        <div>
            {props.build.resi1}
        </div>
            {props.build.resiliences.map((myItem, index) => (
            <li key={index}  id="italicked">
                {myItem.name}: {myItem.description}
            </li> 
            ))}
            <div>
                {props.build.resi2}
            </div>
            {props.build.resCalc.map((myItem, index) => (
            <li key={index}  id="italicked">
                {myItem.name}: {myItem.description}
            </li> 
            ))}
            <div>
                {props.build.props1}
            {props.build.racialOptions.map((myItem, index) => (
                <div key={index}>
                    <li>
                        <span id="bold">{myItem.type} {myItem.desc}</span>
                    </li>  
                </div> 
            ))}
                {props.build.props2}
                <br/>
                <div id="italicked">{props.build.example12}</div>
                <br/>
                {props.build.props3}
                <br/>
                <div id="italicked">{props.build.example13}</div>
            <table id="buildTable">
                {props.propped.era1?.map((myProp, index) => (
                    <div key={index}>
                        {myProp.props?.map((myItem, propIndex) => (
                            <tr key={propIndex}>
                                <td id="buildRow">{myItem.item}</td> 
                                <td id="buildRow">{myItem.desc}</td>
                            </tr> 
                        ))}
                    </div>
                ))}
                <tfoot>{props.build.firstNote}</tfoot>
                <tfoot>{props.build.secondNote}</tfoot>
            </table>
            </div>
        </div>
      </>
    )
  }
  
  export default Fifth
  