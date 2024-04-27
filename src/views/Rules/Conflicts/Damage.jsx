/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Points from "../../Modules/Points"
import Repartee from "../../Modules/Repartee"

function Damage(props) {

    return (
        < >
            <h1>Damage and Defeat</h1>
            <div>{ props.damage.part1 }</div>
            <div id="example">{ props.damage.example1 }</div>
            <div>{ props.damage.part2 }</div>
            <div id="brandon">
                <h4>Another Way to Check for Wounds</h4>
                <div>{ props.damage.another.part1 }</div>
                <Points points={ props.damage.another.points } />
                <div>{ props.damage.another.part2 }</div>
                <div id="example">{ props.damage.another.example }</div>
            </div>
            <h2>Wounded (1/4 and 1/2 Resilience)</h2>
            <div>{ props.wounded.part1 }</div>
            <div id="example">{ props.wounded.example1 }</div>
            <div>{ props.wounded.part2 }</div>
            <div id="example">{ props.wounded.example2 }</div>
            <div>{ props.wounded.part3 }</div>
            <h2>Defeated (0 Resilience)</h2>
            <div>{ props.defeat.part1 }</div>
            <Points points={ props.defeat.points } />
            <Repartee info={props.defeat.zero} />
            <div id="brandon">
                <h4>Indulging in Defeat</h4>
                { props.defeat.brandon }
            </div>

        </>
    )
}

export default Damage
