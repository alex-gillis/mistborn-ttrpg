/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Repartee from "../../Modules/Repartee"

function Other(props) {

    return (
        < >
            <h1>Other Contest Rules</h1>
            <div>{ props.other.part1 }</div>
            <Repartee info={ props.other.ruled } />
            <div>{ props.other.part2 }</div>

        </>
    )
}

export default Other
