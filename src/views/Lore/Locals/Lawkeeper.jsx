/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Lawkeeper(props) {
  
    return (
      <>
      <h1>Lawkeepers</h1>
      <div>{props.info.part1}</div>
      <h2>Who They Are</h2>
      <div>{props.info.part2}</div>
      <div>
        <ul>
            {props.info.archetypes.map((section, index) => (
                <li key={index}>
                    <span id="bold">{section.name}</span> {section.desc}
                </li>
            ))}
        </ul>
      </div>
      <h2>How They Do It</h2>
      <div>{props.info.how}</div>
      </>
    )
  }
  
  export default Lawkeeper
  