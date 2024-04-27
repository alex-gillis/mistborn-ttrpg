/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

function Repartee(props) {

  return (
    <>
      {props.info?.map((myObject, index) => (
        <div key={index}>
          <h2>{myObject.title}</h2>
          <div>{myObject.desc}</div>
          <br/>
          <div id="italicked">{myObject.example}</div>
          <br/>
        </div>
      ))}
    </>
  );
}

export default Repartee;
