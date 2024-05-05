/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Table from "../../Modules/Table"

function Stunt(props) {

    return (
      <>
      {props.stunt ? 
        <div>
          <h2 className="notButter">{props.stunt.name}</h2>
          <h3 className="notButter">Type of Stunt: {props.stunt.type}</h3>
          <h3 className="notButter">Stunt Requires: {props.stunt.req}</h3>
          <div>
              {props.stunt.description}
              <br/>
              <br/>
              {props.stunt.example && (
                  <div id="example">{props.stunt.example}</div>
              )}
              {props.stunt.table && (
                  <Table info={props.stunt.table} />
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
  