/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Weapon(props) {

    return (
        < >
            <h1>Weapons</h1>
            <div>{ props.weapons.part1 }</div>
            <br/>
            <div id="example">{ props.weapons.example1 }</div>
            <br/>
            <table id="buildTable">
                <tbody>
                    <tr>
                        <th>Melee Weapons</th>
                        <th>Damage</th>
                        <th>Minimum / Maximum Range</th>
                    </tr>
                    {props.weapons.melee?.map((myObject, index) => (
                        <tr key={index}>
                            <td id="buildRow">{myObject.one}</td>
                            <td id="buildRow">{myObject.two}</td>
                            <td id="buildRow">{myObject.three}</td>
                        </tr>
                    ))}
                </tbody>
                <tbody>
                    <tr>
                        <th>Ranged Weapons</th>
                        <th>Damage</th>
                        <th>Minimum / Maximum Range</th>
                    </tr>
                    {props.weapons.ranged?.map((myObject, index) => (
                        <tr key={index}>
                            <td id="buildRow">{myObject.one}</td>
                            <td id="buildRow">{myObject.two}</td>
                            <td id="buildRow">{myObject.three}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                       <td colSpan={3}>{ props.weapons.footer }</td> 
                    </tr>
                </tfoot>
            </table>
            {props.weapons.examples?.map((myObject, index) => (
                <div id="example" key={index}>
                    <br/>
                    {myObject.example}
                    <br/>
                </div>
            ))}
        </>
    )
}

export default Weapon
