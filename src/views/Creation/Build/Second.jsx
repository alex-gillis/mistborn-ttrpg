/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Second(props) {
    return (
      < >
        <h1>Step 2: Devise a Concept</h1>
        <div>{props.build.step2}</div>
        <div>
            <table id="buildTable">
              <tbody>
                {props.build.concepts.map((myConcept, index) => (
                    <tr key={index}>
                        <td id="buildRow">{myConcept.one}</td> 
                        <td id="buildRow">{myConcept.two}</td>
                    </tr> 
                ))}
              </tbody>
            </table>
            <div id="italicked">{props.build.example2}</div>
        </div>
      </>
    )
  }
  
  export default Second
  