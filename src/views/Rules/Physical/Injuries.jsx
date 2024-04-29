/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Points from "../../Modules/Points"

function Injuries(props) {

    return (
        < >
            <h1>What is Physical Damage?</h1>
            <div>{ props.injury.part1 }</div>
            <h2>Serious Physical Burdens</h2>
            <Points points={ props.injury.serious } />
            <h2>Grave Physical Burdens</h2>
            <Points points={ props.injury.grave } />
            <h2>Mortal Physical Burdens</h2>
            <Points points={ props.injury.mortal } />
            <div>{ props.injury.part2 }</div>
        </>
    )
}

export default Injuries
