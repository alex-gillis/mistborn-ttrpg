/* eslint-disable react/prop-types */
function Attack(props) {
    if (props.attack === 1) {
        return (
            < >
            <br/>
            <br/>
            <span id="bolder">Ironpulling Attacks:</span>
              <table>
                <tbody>
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
                </tbody>
              </table>
            <br/>
            </>
        ) 
    } else if (props.attack === 2) {
        return (
            < >
            <br/>
            <br/>
            <span id="bolder">Steelpushing Attacks:</span>
              <table>
                <tbody>
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
                </tbody>
              </table>
            <br/>
            </>
    
        ) 
    } else if (props.attack === 3) {
        return (
            < >
            <br/>
            <br/>
              <table>
                <tbody>
                  <tr>
                      <th>Difficulty</th>
                      <th>Type of Information Desired (Example</th>
                  </tr>
                  <tr>
                      <td>1</td>
                      <td>Simple (e.g. the number of dice in the Allomancer’s last pool using a Power)</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>Basic (e.g. which metals the Allomancer is flaring, if any)</td>
                  </tr>
                  <tr>
                      <td>3</td>
                      <td>Detailed (e.g. any Stunts the Allomancer is using)</td>
                  </tr>
                  <tr>
                      <td>4</td>
                      <td>Specific (e.g. the target(s) of the Allomancer’s Power, such as the character being Rioted or Soothed, or the metal sources being Pulled or Pushed)</td>
                  </tr>
                  <tr>
                      <td>5</td>
                      <td>Exacting (e.g. the Allomancer’s remaining charges with each metal currently being burned)</td>
                  </tr>
                </tbody>
              </table>
            <br/>
            </>
    
        ) 
    } else if (props.attack === 4) {
        return (
            < >
            <br/>
            <br/>
              <table>
                <tbody>
                  <tr>
                      <th>Difficulty</th>
                      <th>Type of Information Desired (Example)</th>
                  </tr>
                  <tr>
                      <td>1</td>
                      <td>Very strong (e.g. fondness for a current lover; fear of a life-threatening situation; anger toward the murderer of the target’s family; desire to seize a no-risk opportunity or tremendous payoff )</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>Strong (e.g. fondness for an ex-lover; fear of a risky situation; anger toward an oppressive government; desire to seize an opportunity with low risk or a good payoff )</td>
                  </tr>
                  <tr>
                      <td>3</td>
                      <td>Slight (e.g. fondness for a friend; fear of an common situation; anger toward an annoying person; desire to seize an opportunity with some risk or an average payoff )</td>
                  </tr>
                  <tr>
                      <td>4</td>
                      <td>Weak (e.g. fondness for an old rival; fear of a safe situation; anger toward a friendly person; desire to seize an opportunity with little risk or a low payoff )</td>
                  </tr>
                  <tr>
                      <td>5</td>
                      <td>Virtually nonexistent (e.g. fondness for a bitter enemy; fear of a no-risk situation; anger toward a loved one; desire to seize an opportunity with no risk or payoff )</td>
                  </tr>
                </tbody>
              </table>
            <br/>
            </>
    
        ) 
    } else  {
        return ( 
        < >
            <br/>
        </>
        )
    }
  }
  
  export default Attack
  