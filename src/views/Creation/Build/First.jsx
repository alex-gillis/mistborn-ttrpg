/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function First(props) {
    return (
      < >
        <h1>Step 1: Start with the Crew</h1>
        <div>{props.build.step1}</div>
        <div>
          {props.build.questionCrew.map(myQuestion => (
            <div>
              <h3 id="italicked">{myQuestion.question}</h3> 
              {myQuestion.description}
            </div> 
          ))}
        <div id="italicked">{props.build.example1}</div>
        <div id="brandon">
            <h4>From Brandon</h4>
            {props.build.brandon}
        </div>
        </div>
      </>
    )
  }
  
  export default First
  