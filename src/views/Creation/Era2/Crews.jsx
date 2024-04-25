/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Crews(props) {
    return (
      <>
        <h1>Crews in the Alloy of Law</h1>
        <div>{props.crews.basics}</div>
        {props.crews.types?.map((myObject, index) => (
            <div key={index}>
                <h2>{myObject.name}</h2>
                {myObject.desc}
            </div>
        ))}
      </>
    );
}
  
export default Crews;
