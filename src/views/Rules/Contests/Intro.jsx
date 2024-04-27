/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Intro(props) {

    return (
        < >
            <h1>Contests</h1>
            <div>{ props.intro.part1 }</div>
            <br/>
            <div id="example">{ props.intro.example }</div>
            <div>{ props.intro.part2 }</div>
            <br/>
            <div id="example">{ props.intro.example2 }</div>
        </>
    )
}

export default Intro
