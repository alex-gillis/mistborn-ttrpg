/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

function Repartee(props) {

  return (
    <>
      {props.info?.map((myObject, index) => (
        <div key={index}>
          <h2>{myObject.title}</h2>
          { myObject.desc && 
            <div>
              {myObject.desc} 
              <br/><br/>
            </div>
          }
            
          { myObject.example && 
            <div id="italicked">
              {myObject.example}
              <br/>
            </div>
          }
          
        </div>
      ))}
    </>
  );
}

export default Repartee;
