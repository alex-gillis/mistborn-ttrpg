/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Table from "../../Modules/Table"
import Points from "../../Modules/BigPoint"

function Stunt(props) {

    return (
      <>
      {props.stunt ? 
        <div>
          <h2 className="notButter">{props.stunt.name}</h2>
          <h3 className="notButter">Type of Stunt: <span id="timid">{props.stunt.type}</span></h3>
          <h3 className="notButter">Stunt Requires: <span id="timid">{props.stunt.req}</span></h3>
          <div>
              {props.stunt.description}
              {props.stunt.example && (
                  <div id="example">
                    <br/>
                    <br/>
                    {props.stunt.example}
                  </div>
              )}
              {props.stunt.table && (
                  <Table info={props.stunt.table} />
              )}
              {props.stunt.points && (
                  <Points points={props.stunt.points} />
              )}
          </div>

        </div>
        :
        <div>
          <h3 className="marginal">You have no selected stunts</h3>
        </div>
      }
      </>
    )
  }
  
  export default Stunt
  