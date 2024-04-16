import SpecialRule from "./SpecialRule";
import Attack from "./Attacks";
import Stunt from "./Stunt";
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Allomancy(props) {

    let myRules = props.metal.allomancy.specialRules;
    let myAttack = props.metal.allomancy.attack;
    let myStunts = props.metal.allomancy.stunts;

    return (
      < >
        <h4>Allomancy</h4>
        { props.metal.allomancy.lore }
        <br/>
        <h4>Rules</h4>
        { props.metal.allomancy.rules }
        <Attack attack={ myAttack } />
        {myRules?.map((myRule, index )=> (
            <div key={index}>
              <SpecialRule rule={myRule} />
            </div>
        ))}
        <span id="bolder">Burn Rate of { props.metal.name }:</span> { props.metal.allomancy.burnRate }
        <br/>
        <span id="bolder">Effect of Flaring { props.metal.name }:</span> { props.metal.allomancy.flaredEffect }
        <br/>
        <span id="bolder">{ props.metal.name } Savants:</span> { props.metal.allomancy.savants }
        <h4>Allomantic { props.metal.name } Stunts</h4>
        {myStunts?.map((myStunt, index) => (
            <div key={index}>
              <Stunt stunt={myStunt} />
            </div>
        ))}
      </>
    )
  }
  
  export default Allomancy
  