/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Tactics(props) {

    return (
        < >
            <h1>Tactics in Combat</h1>
            <div>{ props.tactics.part1 }</div>
            <h2>Called Shots</h2>
            <div>
                { props.tactics.called.part1 } 
                <br/><br/>
                <span id="bolder">{ props.tactics.called.highlight }</span> { props.tactics.called.part2 }
            </div>
            <h2>Disarming an Opponent</h2>
            <div>
                { props.tactics.disarming.part1 } <span id="bolder">{ props.tactics.disarming.highlight }</span> { props.tactics.disarming.part2 }
            </div>
            <h2>Grappling an Opponent</h2>
            <div>
                { props.tactics.grapple.part1 } <span id="bolder">{ props.tactics.grapple.highlight }</span> { props.tactics.grapple.part2 }
            </div>
        </>
    )
}

export default Tactics
