import Blessing from "./Blessing"

/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Hemalurgy(props) {
    return (
      < >
        <h4>Hemalurgy</h4>
        { props.metal.hemalurgy.lore }
        <br/>
        <span id="bolder">{ props.metal.name } Spikes:</span> { props.metal.hemalurgy.spikes }
        <br/>
        <Blessing bless={ props.metal.hemalurgy.blessing } />
      </>
    )
  }
  
  export default Hemalurgy