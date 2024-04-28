/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Points from "../../Modules/Points"

function Nudges(props) {

    return (
        < >
            <h1>Nudges in Conflicts</h1>
            <div>{ props.nudges.part1 }</div>
            <Points points={ props.nudges.points } />
            <div>{ props.nudges.part2 }</div>
            <br/>
            <div id="example">{ props.nudges.example }</div>
        </>
    )
}

export default Nudges
