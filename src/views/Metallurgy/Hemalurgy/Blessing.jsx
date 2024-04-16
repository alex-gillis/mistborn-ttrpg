/* eslint-disable react/prop-types */
function Blessing(props) {
    if (props.bless == "") {
        return (
            <></>
        )
    } else {  
        return (
            < >
            <span id="bolder">Blessing:</span> {props.bless}
            <br/>
            </>
        )
    }
  }
  
  export default Blessing
  