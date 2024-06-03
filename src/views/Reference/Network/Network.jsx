/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Network(props) {
    return (
      <>
      {props.network ? 
        <div>
          <h2 className="notButter">{props.network.name}</h2>
          <h3 className="notButter">Timeframe: <span id="timid">{props.network.timeframe}</span></h3>
          <h3 className="notButter">Network Trait: <span id="timid">{props.network.trait}</span></h3>
          <h3 className="notButter">Rules: </h3>
          <div>
              {props.network.rules}
          </div>
          <h3 className="notButter">Benefits:</h3>
          <div>
              {props.network.benefit}
          </div>

        </div>
        :
        <div>
          <h3 className="marginal">You have no selected Network</h3>
        </div>
      }
      </>
    );
}
  
export default Network;
