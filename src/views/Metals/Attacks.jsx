/* eslint-disable react/prop-types */
function Attack(props) {
    if (props.attack === 1) {
        return (
            < >
            <br/>
            <br/>
            <span id="bolder">Ironpulling Attacks:</span>
              <table>
                  <tr>
                      <th>Object</th>
                      <th>Damage</th>
                      <th>Min. / Max. Range</th>
                  </tr>
                  <tr>
                      <td>Small metal object (e.g. coin)</td>
                      <td>+1</td>
                      <td>Striking / Medium</td>
                  </tr>
                  <tr>
                      <td>Medium metal object (e.g. weapon)</td>
                      <td>+2</td>
                      <td>Striking / Medium</td>
                  </tr>
                  <tr>
                      <td>Large metal object (e.g. scenery)</td>
                      <td>+3</td>
                      <td>Close / Medium</td>
                  </tr>
              </table>
            <br/>
            </>
    
    ) 
    } else {
        return ( 
        < >
            <br/>
        </>
        )
    }
  }
  
  export default Attack
  