
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Basics(props) {
    return (
      < >
        <h1>Building Heroes</h1>
        <div>{props.build.heroes}</div>
        <h2>What Makes A Hero</h2>
        <div>{props.build.heroes}</div>
        <h3>Attributes</h3>
        <div>
            {props.build.attri1}
            <ul>
                {props.build.attributes?.map((myAttribute, index) => (
                    <li  key={index}>
                        <span id="bold">{myAttribute.name}</span> {myAttribute.description}
                    </li>
                ))}
            </ul>
            {props.build.attri2}
        </div>
        <h3>Standing</h3>
        <div>
            {props.build.stand1}
            <ul>
                {props.build.standing?.map((myStanding, index) => (
                    <li  key={index}>
                        <span id="bold">{myStanding.name}</span> {myStanding.description}
                    </li>
                ))}
            </ul>
            {props.build.stand2}
        </div>
        <br/> 
        <div id="brandon">
            <h4>From Brandon</h4>
            {props.build.brandon}
        </div>
        <h3>Powers</h3>
        <div>
            {props.build.power1}
            <ul>
                {props.build.powers?.map((myPower, index) => (
                    <li  key={index}>
                        <span id="bold">{myPower.name}</span> {myPower.description}
                    </li>
                ))}
            </ul>
            {props.build.power2}
        </div>
        <h3>Traits</h3>
        <div>
            {props.build.trait1}
            <ul>
                {props.build.traits?.map((myTrait, index) => (
                    <li  key={index}>
                        {myTrait.trait}
                    </li>
                ))}
            </ul>
            {props.build.examples?.map((myExample, index) => (
                <div>
                <div>{myExample.text}</div> 
                    <ul>
                        <li  key={index}>
                            <div>{myExample.example}</div>
                        </li>
                    </ul>
                </div>
            ))}
            {props.build.trait2}
            {props.build.trait1}
            <ul>
                {props.build.create?.map((myTrait, index) => (
                    <li  key={index}>
                        {myTrait.trait}
                    </li>
                ))}
            </ul>
        </div>
        <h3>Resilience</h3>
        <div>
            {props.build.resil1}
            <ul>
                {props.build.resilience?.map((myResilience, index) => (
                    <li  key={index}>
                        <span id="bold">{myResilience.name}</span> {myResilience.description}
                    </li>
                ))}
            </ul>
            {props.build.resil2}
        </div>
        <h3>Props</h3>
        <div>
            {props.build.prop1}
            <ul>
                {props.build.props.build?.map((myProps, index) => (
                    <li  key={index}>
                        <span id="bold">{myProps.name}</span> {myProps.description}
                    </li>
                ))}
            </ul>
            {props.build.prop2}
        </div>
        <h3>Destiny and Tragedy</h3>
        <div>{props.build.destinedTragedy}</div>
        <br/> 
        <div id="brandon">
            <h4>From Brandon</h4>
            {props.build.brandon2}
        </div>
        <h3>Secrets</h3>
        <div>{props.build.secrets}</div>
      </>
    )
  }
  
  export default Basics
  