/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Tapping from "./Tapping";
import Gunplay from "./Gunplay";
import Charges from "./Charges";

function Feruchemy(props) {

    let myTapping = props.metal.feruchemy.tapping;
    
    return (
      < >
        <Charges metal={props.metal} />
        <table>
            <thead> 
              <tr>
                  <th>{ props.metal.feruchemy.chargeTap }</th>
                  <th>{ props.metal.feruchemy.example }</th>
              </tr>
            </thead>
            <tbody>
              {myTapping?.map((myTap, index) => (
                <tr key={index} className={index % 2 === 0 ? 'evenRow' : 'oddRow'}>
                  <Tapping tapping={myTap} />
                </tr>
              ))}
            </tbody>
        </table>
        <Gunplay metal={props.metal} />
        <br/>
      </>
    )
  }
  
  export default Feruchemy
  