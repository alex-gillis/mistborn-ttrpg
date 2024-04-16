/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Flare(props) {
    if (props.metal.allomancy.flaredEffect === undefined || props.metal.allomancy.flaredEffect === "") {
        < ></>
    } else {
        return (
            < >
              <span id="bolder">Effect of Flaring { props.metal.name }:</span> { props.metal.allomancy.flaredEffect }
              <br/>
            </>
          )
    }
  }
  
  export default Flare
  