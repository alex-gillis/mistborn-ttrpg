/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Points from "../../Modules/Points"

function Yield(props) {

    return (
        < >
            <h1>Yielding</h1>
            <div>{ props.yield.part1 }</div>
            <Points points={ props.yield.points } />
            <div>{ props.yield.part2 }</div>
        </>
    )
}

export default Yield
