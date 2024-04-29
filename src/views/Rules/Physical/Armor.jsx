/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Armor(props) {

    return (
        < >
            <h1>Armor & Shields</h1>
            <div>{ props.armor.part1 }</div>
            <br/>
            <div id="example">{ props.armor.example1 }</div>
            <br/>
            <div id="example">{ props.armor.example2 }</div>
            <br/>
            <table id="buildTable">
                <tbody>
                    <tr>
                        <th>Armor</th>
                        <th>Damage Absorbed</th>
                    </tr>
                    {props.armor.armors?.map((myObject, index) => (
                        <tr key={index}>
                            <td id="buildRow">{myObject.one}</td>
                            <td id="buildRow">{myObject.two}</td>
                        </tr>
                    ))}
                </tbody>
                <tbody>
                    <tr>
                        <th>Shields</th>
                        <th>Defense Dice</th>
                    </tr>
                    {props.armor.shields?.map((myObject, index) => (
                        <tr key={index}>
                            <td id="buildRow">{myObject.one}</td>
                            <td id="buildRow">{myObject.two}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Armor
