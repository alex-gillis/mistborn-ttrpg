/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Savant(props) {
    if (props.metal.allomancy.savants === undefined || props.metal.allomancy.savants === "") {
        return (
          <></>
        )
    } else {
        return (
            < >
                <span id="bolder">{ props.metal.name } Savants:</span> { props.metal.allomancy.savants }
            </>
        )
    }
  }
  
  export default Savant
  