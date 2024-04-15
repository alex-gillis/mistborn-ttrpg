/* eslint-disable react/prop-types */
function Tapping(props) {

    return (
      < >
        <tr>
            <td><span id="bolder">{props.tapping.charges} </span></td>
            <td>{props.tapping.examples}</td>
        </tr>
      </>
    )
  }
  
  export default Tapping
  