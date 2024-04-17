/* eslint-disable react/prop-types */
function Basolurgy(props) { 
    let myOptions = props.info.options;
    return (
        < >
            <h2>{ props.info.name }</h2>
            { props.info.basics }
            <h2>Hemalurgic Creations</h2>
            { props.info.creations }
            <h2>Koloss</h2>
            { props.info.koloss }
            <h2>Kandra</h2>
            { props.info.kandra }
            <h2>Steel Inquisitors</h2>
            <div id="diagram">
                <div id="steelInfo" >
                    { props.info.inquisitor }
                </div>
                <div className="steelInfo">
                    <img id="inquisitor" src="./src/assets/inqDiagram.png" alt="Steel Inquisitor Diagram" />
                    <span id="bolder">A Visual Study of a Steel Inquisitor</span>
                </div>
            </div>
            <h2>Hemalurgic History</h2>
            { props.info.history }
            <h2>Hemalurgic Basics</h2>
            { props.info.mechanical }
            <h2>Gaining & Improving Hemalurgic Powers</h2>
            Characters can gain Hemalurgic Powers in three ways: <br/>
            <ul>
            {myOptions?.map((option, index) => (
                <li key={index}>
                    {option.option}
                <br/>
                </li>
            ))}
            </ul>
            { props.info.startRate }
            <br/>
            <h2>Combining Hemalurgy with Allomancy or Feruchemy</h2>
            { props.info.combining }
            <br/>
            <h2>Drawbacks of Hemalurgic Spikes</h2>
            { props.info.drawback }
            <br/>
            <h2>Using Hemalurgic Spikes</h2>
            { props.info.using }
            <br/>
            <h2>Decay of Hemalurgic Spikes</h2>
            { props.info.decay }
            <br/>
            <h2>Removing Hemalurgic Spikes</h2>
            { props.info.removal }
            <br/>
        </>
    )

}
  
export default Basolurgy
  