/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import BigPoints from "../../../Modules/BigPoint"

function Structure(props) {
  
    return (
      <>
      <h1>Terris Structure</h1>
      <div>{props.info.main}</div>
      <br/>
      <div>{props.info.appearance}</div>
      <br/>
      <div id="brandon">
        <h4>Key Buildings of the Enclave</h4>
        {props.info.brandon.main}
        <div>
            <BigPoints points={props.info.brandon.points} />
        </div>
      </div>
      <br/>
      <div>{props.info.layout}</div>
      </>
    )
  }
  
  export default Structure
  