/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Second(props) {
    return (
      < >
        <h1>Step 2: Devise a Concept</h1>
        <div>{props.build.step2}</div>
        <div>
            <table id="buildTable">
                {props.build.concepts.map(myConcept => (
                    <tr>
                        <td id="buildRow">{myConcept.one}</td> 
                        <td id="buildRow">{myConcept.two}</td>
                    </tr> 
                ))}
            </table>
            <div id="italicked">{props.build.example2}</div>
        </div>
      </>
    )
  }
  
  export default Second
  