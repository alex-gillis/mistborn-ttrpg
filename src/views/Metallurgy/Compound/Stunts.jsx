import Stunt from "./Stunt";
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Stunts(props) {
    let myStunts = props.metal.compounding.stunts;
    
    if (myStunts.length  < 1 || myStunts == undefined) {
      return (
        <>
            <div>
                There are no extreme stunts to perform with compounting {props.metal.name}
            </div>
        </>
      )
    } else {
      return (
        < >
          <h4>Compounding { props.metal.name } Stunts</h4>
          {myStunts?.map((myStunt, index) => (
              <div key={index}>
                <Stunt stunt={myStunt} />
              </div>
          ))}
        </>
      )
    }
  }
  
  export default Stunts
  