/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Points from "../../Modules/Points"

function Intro(props) {

    return (
        < >
            <h1>Changing the World</h1>
            <div>{ props.intro.part1 } <span id="bold">{ props.intro.highlight }</span></div>
            <h2>How Standing Works</h2>
            <div>{ props.intro.part2 }</div>
            <Points points={ props.intro.points } />
            <div>{ props.intro.part3 }</div>
            <br/>
            <div id="example">{ props.intro.example1 }</div>
            <h2>Recovering Standings</h2>
            <div>{ props.intro.part4 }</div>
            <br/>
            <div id="example">{ props.intro.example2 }</div>
        </>
    )
}

export default Intro
