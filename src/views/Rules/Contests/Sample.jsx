/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Points from "../../Modules/Points"
import Repartee from "../../Modules/Repartee"

function Sample(props) {

    return (
        < >
            <h1>Describing Contests</h1>
            <Repartee info={ props.sample.parts } />
            <h2>Attribute Contests</h2>
            <Points points={ props.sample.attribute } />
            <h2>Standing Contests</h2>
            <Points points={ props.sample.standing } />
            <h2>Power Contests</h2>
            <Points points={ props.sample.power } />
        </>
    )
}

export default Sample
