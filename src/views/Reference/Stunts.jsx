/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react';
import Stunt from './Stunts/Stunt';

function Stunts(props) {
  const [mySelection, setSelection] = useState(0);
  const [myAllo, setAllo] = useState(true);
  const [myGuns, setGuns] = useState(true);
  const [mySmith, setSmith] = useState(true);
  const [myCompound, setCompound] = useState(true);
  const [myCultural, setCultural] = useState(true);
  const [myHomeland, setHomeland] = useState(true);
  const [myStunts, setStunts] = useState(props.stunts[0].stunts.concat(props.stunts[1].stunts)
                                .concat(props.stunts[2].stunts).concat(props.stunts[3].stunts)
                                .concat(props.stunts[4].stunts).concat(props.stunts[5].stunts));

  useEffect(() => {
    let newStunts = [];
    if (myAllo) newStunts = newStunts.concat(props.stunts[0].stunts);
    if (myGuns) newStunts = newStunts.concat(props.stunts[1].stunts);
    if (mySmith) newStunts = newStunts.concat(props.stunts[2].stunts);
    if (myCompound) newStunts = newStunts.concat(props.stunts[3].stunts);
    if (myCultural) newStunts = newStunts.concat(props.stunts[4].stunts);
    if (myHomeland) newStunts = newStunts.concat(props.stunts[5].stunts);
    setStunts(sortByMultipleComponents(newStunts, ['name', 'type', 'req']));
  }, [myAllo, myGuns, mySmith, myCompound, props.stunts, myCultural, myHomeland]);

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

  const filters = [
    { title: 'Allomancy', select: myAllo, onClick: () => setAllo(!myAllo) },
    { title: 'Gunplay', select: myGuns, onClick: () => setGuns(!myGuns) },
    { title: 'Gunsmithing', select: mySmith, onClick: () => setSmith(!mySmith) },
    { title: 'Compounding', select: myCompound, onClick: () => setCompound(!myCompound) },
    { title: 'Cultural', select: myCultural, onClick: () => setCultural(!myCultural) },
    { title: 'Homeland', select: myHomeland, onClick: () => setHomeland(!myHomeland) }
  ];

  const mobiFilters = [
    { title: 'Allomancy', select: myAllo, onClick: () => setAllo(!myAllo) },
    { title: 'Gunplay', select: myGuns, onClick: () => setGuns(!myGuns) },
    { title: 'Gunsmithing', select: mySmith, onClick: () => setSmith(!mySmith) }
  ];

  const mobiFiltersTwo = [
    { title: 'Compounding', select: myCompound, onClick: () => setCompound(!myCompound) },
    { title: 'Cultural', select: myCultural, onClick: () => setCultural(!myCultural) },
    { title: 'Homeland', select: myHomeland, onClick: () => setHomeland(!myHomeland) }
  ];

  return (
    <div className='butter'>
      <div>
        <div id='diagram'>
          <div id='reference-table'>
              <h3 className='notButter'>Stunts</h3>
              <div id='regMenu'>
                <table>
                  <tbody>
                    <tr>
                      {filters.map((filter, index) => (
                        <td key={index}>
                          <button id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id='mobiMenu'>
                <table>
                  <tbody>
                    <tr>
                      {mobiFilters.map((filter, index) => (
                        <td key={index}>
                          <button id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {mobiFiltersTwo.map((filter, index) => (
                        <td key={index}>
                          <button id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table>
                    <thead id='table-list' className="scrolling-body" style={{height:"45px"}}>
                        <tr>
                          <th onClick={() => setStunts(sortByMultipleComponents(myStunts, ['name', 'type', 'req']))}>
                            <button id='tableButton'>
                              <span className='righter'>Name</span>
                            </button>
                          </th>
                          <th onClick={() => setStunts(sortByMultipleComponents(myStunts, ['type', 'name', 'req']))}>
                            <button id='tableButton'>
                              Type
                            </button>
                          </th>
                          <th onClick={() => setStunts(sortByMultipleComponents(myStunts, ['req', 'name', 'type']))}>
                            <button id='tableButton'>
                              Requires
                            </button>
                          </th>
                        </tr>
                    </thead>
                    <tbody id='table-list' className="scrolling-body">
                        {myStunts && myStunts.map((section, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'evenRow' : 'oddRow'} id={mySelection === index ? "chosenRow" : ""}>
                            <td onClick={() => handleSelection(index)}>
                              <button id='tableButton'>
                                  {section.name}
                              </button>
                            </td>
                            <td onClick={() => handleSelection(index)}>
                              <button id='tableButton'>
                                  {section.type}
                              </button>
                            </td>
                            <td onClick={() => handleSelection(index)}>
                              <button id='tableButton'>
                                  {section.req}
                              </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
              </div>
          </div>
          
          <div id='reference-info'>
              <Stunt stunt={myStunts[mySelection]} />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Stunts;
