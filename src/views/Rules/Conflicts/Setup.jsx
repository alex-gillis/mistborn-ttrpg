/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Points from "../../Modules/Points"

function Setup(props) {

    return (
        < >
            <h1>Setting Up</h1>
            <div>{ props.setup.part1 }</div>
            <Points points={props.setup.points} />
            <div>{ props.setup.part2 }</div>
            <br/>
            <div id="example">{ props.setup.example }</div>
            <div>{ props.setup.part3 }</div>
            <br/>
            <div id="example">{ props.setup.example2 }</div>

        </>
    )
}

export default Setup
