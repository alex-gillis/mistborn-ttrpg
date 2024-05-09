/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Other(props) {
  
    return (
      <>
      <h1>Other Cities</h1>
      <div>{props.info.intro}</div>
        <div>
            <br/>
            <img id="centerIMG" src={props.info.image} /> 
        </div>
      <div>
        {props.info.cities.map((section, index) => (
            <div key={index}>
                <h2>{section.name}</h2>
                {section.desc}
            </div>
        ))}
      </div>
      </>
    )
  }
  
  export default Other
  