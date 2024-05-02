/* eslint-disable react/prop-types */
function SpecialRule(props) {

    return (
      < >
        <span id="bolder">{props.rule.name}:</span> {props.rule.rule}
        <br/>
      </>
    )
  }
  
  export default SpecialRule
  