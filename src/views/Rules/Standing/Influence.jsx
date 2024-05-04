/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Points from "../../Modules/Points"
import DiffTable from "./Module/DiffTable"

function Influence(props) {

    return (
        < >
            <h1>Influence: the Power of Connections</h1>
            <div>{ props.influence.part1 }</div>
            <Points points={ props.influence.points } />
            <div>{ props.influence.part2 }</div>
            <h2>Lies, Damned Lies, and Politics</h2>
            <div>{ props.influence.lies.part }</div>
            <br/>
            <DiffTable info={ props.influence.lies.table } title={ props.influence.lies.title } />
            <br/>
            <div id="example">{ props.influence.lies.example }</div>
            <h2>Calling in Favours</h2>
            <div>{ props.influence.favors.part }</div>
            <br/>
            <DiffTable info={ props.influence.favors.table } title={ props.influence.favors.title } />
            <br/>
            <div id="example">{ props.influence.favors.example }</div>
            <h2>Rallying the People</h2>
            <div>{ props.influence.rallying.part }</div>
            <br/>
            <DiffTable info={ props.influence.rallying.table } title={ props.influence.rallying.title } />
            <br/>
            <div id="example">{ props.influence.rallying.example }</div>
            <h2>Changing Laws</h2>
            <div>{ props.influence.laws.part1 }</div>
            <div><span id="bold">{ props.influence.laws.highlight }</span>{ props.influence.laws.part2 }</div>
            <br/>
            <DiffTable info={ props.influence.laws.table } title={ props.influence.laws.title } />
            <br/>
            <div id="example">{ props.influence.laws.example }</div>
            <br/>
            <div id="brandon">
                <h4>From Brandon</h4>
                { props.influence.laws.brandon }
            </div>
        </>
    )
}

export default Influence
