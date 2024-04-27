/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import BigPoints from "../../../Modules/BigPoint"
import Points from "../../../Modules/Points"

function StepTwo(props) {

    return (
        < >
            <h2>Step 2. Resolve Actions</h2>
            <div>{ props.step.part1 }</div>
            <br/>
            <div id="example">{ props.step.example1 }</div>
            <br/>
            <div>{ props.step.part2 }</div>
            <h3>1. Take the Declared Action</h3>
            <div>{ props.step.part3 }</div>
            <div id="example">{ props.step.example2 }</div>
            <h3>2. Declare a New Action</h3>
            <div>{ props.step.part4 }</div>
            <div id="example">{ props.step.example3 }</div>
            <h3>3. Choose Not To Act</h3>
            <div>{ props.step.part5 }</div>
            <div id="example">{ props.step.example4 }</div>
            <h3>Challenges, Contests, and Attacks</h3>
            <div>{ props.step.part6 }</div>
            <div id="example">{ props.step.example5 }</div>
            <div>{ props.step.part7 }</div>
            <BigPoints points={ props.step.points } />
            <div id="brandon">
                <h4>Gaining and Spending Dice</h4>
                <div>{ props.step.gain.part1 }</div>
                <Points points={ props.step.gain.points } />
                <div>{ props.step.gain.part2 }</div>
            </div>
            <br/>
            <div>{ props.step.part8 }</div>
            <br/>
            <div id="example">{ props.step.example6 }</div>
            <br/>
            <div>{ props.step.part9 }</div>
        </>
    )
}

export default StepTwo
