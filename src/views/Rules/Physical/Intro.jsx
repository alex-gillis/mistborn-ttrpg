/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Intro(props) {

    return (
        < >
            <h1>Physical Conflicts (Combat)</h1>
            <div>{ props.intro.part1 }</div>
            <br/>
            <div id="brandon">
                <h4>From Brandon</h4>
                { props.intro.brandon }
            </div>
        </>
    )
}

export default Intro
