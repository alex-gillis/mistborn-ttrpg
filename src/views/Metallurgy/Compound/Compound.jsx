/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Stunts from "./Stunts"

function Compound(props) {
    
    return (
      < >
        <h4>Compounding</h4>
        { props.info.compounded }
        <div>
          <Stunts metal={props.metal} />
        </div>
      </>
    )
  }
  
  export default Compound
  