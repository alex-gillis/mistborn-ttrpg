/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Building(props) {
    return (
      <>
        <h1>Building Heroes</h1>
        <div>{props.build.basics}</div>
        <h2>Building your hero</h2>
        <div>{props.build.follow}</div>
        {props.build.steps?.map((myObject, index) => (
            <div key={index}>
                <span id="bold">{myObject.name}</span> {myObject.desc}
            </div>
        ))}
      </>
    );
}
  
export default Building;
