/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Terms(props) {
  // getJSONData(metalJSON, collectMetals, onError);

  return (
    <>
    <br/>
    <h1>Game Terms</h1>
      {props.gameTerms.map((myTerm, index) => (
        <div id="terms" key={index}>
            <div>
              <span id='bolder'>{myTerm.term}:</span> {myTerm.description}
            </div>
          <br/>
        </div>
      ))}
    </>
  )
}

export default Terms
