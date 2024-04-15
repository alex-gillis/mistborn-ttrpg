/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Tapping from "./Tapping";

function Feruchemy(props) {

    let myTapping = props.metal.feruchemy.tapping;
    
    return (
      < >
        <h4>Feruchemy</h4>
        { props.metal.feruchemy.lore }
        <h4>Rules</h4>
        <span id="bolder">Storing charges in a { props.metal.name }mind:</span> { props.metal.feruchemy.store }
        <br/>
        <span id="bolder">Tapping charges from a { props.metal.name }mind:</span> { props.metal.feruchemy.tap }
        <br/>
        <span id="bolder">Tapping 10 or more charges from a { props.metal.name }mind:</span> { props.metal.feruchemy.tapped }
        <table>
            <tr>
                <th>Charges Tapped</th>
                <th>{ props.metal.feruchemy.example }</th>
            </tr>
            {myTapping?.map(myTap => (
                <Tapping tapping={myTap} />
            ))}
        </table>
      </>
    )
  }
  
  export default Feruchemy
  