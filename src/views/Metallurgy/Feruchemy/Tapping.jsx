/* eslint-disable react/prop-types */
function Tapping(props) {

    return (
      < >
        <td><span id="bolder">{props.tapping.charges} </span></td>
        <td>{props.tapping.examples}</td>
      </>
    )
  }
  
  export default Tapping
  