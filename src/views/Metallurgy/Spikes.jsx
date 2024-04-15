/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Spikes(props) {
    if (props.metal.hemalurgy.spikes == "") {
        return (
            <></>
        )
    } else { 
        return (
            < >
                <span id="bolder">{ props.metal.name } Spikes:</span> { props.metal.hemalurgy.spikes }
            </>
        )
    }
  }
  
  export default Spikes