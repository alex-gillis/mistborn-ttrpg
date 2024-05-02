import Stunt from "./Stunt";
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Stunts(props) {
    let myStunts = props.metal.compounding.stunts;
    
    if (myStunts.length  < 1 || myStunts == undefined) {
      return (
        <>
            <div>
              <br/>
                There are no extreme stunts to perform with compounding {props.metal.name}
            </div>
        </>
      )
    } else if ( props.metal.name == "Atium") {
      return (
        <>
            <div>
              <br/>
              There are no Stunts for Atium Compounding, but the multiplication of your charges alone lets you defy aging. Though Atium has been dubbed the Lost Metal and is believed lost in the modern day, a Twinborn lucky enough to discover a large enough supply of Atium to create metalminds could live for centuries without appearing to age a single day...just as the Lord Ruler did.
            </div>
        </>
      )
    } else {
      return (
        < >
          <h4>Compounding { props.metal.name } Stunts</h4>
          <ul>
            {myStunts?.map((myStunt, index) => (
                <li key={index}>
                  <Stunt stunt={myStunt} />
                </li>
            ))}
          </ul>
        </>
      )
    }
  }
  
  export default Stunts
  