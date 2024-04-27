/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import StepOne from "./Steps/StepOne"
import StepTwo from "./Steps/StepTwo"

function Round(props) {

    return (
        < >
            <h1>Conflict Round Breakdown</h1>
            <div>{ props.round.intro }</div>
            <StepOne step={props.round.step1} />
            <StepTwo step={props.round.step2} />
        </>
    )
}

export default Round
