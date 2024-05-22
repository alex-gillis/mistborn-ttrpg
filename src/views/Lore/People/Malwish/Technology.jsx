/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Technology(props) {
  
    return (
      <>
      <h1>Malwish Technology</h1>
      <div>{props.info.main}</div>
      <h2>Airships</h2>
      <div>{props.info.airships}</div>
      <h2>Primer Box (Allomantic Grenade)</h2>
      <div>{props.info.primer}</div>
      <h2>Universal Metalminds</h2>
      <div id="sampleDisplay">
            <div id="centerIMG">
                <div id="steelInfo" style={{width:"500px",height:"500px"}}>
                    <img className="heroSample" id="rightSample" src={props.info.image} />
                    <br/>
                </div>
            </div>
            <div>
                <div style={{textAlign:"justify"}}>{props.info.metalminds}</div>
            </div>
        </div>
      </>
    )
  }
  
  export default Technology
  