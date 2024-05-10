/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Terms(props) {

  return (
    <>
    <div className='marginTop'>
      <h1 className="notButter">Game Terms</h1>
        {props.gameTerms.map((myTerm, index) => (
          <div id="terms" key={index}>
                <span id='bolder'>{myTerm.term}:</span> {myTerm.description}
            <br/>
          </div>
        ))}
    </div>
    </>
  )
}

export default Terms