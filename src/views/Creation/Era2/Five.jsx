/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Names from "./Modules/Names";
import Resilience from "./Modules/Resilience";
import Props from "./Modules/Props";
import Backstory from "./Modules/Backstory";

function Five(props) {
    return (
        < >
        <div>
            <h1>Step 5: Fill in the Details</h1>
            <div>{props.step.basics}</div>
            <h2 id="italicked">Choose your race</h2>
            <div>{props.step.part1}</div>
            <ul>
                {props.step.choices?.map((myObject, index) => (
                    <li key={index}>
                    {myObject.option}:
                    </li>
                ))}
            </ul>
            <div>{props.step.part2}</div>
            <div id="italicked">{props.step.example}</div>
            <Names names={props.step.names} />
            <Resilience resilience={props.step.resilience} />
            <Props prop={props.step.props} propped={props.propped} />
            <Backstory backstory={props.step.backstory} />

        </div>
        </>
    )
}

export default Five;