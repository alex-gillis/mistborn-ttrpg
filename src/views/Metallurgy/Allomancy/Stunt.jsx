/* eslint-disable react/prop-types */
function Stunt(props) {

    return (
      < >
        <span id="bolder">{props.stunt.name}:</span> {props.stunt.description}
        <br/>
      </>
    )
  }
  
  export default Stunt
