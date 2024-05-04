/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Points from "../../Modules/Points"
import DiffTable from "./Module/DiffTable"

function Spirit(props) {

    return (
        < >
            <h1>Spirit: the Power of Fate</h1>
            <div>{ props.spirit.part1 }</div>
            <Points points={ props.spirit.points } />
            <div>{ props.spirit.part2 }</div>
            <h2>Requesting a Hint</h2>
            <div>{ props.spirit.hints.part }</div>
            <DiffTable info={ props.spirit.hints.table } title={ props.spirit.hints.title } />
            <br/>
            <div id="example">{ props.spirit.hints.example }</div>
            <h2>Catching a Lucky Break</h2>
            <div>{ props.spirit.break.part1 }</div><br/>
            <div id="example">{ props.spirit.break.example1 }</div>
            <div>{ props.spirit.break.part2 }</div><br/>
            <div id="example">{ props.spirit.break.example2 }</div>
            <DiffTable info={ props.spirit.break.table } title={ props.spirit.break.title } />
            <h2>Surviving Against the Odds</h2>
            <div>{ props.spirit.break.part1 }</div>
            <br/>
            <div id="example">{ props.spirit.break.example }</div>
            <br/>
            <div>{ props.spirit.break.part2 }</div>
            <br/>
            <div id="example">{ props.spirit.break.example2 }</div>
            <h2>Making a Last Ditch Effort</h2>
            <div>{ props.spirit.last.part1 }</div>
            <br/>
            <div><span id="bold">{ props.spirit.last.highlight }</span> { props.spirit.last.part2 }</div>
            <br/>
            <div id="example">{ props.spirit.last.example }</div>
        </>
    )
}

export default Spirit
