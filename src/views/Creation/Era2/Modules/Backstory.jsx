/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

function Backstory(props) {
    return (
        < >
        <div>
            <h2 id="italicked">Create a Backstory (Optional)</h2>
            <div>{props.backstory.part1}</div>
            <ul>
                {props.backstory.points?.map((myObject, index) => (
                    <li key={index}>
                        {myObject.point}
                    </li>
                ))}
            </ul>
            <div>{props.backstory.part2}</div>
        </div>
        </>
    )
}

export default Backstory;