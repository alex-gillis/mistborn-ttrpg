/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function BigPoints(props) {
  
    return (
      <>
        <ul style={{marginRight:"25px"}}>
            {props.points?.map((myObject, index) => (
                <li key={index}>
                    <span id="bold">{myObject.name}</span> {myObject.desc}
                </li>
            ))}
        </ul>
      </>
    )
  }
  
  export default BigPoints
  