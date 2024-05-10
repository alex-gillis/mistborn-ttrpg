/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Elendel(props) {
  
    return (
      <>
      <h1>The Elendel Basin</h1>
      <div>{props.info.intro}</div>
      <h2>Elendel</h2>
      <div>{props.info.elendel.part1}</div>
      <div>
        <br/>
        <img id="centerIMG" className="necessary" src={props.info.elendel.image} /> 
      </div>
      <h2>Crime & Policing</h2>
      <div>{props.info.elendel.part2}</div>
      <h2>Notable Locations</h2>
      <div>{props.info.elendel.part4}</div>
      <div>
        {props.info.elendel.locals.map((section, index) => (
            <div key={index}>
                <br/>
                <span id="bold">{section.name}</span> {section.desc}
            </div>
        ))}
      </div>
      </>
    )
  }
  
  export default Elendel
  