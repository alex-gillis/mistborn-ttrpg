/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Culture(props) {
  
    return (
      <>
      <h1>Malwish Culture</h1>
      <div>{props.info.main}</div>
      <div>
        <br/>
        <img style={{maxWidth:"600px", maxHeight:"500px"}} id="centerIMG" className="necessary" src={props.info.image} /> 
      </div>
      <h2>Malwish Masks</h2>
      <div>{props.info.masks}</div>
      <h2>Malwish Religion</h2>
      <div>{props.info.religion}</div>
      </>
    )
  }
  
  export default Culture
  