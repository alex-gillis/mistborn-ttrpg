/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import BigPoints from "../../../Modules/BigPoint"

function Laws(props) {
  
    return (
      <>
      <h1>Elendel Law & Economy</h1>
      <div>{props.info.intro}</div>
      <h2>City Government</h2>
      <div>{props.info.cityGov.government}</div>
      <h3>Government Corruption</h3>
      <div>{props.info.cityGov.corruption}</div>
      <h3 id="italicked">The Innates</h3>
      <div>{props.info.cityGov.innates}</div>
      <h2>Crime & Policing</h2>
      <div>{props.info.constabulary.opener}</div>
      <h3>Notable Locations</h3>
      <BigPoints points={props.info.constabulary.notable} />
      <h2>Allomantic Laws</h2>
      <div>{props.info.alloLaws}</div>
      <h2>Elendel Economy</h2>
      <div>{props.info.economy}</div>
      </>
    )
  }
  
  export default Laws
  