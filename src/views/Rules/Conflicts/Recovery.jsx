/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Points from "../../Modules/Points"

function Recovery(props) {

    return (
        < >
            <h1>Recovery</h1>
            <div>{ props.recovery.part1 }</div>
            <Points points={ props.recovery.points } />
            <div>{ props.recovery.part2 }</div>
            <br/>
            <div id="example">{ props.recovery.example1 }</div>
            <br/>
            <div>{ props.recovery.part3 }</div>
            <br/>
            <div id="example">{ props.recovery.example2 }</div>
            <br/>
            <div>{ props.recovery.part4 }</div>
            <br/>
            <div id="brandon">
                <h4>Epic Conflicts</h4>
                { props.recovery.brandon }
            </div>
        </>
    )
}

export default Recovery
