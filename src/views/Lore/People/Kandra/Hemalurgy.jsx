/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import BigPoints from "../../../Modules/BigPoint"

function Hemalurgy(props) {
  
    return (
      <>
      <h1>Kandra Hemalurgy</h1>
      <div>{props.info.part1}</div>
      <BigPoints points={props.info.blessing} />
      <div>{props.info.part2}</div>
      </>
    )
  }
  
  export default Hemalurgy
  