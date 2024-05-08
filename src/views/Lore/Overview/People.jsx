/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Rapid from "./Module/Rapid"
import Section from "./Module/Sectional"

function People(props) {
  
    return (
      <>
      <h1>The People</h1>
      <div>{props.lore.intro}</div>
      <Section info={props.lore.history} />
      <Rapid info={props.lore.classes} />
      <h2>Terrisfolk</h2>
      <div>{props.lore.terris}</div>
      <h2>Kandra</h2>
      <div>{props.lore.kandra}</div>
      <h2>Koloss</h2>
      <div>{props.lore.koloss}</div>
      </>
    )
  }
  
  export default People
  