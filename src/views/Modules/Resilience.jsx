/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

function Resilience(props) {
    return (
        < >
        <div>
            <h2 id="italicked">Set your resiliences</h2>
            <div>{props.resilience.part1}</div>
            <ul>
                {props.resilience.resiliences?.map((myObject, index) => (
                    <li key={index}>
                        <span id="bold">{myObject.name}:</span> {myObject.desc}
                    </li>
                ))}
            </ul>
            <div>{props.resilience.part2}</div>
            <ul>
                {props.resilience.total?.map((myObject, index) => (
                    <li key={index}>
                        <span id="bold">{myObject.name}:</span> {myObject.desc}
                    </li>
                ))}
            </ul>
            <div>{props.resilience.part3}</div>
        </div>
        </>
    )
}

export default Resilience;