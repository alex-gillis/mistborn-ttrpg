
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Hero(props) {
    return (
      < >
        <h1>Building Your Hero</h1>
        <div>{props.build.buildHero}</div>
        <div>
          {props.build.steps.map((myStep, index) => (
            <div key={index}>
              <span id="bold">{myStep.name}</span> {myStep.description}
            </div> 
          ))}
        </div>
      </>
    )
  }
  
  export default Hero
  