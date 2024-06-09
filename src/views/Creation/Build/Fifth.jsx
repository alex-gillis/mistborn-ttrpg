/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Fifth(props) {
    return (
        <>
            <h1>Step 5: Fill in the Details</h1>
            <div>{props.build.step5}</div>
            <h3>Choose your race</h3>
            <div>{props.build.race1}</div>
            <br/>
            <div>
                {props.build.racialOptions.map((myItem, index) => (
                    <div key={index}>
                        <li>{myItem.name}</li>
                    </div>
                ))}
            </div>
            <br/>
            <div>Write your choice (or required race) in the space provided beneath the Mistborn logo on your character sheet</div>
            <br/>
            <div id="italicked">{props.build.example10}</div>
            <br/>
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
                <tbody>
                    {props.build.skaaNames.map((myName, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'evenRow' : 'oddRow'}>
                            <td>{myName.one}</td>
                            <td>{myName.two}</td>
                            <td>{myName.three}</td>
                            <td>{myName.four}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <h5>Noble</h5>
            <div>
                {props.build.noble}
            </div>
            <br/>
            <table id="buildTable">
                <thead>
                    <tr><th colSpan={4}>Male Names</th></tr>
                </thead>
                <tbody>
                    {props.build.nobleMale.map((myName, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'evenRow' : 'oddRow'}>
                            <td>{myName.one}</td>
                            <td>{myName.two}</td>
                            <td>{myName.three}</td>
                            <td>{myName.four}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <table id="buildTable">
                <thead>
                    <tr><th colSpan={4}>Female Names</th></tr>
                </thead>
                <tbody>
                    {props.build.nobleFemale.map((myName, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'evenRow' : 'oddRow'}>
                            <td>{myName.one}</td>
                            <td>{myName.two}</td>
                            <td>{myName.three}</td>
                            <td>{myName.four}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <table id="buildTable">
                <thead>
                    <tr><th colSpan={4}>Family Names</th></tr>
                </thead>
                <tbody>
                    {props.build.nobleFamily.map((myName, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'evenRow' : 'oddRow'}>
                            <td>{myName.one}</td>
                            <td>{myName.two}</td>
                            <td>{myName.three}</td>
                            <td>{myName.four}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <div id="brandon">
                <h4>From Brandon</h4>
                {props.build.brandon4}
            </div>
            <br/>
            <h5>Terris</h5>
            <div>
                {props.build.terris}
            </div>
            <table id="buildTable">
                <thead>
                    <tr><th colSpan={4}>Male Names</th></tr>
                </thead>
                <tbody>
                    {props.build.terrisMale.map((myName, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'evenRow' : 'oddRow'}>
                            <td>{myName.one}</td>
                            <td>{myName.two}</td>
                            <td>{myName.three}</td>
                            <td>{myName.four}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <table id="buildTable">
                <thead>
                    <tr><th colSpan={4}>Female Names</th></tr>
                </thead>
                <tbody>
                    {props.build.terrisFemale.map((myName, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'evenRow' : 'oddRow'}>
                            <td>{myName.one}</td>
                            <td>{myName.two}</td>
                            <td>{myName.three}</td>
                            <td>{myName.four}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <h5>Kandra</h5>
            <div>
                {props.build.kandra}
            </div>
            <table id="buildTable">
                <thead>
                    <tr><th colSpan={4}>Kandra Names</th></tr>
                </thead>
                <tbody>
                    {props.build.kandraNames.map((myName, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'evenRow' : 'oddRow'}>
                            <td>{myName.one}</td>
                            <td>{myName.two}</td>
                            <td>{myName.three}</td>
                            <td>{myName.four}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <div id="italicked">{props.build.example11}</div>
            <h3>Set your Resiliences</h3>
            <div>
                {props.build.resi1}
            </div>
            {props.build.resiliences.map((myItem, index) => (
                <li key={index} id="italicked">
                    {myItem.name}: {myItem.description}
                </li>
            ))}
            <div>
                {props.build.resi2}
            </div>
            {props.build.resCalc.map((myItem, index) => (
                <li key={index} id="italicked">
                    {myItem.name}: {myItem.description}
                </li>
            ))}
            <h3>Choose your props</h3>
            <div>
                {props.build.props1}
                <br/>
                {props.build.propTypes.map((myItem, index) => (
                    <div key={index}>
                        <li>
                            <span id="bold">{myItem.type}</span> {myItem.desc}
                        </li>
                    </div>
                ))}
                <br/>
                {props.build.props2}
                <br/>
                <br/>
                <div id="italicked">{props.build.example12}</div>
                <br/>
                {props.build.props3}
                <br/>
                <br/>
                <div id="italicked">{props.build.example13}</div>
                <br/>
                <table id="buildTable" className="propTable">
                    {props.propped.era1?.map((myProp, index) => (
                        <tbody key={index}>
                            <tr>
                                <th colSpan="2"><h4>{myProp.propType}</h4></th>
                            </tr>
                            {myProp.props?.map((myItem, propIndex) => (
                                <tr key={propIndex} className={propIndex % 2 === 0 ? 'evenRow' : 'oddRow'}>
                                    <td>{myItem.item}: </td>
                                    <td>{myItem.desc}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="2"> </td>
                            </tr>
                        </tbody>
                    ))}
                    <tbody>
                        <tr>
                            <th colSpan="2"><h4></h4></th>
                        </tr>
                        <tr>
                            <td id="propNotes" colSpan="2"> </td>
                        </tr>
                        <tr>
                            <td colSpan="2">{props.propped.firstNote}</td>
                        </tr>
                        <tr>
                            <td colSpan="2">{props.propped.secondNote}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Fifth;
