/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Points from "../../Modules/Points"

function Complications(props) {

    return (
        < >
            <h1>Complications in Conflicts</h1>
            <div>{ props.complications.part1 }</div>
            <Points points={ props.complications.points } />
            <div>{ props.complications.part2 }</div>
            <br/>
            <div id="example">{ props.complications.example }</div>
        </>
    )
}

export default Complications
