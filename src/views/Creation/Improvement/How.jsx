/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function How(props) {

    return (
      < >
        <div id="desc">
            <h2>How a Hero Advances</h2>
            {props.improvement.advances}
            <h3>Earning Advancements</h3>
            {props.improvement.earning}
            <br/><br/>
            {props.improvement.advancements.map((advancement, index) => (
            <div key={index}>
                <span id="italicked">{advancement.example}</span> <br/>
                {advancement.explain}
                <br/><br/>
            </div>
            ))}
            <div id="brandon">
                <h4>From Brandon</h4>
                {props.improvement.brandon2}
            </div>
            <br/>
            {props.improvement.advancements2.map((advancement, index) => (
            <div key={index}>
                <span id="italicked">{advancement.example}</span> <br/>
                {advancement.explain}
                <br/>
            </div>
            ))}
            <h3>The Rate and Limits of Advancement</h3>
            {props.improvement.rate}
            <br/><br/>
            <div id="italicked">
                {props.improvement.example}
            </div>
            <br/>
            {props.improvement.limit}
            <br/>
            <div id="italicked">
                {props.improvement.example2}
            </div>
            <br/>
            <div id="brandon">
                <h4>From Brandon</h4>
                {props.improvement.brandon3}
            </div>
        </div>
      </>
    )
  }
  
  export default How
  