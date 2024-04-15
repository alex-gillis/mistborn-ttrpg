import Blessing from "./Blessing"
import Spikes from "./Spikes"

/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Hemalurgy(props) {
    return (
      < >
        <h4>Hemalurgy</h4>
        { props.metal.hemalurgy.lore }
        <br/>
        <Spikes spikes={ props.metal.hemalurgy.spikes } />
        <br/>
        <Blessing bless={ props.metal.hemalurgy.blessing } />
      </>
    )
  }
  
  export default Hemalurgy