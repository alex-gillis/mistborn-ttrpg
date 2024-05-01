/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Tactics(props) {

    return (
        < >
            <h1>Tactics in a Social Conflict</h1>
            <div>{ props.tactics.part1 }</div>
            <h2>Character Assassination</h2>
            <div>
                { props.tactics.assassination.part1 } <span id="bolder">{ props.tactics.assassination.highlight }</span> { props.tactics.assassination.part2 }
            </div>
            <h2>Dirty Campaigning</h2>
            <div>
                { props.tactics.campaign.part1 } <span id="bolder">{ props.tactics.campaign.highlight }</span> { props.tactics.campaign.part2 }
            </div>
            <h2>Honor Duels</h2>
            <div>
                { props.tactics.duels.part1 } <span id="bolder">{ props.tactics.duels.highlight }</span> { props.tactics.duels.part2 }
            </div>
            <br/>
            <div id="brandon">
                <h4>From Brandon</h4>
                { props.tactics.brandon }
            </div>
        </>
    )
}

export default Tactics
