/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Rapid(props) {
  
    return (
      <>
        {props.info.map((myClass, index) => (
          <div key={index}>
            <h2>{myClass.one}</h2><div>{myClass.two}</div>
          </div>
        ))}
      </>
    )
  }
  
  export default Rapid
  