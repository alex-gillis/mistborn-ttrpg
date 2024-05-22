/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Appearance(props) {
  
    return (
      <>
      <h1>{props.info.race} Appearance</h1>
      <div>{props.info.appearance}</div>
      <div>
        <br/>
        <img style={{maxWidth:"600px", maxHeight:"500px"}} id="centerIMG" className="necessary" src={props.info.image} /> 
      </div>
      </>
    )
  }
  
  export default Appearance
  