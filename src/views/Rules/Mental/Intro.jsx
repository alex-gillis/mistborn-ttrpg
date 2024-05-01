/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Points from "../../Modules/Points"

function Intro(props) {

    return (
        < >
            <h1>Mental Conflicts</h1>
            <div>{ props.intro.part1 }</div>
            <Points points={ props.intro.points } />
            <div>{ props.intro.part2 }</div>
        </>
    )
}

export default Intro
