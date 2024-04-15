import Allomancy from "./Allomancy"
import Feruchemy from "./Feruchemy"
import Hemalurgy from "./Hemalurgy"

/* eslint-disable react/prop-types */
function Metal(props) {

    return (
      < >
        <h2>{ props.metal.name }</h2>
        <h4>{ props.metal.category } / { props.metal.firstQuality } / { props.metal.secondQuality }</h4>
        { props.metal.rarity }
        <br/>
        <Allomancy metal={ props.metal }/>
        <br/>
        <Feruchemy metal={ props.metal }/>
        <br/>
        <Hemalurgy metal={ props.metal }/>
      </>
    )
  }
  
  export default Metal
  