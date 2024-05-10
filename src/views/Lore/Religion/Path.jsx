/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import BigPoints from "../../Modules/BigPoint"

function Path(props) {
  
    return (
      <>
      <h1>The Path</h1>
      <div>{props.info.open}</div>
      <div>
        <h2>Beliefs</h2>
        {props.info.belief}
      </div>
      <div>
        <h2>Organization</h2>
        {props.info.organization}
      </div>
      <div>
        <h2>Symbols</h2>
        {props.info.symbol}
      </div>
      <div>
        <h2>Figues of Note</h2>
        <BigPoints points= {props.info.figures} />
      </div>
      </>
    )
  }
  
  export default Path
  