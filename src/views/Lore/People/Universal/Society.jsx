/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Society(props) {
  
    return (
      <>
      <h1>{props.info.race} Society</h1>
      <div>{props.info.ownSociety}</div>
      </>
    )
  }
  
  export default Society
  