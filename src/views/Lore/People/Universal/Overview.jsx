/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Overview(props) {
  
    return (
      <>
      <h1>{props.info.title}</h1>
      <div>{props.info.intro}</div>
      </>
    )
  }
  
  export default Overview
  