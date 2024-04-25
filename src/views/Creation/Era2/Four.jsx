/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Parts from "./Modules/Parts";

function Four(props) {
    return (
      <>
        <h1>Step 4: Define your Strengths</h1>
        <div>{props.step.basics}</div>
        <div>

          <h2 id="italicked">Powers</h2>
          <div>{props.step.powers.basics}</div>
          <br/>
          <div id="brandon">
              <h4>A Note on Stunts</h4>
              {props.step.powers.note}
          </div>
          <br/>
          <div id="bold">Strong</div>
          <ul>
            {props.step.powers.strong?.map((myObject, index) => (
                <li key={index}>
                  <span id="italicked">{myObject.name}:</span> {myObject.desc}
                </li>
            ))}
          </ul>
          <br/>
          <div id="bold">Average</div>
          <ul>
            {props.step.powers.average?.map((myObject, index) => (
                <li key={index}>
                  <span id="italicked">{myObject.name}:</span> {myObject.desc}
                </li>
            ))}
          </ul>
          <br/>
          <div id="bold">Weak</div>
          <ul>
            <li>{props.step.powers.weak}</li>
          </ul>
          <br/>
          <div id="italicked">{props.step.powers.example}</div>

        </div>
        <div>
          
          <Parts title={"Attributes"} part={props.step.attributes} />

        </div>
        <div>
          
          <Parts title={"Standings"} part={props.step.standings} />

        </div>
      </>
    );
}
  
export default Four;
