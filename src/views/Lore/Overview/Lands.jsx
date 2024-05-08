/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Section from "./Module/Sectional"

function Lands(props) {
  
    return (
      <>
      <h1>The Land</h1>
      <div>{props.lore.intro}</div>
      <Section info={props.lore.basin} />
      <Section info={props.lore.roughs} />
      <Section info={props.lore.wilds} />
      </>
    )
  }
  
  export default Lands
  