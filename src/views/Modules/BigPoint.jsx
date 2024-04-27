/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Points(props) {
    // getJSONData(metalJSON, collectMetals, onError);
  
    return (
      <>
        <ul>
            {props.points?.map((myObject, index) => (
                <li key={index}>
                    <span id="bold">{myObject.name}</span> {myObject.desc}
                </li>
            ))}
        </ul>
      </>
    )
  }
  
  export default Points
  