
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Maker from "./Creator/Maker"
// import Character from "./Sample/Character"
function Creator(props) {
    return (
      < >
        <h1>Charactermancer</h1>
        <div id="centerSheet" style={{marginLeft:"25px", marginBottom:"20px"}}>
          <div className="sheet">
            <Maker metals={props.metals}/>
          </div>
          <br/>
          <div className="sheet">
            {/* <Character rogue={} /> */}
          </div>
        </div>
      </>
    )
  }
  
  export default Creator
  