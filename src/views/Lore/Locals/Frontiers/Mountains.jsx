/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Mountains(props) {
  
    return (
      <>
      <h1>The Mountains</h1>
      <div>{props.info.open}</div>
      <div>
        {props.info.locals.map((section, index) => (
            <div key={index}>
                <h2>{section.name}</h2> 
                {section.desc}
            </div>
        ))}
      </div>
      </>
    )
  }
  
  export default Mountains
  