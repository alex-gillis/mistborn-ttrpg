/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Points from "../../Modules/Points"

function Circumstance(props) {

    return (
        < >
            <h1>Circumstances in Combat</h1>
            <div>{ props.circumstances.part1 }</div>
            <h2>Some favorable combat conditions include...</h2>
            <Points points={ props.circumstances.favourable } />
            <h2>Some adverse combat conditions include...</h2>
            <Points points={ props.circumstances.adverse } />
            <div>{ props.circumstances.part2 }</div>
        </>
    )
}

export default Circumstance
