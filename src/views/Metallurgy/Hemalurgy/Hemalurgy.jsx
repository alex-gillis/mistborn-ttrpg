import Blessing from "./Blessing"
import Spikes from "./Spikes"

/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Hemalurgy(props) {
    return (
      < >
        <h2>Hemalurgy</h2>
        { props.metal.hemalurgy.lore }
        <br/>
        <Spikes metal={ props.metal } />
        <br/>
        <Blessing bless={ props.metal.hemalurgy.blessing } />
        <br/>
      </>
    )
  }
  
  export default Hemalurgy