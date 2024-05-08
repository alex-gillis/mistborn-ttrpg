/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import BigPoints from "../../Modules/BigPoint"
import Points from "../../Modules/Points"

function Lingo(props) {
  
    return (
      <>
      <div>
        <h1>Alloy of Law Sayings</h1>
        <div>{props.lore.part1}</div>
        <BigPoints points={props.lore.points} />
        <div>{props.lore.part2}</div>
        <Points points={props.lore.points2} />
      </div>
      </>
    )
  }
  
  export default Lingo
  