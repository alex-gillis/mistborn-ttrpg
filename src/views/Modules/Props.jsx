/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

function Props(props) {
    return (
        < >
        <div>
            <h2 id="italicked">Set your resiliences</h2>
            <div>{props.prop.basics}</div>
            <ul>
                {props.prop.types?.map((myObject, index) => (
                    <li key={index}>
                        <span id="bold">{myObject.name}:</span> {myObject.desc}
                    </li>
                ))}
            </ul>
            <div>{props.prop.part1}</div>
            <br/>
            <div id="italicked">{props.prop.example1}</div>
            <br/>
            <div>{props.prop.part2}</div>
            <br/>
            <div id="italicked">{props.prop.example2}</div>
            <br/>

            <table id="buildTable" className="propTable">
                    {props.propped.era2?.map((myProp, index) => (
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
                            <td colSpan="2">{props.propped.thirdNote}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
        </>
    )
}

export default Props;