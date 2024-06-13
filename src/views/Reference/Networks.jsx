/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Network from './Network/Network';

function Networks(props) {
  const [mySelection, setSelection] = useState(0);
  const [myNetwork, setNetwork] = useState(props.networks);

  function handleSelection(sctNum) {
    setSelection(sctNum);
  }

  function sortByMultipleComponents(items, components) {
    function compare(a, b) {
      for (let component of components) {
        if (a[component] < b[component]) return -1;
        if (a[component] > b[component]) return 1;
      }
      return 0;
    }
  
    return items.slice().sort(compare);
  }

  return (
    <div className='isButter' >
      <div>
        <div id='diagram'>
          <div id='reference-table'>
              <h3 className='notButter'>Networks</h3>
              <div>
                <table>
                    <thead id='table-list' className="scrolling-body" style={{height:"45px"}}>
                        <tr>
                          <th>
                            <button id='tableButton' onClick={() => setNetwork(sortByMultipleComponents(myNetwork, ['name', 'timeframe', 'trait']))}>
                              <span className='righter'>Name</span>
                            </button>
                          </th>
                          <th>
                            <button id='tableButton' onClick={() => setNetwork(sortByMultipleComponents(myNetwork, ['timeframe', 'name', 'trait']))}>
                              Timeframe
                            </button>
                          </th>
                          <th>
                            <button id='tableButton' onClick={() => setNetwork(sortByMultipleComponents(myNetwork, ['trait', 'name', 'timeframe']))}>
                              Trait
                            </button>
                          </th>
                        </tr>
                    </thead>
                    <tbody id='table-list' className="scrolling-body">
                        {myNetwork && myNetwork.map((section, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'evenRow' : 'oddRow'} id={mySelection === index ? "chosenRow" : ""} onClick={() => handleSelection(index)} style={{ cursor:"pointer" }}>
                            <td>
                              <button id='tableButton'>
                                  {section.name}
                              </button>
                            </td>
                            <td>
                              <button id='tableButton'>
                                  {section.timeframe}
                              </button>
                            </td>
                            <td>
                              <button id='tableButton'>
                                  {section.trait}
                              </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
              </div>
          </div>
          <div id='reference-info'>
              <Network network={myNetwork[mySelection]} />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Networks;
