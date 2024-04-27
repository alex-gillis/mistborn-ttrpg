/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Points(props) {
    // getJSONData(metalJSON, collectMetals, onError);
  
    return (
      <>
        <ul>
            {props.points?.map((myObject, index) => (
                <li key={index}>
                    {myObject.point}
                </li>
            ))}
        </ul>
      </>
    )
  }
  
  export default Points
  