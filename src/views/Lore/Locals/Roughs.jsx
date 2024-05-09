/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Roughs(props) {
  
    return (
      <>
      <h1>The Roughs</h1>
      <div>{props.info.intro}</div>
      <h2>Economy</h2>
      <div>{props.info.economy}</div>
      </>
    )
  }
  
  export default Roughs
  