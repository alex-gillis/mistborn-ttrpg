/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Range(props) {

    return (
        < >
            <h1>Range and Movement</h1>
            <div>{ props.range.part1 }</div>
            <br/>
            <table id="buildTable">
                <tbody>
                    <tr>
                        <th>Range</th>
                        <th>Description</th>
                        <th>Actual Distance</th>
                    </tr>
                    {props.range.table3?.map((myObject, index) => (
                        <tr key={index}>
                            <td id="buildRow">{myObject.one}</td>
                            <td id="buildRow">{myObject.two}</td>
                            <td id="buildRow">{myObject.three}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <div>{ props.range.part2 }</div>
            <br/>
            <div id="example">{ props.range.example }</div>
            <br/>
            <div>{ props.range.part3 }</div>
            <br/>
            <div id="brandon">
                <h4>From Brandon</h4>
                { props.range.brandon }
            </div>
            <br/>
            <div id="example">{ props.range.example2 }</div>
        </>
    )
}

export default Range
