/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Groups(props) {
  
    return (
      <>
      <h1>Influential Groups</h1>
      <div>{props.info.elendel.part3}</div>
      <div>
        {props.info.elendel.groups.map((section, index) => (
            <div key={index}>
                <br/>
                <span id="bold">{section.name}</span> {section.desc}
            </div>
        ))}
      </div>
      </>
    )
  }
  
  export default Groups
  