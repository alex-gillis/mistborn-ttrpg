/* eslint-disable react/prop-types */
function Stunt(props) {

    return (
      < >
        <li><span id="bolder">{props.stunt.name}:</span> {props.stunt.description}</li>
        <br/>
      </>
    )
  }
  
  export default Stunt
