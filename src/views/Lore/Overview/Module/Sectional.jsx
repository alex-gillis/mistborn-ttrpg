/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import BigPoints from "../../../Modules/BigPoint"

function Section(props) {
  
    return (
      <>
      <h2>{props.info.name}</h2>
      <div>{props.info.info}</div>
      <div>
        {props.info.image && (
            <div>
              <br/>
              <img id="centerIMG" src={props.info.image} /> 
            </div>
        )}
        {props.info.legends && (
            <div>
              <br/>
              <div id="brandon">
                <h4>Legends of Scadrial</h4>
                {props.info.info}
                <BigPoints info={props.info.points} />
              </div>
            </div>
        )}
      </div>
      </>
    )
  }
  
  export default Section
  