import SpecialRule from "./SpecialRule";
import Attack from "./Attacks";
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Allomancy(props) {

    let myRules = props.metal.allomancy.specialRules;
    console.log(myRules);
    let myAttack = props.metal.allomancy.attack;

    return (
      < >
        <h4>Allomancy</h4>
        { props.metal.allomancy.lore }
        <br/>
        <h4>Rules</h4>
        { props.metal.allomancy.rules }
        <Attack attack={ myAttack } />
        {myRules?.map(myRule => (
            <SpecialRule rule={myRule} />
        ))}
        <span id="bolder">Burn Rate of { props.metal.name }:</span> { props.metal.allomancy.burnRate }
        <br/>
        <span id="bolder">Effect of Flaring { props.metal.name }:</span> { props.metal.allomancy.flaredEffect }
        <br/>
        <span id="bolder">{ props.metal.name } Savants:</span> { props.metal.allomancy.savants }
      </>
    )
  }
  
  export default Allomancy
  