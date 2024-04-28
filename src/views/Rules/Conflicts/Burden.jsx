/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import BigPoints from "../../Modules/BigPoint"
import Repartee from "../../Modules/Repartee"

function Burden(props) {

    return (
        < >
            <h1>Burdens</h1>
            <div>{ props.burdens.part1 }</div>
            <BigPoints points={ props.burdens.types } />
            <Repartee info={props.burdens.parts} />
            <div>{ props.burdens.part2 }</div>
        </>
    )
}

export default Burden
