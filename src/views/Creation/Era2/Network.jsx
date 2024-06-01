/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Network(props) {
    return (
      <>
        <h1>Networks</h1>
        <div>
            {props.info.basics}
        </div>
        <div>
            <h2 id="italicked">Gaining a Network</h2>
            <div>
                {props.info.gain.basic}
            </div>
            <br/>
            <div id="example">
                {props.info.gain.example}
            </div>
        </div>
        <div>
            <h2 id="italicked">Using a Network</h2>
            <div>
                {props.info.use.basic}
            </div>
            <br/>
            <div id="example">
                {props.info.use.example}
            </div>
        </div>
        <div>
            <h2 id="italicked">Changing Networks</h2>
            <div>
                {props.info.change}
            </div>
        </div>
        <p style={{fontSize:"200%", marginBottom: "0px", fontWeight:"bold"}}>Network Advancements</p>
        <h2 id="italicked" style={{marginTop: "0px"}}>2 Advancements</h2>
        <div><span id="bold">{props.info.first.name}</span>: {props.info.first.desc}</div>
        <h2 id="italicked">4 Advancements</h2>
        <div><span id="bold">{props.info.second.name}</span>: {props.info.second.desc}</div>
      </>
    );
}
  
export default Network;
