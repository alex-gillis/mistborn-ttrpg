/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Points from "../../../Modules/Points"

function StepOne(props) {

    return (
        < >
            <h2>Step 1. Declare Actions & Determine Action Dice</h2>
            <div>{ props.step.part1 }</div>
            <br/>
            <div id="example">{ props.step.example1 }</div>
            <br/>
            <div id="brandon">{ props.step.brandon }</div>
            <br/>
            <div>{ props.step.part2 }</div>
            <div id="bold">{ props.step.part3 }</div>
            <div>{ props.step.part4 }</div>
            <Points points={ props.step.points } />
            <h3>Active Defense</h3>
            <div>{ props.step.part5 }</div>
            <h3>Actions That Produce No Dice</h3>
            <div>{ props.step.part6 }</div>
            <h3>Example: What You`ve Learned So Far</h3>
            <div>{ props.step.part7 }</div>
            <br/>
            <div id="example">{ props.step.example2 }</div>
            <br/>
            <div>{ props.step.part8 }</div>
            <br/>
            <div id="example">{ props.step.example3 }</div>
        </>
    )
}

export default StepOne
