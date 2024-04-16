/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Burn(props) {
    if (props.metal.allomancy.burnRate === undefined || props.metal.allomancy.burnRate === "") {
        return (
          <></>
        )
    } else {
        return (
            < >
                <span id="bolder">Burn Rate of { props.metal.name }:</span> { props.metal.allomancy.burnRate }
                <br/>
            </>
        )
    }
  }
  
  export default Burn
  