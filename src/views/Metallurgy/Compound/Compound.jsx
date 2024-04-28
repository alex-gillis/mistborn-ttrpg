/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Stunts from "./Stunts"

function Compound(props) {
    
    return (
      < >
        <h2>Compounding</h2>
        { props.info.compounded }
        <div>
          <Stunts metal={props.metal} />
        </div>
        <br/>
      </>
    )
  }
  
  export default Compound
  