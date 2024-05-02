import Attack from "./Attacks";
import Burn from "./Burn";
import Flare from "./Flare";
import Gunplay from './Gunplay';
import Savant from "./Savants";
import Stunts from "./Stunts";
import SpecialRule from "./SpecialRule";
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Allomancy(props) {

    let myRules = props.metal.allomancy.specialRules;
    let myAttack = props.metal.allomancy.attack;
    
    return (
      < >
        <h2>Allomancy</h2>
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
        <br/>
        <Burn metal={props.metal} />
        <Flare metal={props.metal} />
        <Savant metal={props.metal} />
        <Stunts metal={props.metal} />
        <Gunplay metal={props.metal} />
        <br/>
      </>
    )
  }
  
  export default Allomancy
  