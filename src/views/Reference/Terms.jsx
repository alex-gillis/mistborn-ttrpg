/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Terms(props) {

  return (
    <>
    <div className='marginTop'>
      <div id="teeny">
        <h1 className="notButter">Game Terms</h1>
      </div>
      <ul>
        {props.gameTerms.map((myTerm, index) => (
          <li id="terms" key={index}>
                <span id='bolder'>{myTerm.term}</span>
                <span id='bold'>:</span> {myTerm.description}
          </li>
        ))} 
      </ul>
    </div>
    </>
  )
}

export default Terms
