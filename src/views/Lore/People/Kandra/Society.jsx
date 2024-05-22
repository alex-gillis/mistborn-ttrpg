/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function KandraSociety(props) {
  
    return (
      <>
      <h1>{props.info.race} Society</h1>
      <div>{props.info.main}</div>
      <h2>Pathism</h2>
      <div>{props.info.pathism}</div>
      <h2>Kandra Homeland</h2>
      <div>{props.info.homeland}</div>
      <h2>Tensoon`s role</h2>
      <div>{props.info.tensoon}</div>
      </>
    )
  }
  
  export default KandraSociety
  