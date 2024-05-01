/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Intro(props) {

    return (
        < >
            <h1>Social Conflicts</h1>
            <div>{ props.intro.part1 } <span id="bolder">{ props.intro.highlight1 }</span></div>
            <br/>
            <div>{ props.intro.part2 }</div>
            <br/>
            <div><span id="bolder">{ props.intro.highlight2 }</span> { props.intro.part3 }</div>
            <br/>
            <div id="example">
                { props.intro.example1 }
            </div>
            <br/>
            <div>{ props.intro.part4 }</div>
            <br/>
            <div id="example">
                { props.intro.example2 }
            </div>
            <br/>
            <div>{ props.intro.part5 }</div>
            <br/>
            <div> <span id="bolder">{ props.intro.highlight3 }</span> { props.intro.part6 }</div>
            <br/>
            <div><span id="bolder">{ props.intro.highlight4 }</span> { props.intro.part7 }</div>
        </>
    )
}

export default Intro
