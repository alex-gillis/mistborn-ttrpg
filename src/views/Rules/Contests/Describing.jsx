/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Points from "../../Modules/Points"
import Repartee from "../../Modules/Repartee"

function Describing(props) {

    return (
        < >
            <h1>Describing Contests</h1>
            <div>{ props.describe.part1 }</div>
            <Points points={ props.describe.points } />
            <div>{ props.describe.part2 }</div>
            <div id="example">{ props.describe.example }</div>
            <div>{ props.describe.part3 }</div>
            <div id="example">{ props.describe.example2 }</div>
            <div>{ props.describe.part4 }</div>
            <h2>Describing Contests with Three or More Sides</h2>
            <div>{ props.describe.part5 }</div>
            <div id="example">{ props.describe.example3 }</div>
            <h2>Describing Extended Contests</h2>
            <Repartee info={ props.describe.extended } />
            <h2>Splitting the Focus</h2>
            <div>{ props.describe.split }</div>
            <br/>
            <div id="brandon">
                { props.describe.script.part1 }
                <br/><br/>
                <div id="example">{ props.describe.script.example }</div>
                { props.describe.script.part2 }
                <br/><br/>
                <div id="example">{ props.describe.script.example2 }</div>
            </div>
        </>
    )
}

export default Describing
