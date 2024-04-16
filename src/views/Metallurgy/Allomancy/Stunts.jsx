import Stunt from "./Stunt";
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Stunts(props) {
    let myStunts = props.metal.allomancy.stunts;
    
    if (myStunts.length  < 1 || myStunts == undefined) {
      return (
        <></>
      )
    } else {
      return (
        < >
          <h4>Allomantic { props.metal.name } Stunts</h4>
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
  