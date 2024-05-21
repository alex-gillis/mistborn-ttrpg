/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Appearance(props) {
  
    return (
      <>
      <h1>Koloss Appearance</h1>
      <div>{props.info.appearance}</div>
      <div>
        <br/>
        <img style={{width:"500px"}} id="centerIMG" className="necessary" src={"./assets/icons/Koloss-Blooded.png"} /> 
      </div>
      </>
    )
  }
  
  export default Appearance
  