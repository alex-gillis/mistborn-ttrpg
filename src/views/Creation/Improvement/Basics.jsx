/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Basics(props) {

    return (
      < >
        <div id="desc">
            <h1>Improving Heroes</h1>
            {props.improvement.improving}
            <br/>
            <br/>
            <div id="brandon">
                <h4>Experienced Heroes</h4>
                {props.improvement.brandon}
            </div>
            <br/>
            {props.improvement.improvingTwo}
        </div>
      </>
    )
  }
  
  export default Basics
  