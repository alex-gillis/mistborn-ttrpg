/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Points from "../../Modules/Points"
import DiffTable from "./Module/DiffTable"

function Resources(props) {

    return (
        < >
            <h1>Resources: the Power of Privilege</h1>
            <div>{ props.resources.part1 }</div>
            <Points points={ props.resources.points } />
            <div>{ props.resources.part2 }</div>
            <h2>Props</h2>
            <div>{ props.resources.props.part }</div>
            <h2>Bribes & Incentives</h2>
            <div>{ props.resources.bribes.part }</div>
            <br/>
            <div id="example">{ props.resources.bribes.example }</div>
            <br/>
            <DiffTable info={ props.resources.bribes.table } title={ props.resources.bribes.title } />
            <h2>Equipment</h2>
            <div>{ props.resources.equipment.part }</div>
            <br/>
            <h3>All props can be found in the Props section of References</h3>
            <br/>
            <div id="brandon">
                <h4>Where`s the Money?</h4>
                { props.resources.equipment.brandon }
            </div>
            <br/>
            <div id="example">{ props.resources.equipment.example }</div>
            <h2>Securing Services</h2>
            <div>{ props.resources.services.part1 }</div>
            <br/>
            <div id="brandon">
                <h4>From Brandon</h4>
                { props.resources.services.brandon }
            </div>
            <br/>
            <div>{ props.resources.services.part2 }</div>
            <br/>
            <div id="example">{ props.resources.services.example }</div>
            <br/>
            <DiffTable info={ props.resources.services.table } title={ props.resources.services.title } />
            <h2>Assembling Forces</h2>
            <div>{ props.resources.forces.part1 }</div>
            <br/>
            <div><span id="bolder">{ props.resources.forces.highlight }</span> { props.resources.forces.part2 }</div>
            <br/>
            <DiffTable info={ props.resources.forces.table } title={ props.resources.forces.title } />
            <br/>
            <div id="example">{ props.resources.forces.example }</div>
        </>
    )
}

export default Resources
