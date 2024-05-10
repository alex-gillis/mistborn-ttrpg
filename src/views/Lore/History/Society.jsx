/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Society(props) {
  
    return (
      <>
      <h1>History & Society</h1>
      <div>{props.info.part1}</div>
      <br/>
      <div id="bold">{props.info.highlight}</div>
      </>
    )
  }
  
  export default Society
  