/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Frame(props) {

    return (
        < >
            <h1>Framing the Scene</h1>
            <div>{ props.frame.part1 }</div>
            <br/>
            <div id="example">{ props.frame.example }</div>
            <br/>
            <div id="brandon">{ props.frame.brandon }</div>
            <br/>
            <div>{ props.frame.part2 }</div>

        </>
    )
}

export default Frame
