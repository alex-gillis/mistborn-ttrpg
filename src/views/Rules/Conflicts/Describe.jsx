/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Describe(props) {

    return (
        < >
            <h1>Describing Conflicts</h1>
            <div>{ props.describe.part1 }</div>
            <br/>
            <div id="brandon">{ props.describe.brandon }</div>
            <br/>
            <div>{ props.describe.part2 }</div>
            <br/>
            <div id="brandon">{ props.describe.brandon2 }</div>
            <br/>
            <div>{ props.describe.part3 }</div>
            <br/>
            <div id="brandon">{ props.describe.brandon3 }</div>
            <br/>
            <div>{ props.describe.part4 }</div>
            <br/>
            <div id="brandon">
                <h4>From Brandon</h4>
                { props.describe.brandon4 }
            </div>
        </>
    )
}

export default Describe
