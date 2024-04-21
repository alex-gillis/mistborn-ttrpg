/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Fourth(props) {
    return (
      < >
        <h1>Step 4: Define your Strengths</h1>
        <div>{props.build.step4}</div>
            <h3>Powers</h3>
            <div>{props.build.powers4}</div>
            <div>
            {props.build.powerDef.map((myItem, index) => (
                <div key={index}>
                <h5 id="italicked">{myItem.name}</h5>
                <li>{myItem.option1}</li> 
                <li>{myItem.option2}</li> 
                </div> 
            ))}
            <h5>{props.build.powerName}</h5>
            <li>{props.build.powerOpt}</li> 
            <br/>
            <div id="italicked">{props.build.example7}</div>
            <h3>Powers</h3>
            <div>{props.build.attri1}</div>
            {props.build.attrDesc.map((myItem, index) => (
            <div key={index}>
                <h5 id="italicked">{myItem.name}</h5> 
                <li>{myItem.description}</li> 
            </div> 
            ))}
            <div>{props.build.attri2}</div>
            {props.build.optionDesc.map((myItem, index) => (
            <div key={index}>
                <h5 id="italicked">{myItem.name}</h5>
                <li>{myItem.description}</li> 
            </div> 
            ))}
            <div>{props.build.attri3}</div>
            <br/>
            <div id="italicked">{props.build.example8}</div>
            <h3>Standing</h3>
            <div>{props.build.stand1}</div>
            {props.build.standDesc.map((myItem, index) => (
            <div key={index}>
                <h5 id="italicked">{myItem.name}</h5>
                <li>{myItem.description}</li> 
            </div> 
            ))}
            <br/>
            <div>{props.build.stand2}</div>
            <br/>
            <div>{props.build.stand3}</div>
            <br/>
            <div id="italicked">{props.build.example9}</div>
        </div>
      </>
    )
  }
  
  export default Fourth
  