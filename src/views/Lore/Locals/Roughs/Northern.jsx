/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Northern(props) {
  
    return (
      <>
      <h1>Northern Roughs</h1>
      <div>{props.info.part1}</div>
      <h2>Towns of the Northern Roughs</h2>
      <div>{props.info.part2}</div>
      <div>
        {props.info.towns.map((section, index) => (
            <div key={index}>
                <h2 id="better">{section.name}</h2>
                {section.desc}
            </div>
        ))}
      </div>
      </>
    )
  }
  
  export default Northern
  