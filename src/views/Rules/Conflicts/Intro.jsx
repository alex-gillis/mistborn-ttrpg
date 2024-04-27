/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Points from "../../Modules/Points"

function Intro(props) {

    return (
        < >
            <h1>Conflicts</h1>
            <div>{ props.intro.part1 }</div>
            <Points points={props.intro.points} />
            <div>{ props.intro.part2 }</div>
            <h2>Conflicts in Brief</h2>
            <ol>
                {props.intro.brief.list?.map((myObject, index) => (
                    <li key={index}>
                        {myObject.step}
                        <ul>
                            {myObject.substeps?.map((mySub, subIndex) => (
                                <li key={subIndex}>
                                    {mySub.step}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>

        </>
    )
}

export default Intro
