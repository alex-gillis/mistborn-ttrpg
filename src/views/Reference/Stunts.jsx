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

  return (
    <div className='isButter' >
      <div className='marginTop'>
        <div id='diagram'>
          <div id='reference-table'>
              <h3 className='notButter'>Stunts</h3>
              <div>
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
              <div>
                <table id='reference-size' className='reference-width' >
                    <thead>
                        <tr>
                          <th className='ref-item'>
                            <button id='tableButton' onClick={() => setStunts(sortByMultipleComponents(myStunts, ['name', 'type', 'req']))}>
                              <span className='righter'>Stunt Name</span>
                            </button>
                          </th>
                          <th className='ref-middle'>
                            <button id='tableButton' onClick={() => setStunts(sortByMultipleComponents(myStunts, ['type', 'name', 'req']))}>
                              Type
                            </button>
                          </th>
                          <th className='ref-object'>
                            <button id='tableButton' onClick={() => setStunts(sortByMultipleComponents(myStunts, ['req', 'name', 'type']))}>
                              Requirements
                            </button>
                          </th>
                          <th className='ref-space'>
                          </th>
                        </tr>
                    </thead>
                </table>
              </div>
              <div id='table-list' style={{maxHeight:"695px"}}>
                <table id='reference-size' className='reference-width'>
                      <tbody>
                          {myStunts && myStunts.map((section, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'evenRow' : 'oddRow'}>
                              <td className='ref-item'>
                              <button id='tableButton' onClick={() => handleSelection(index)}>
                                  {section.name}
                              </button>
                              </td>
                              <td className='ref-middle'>
                              <button id='tableButton' onClick={() => handleSelection(index)}>
                                  {section.type}
                              </button>
                              </td>
                              <td className='ref-object'>
                              <button id='tableButton' onClick={() => handleSelection(index)}>
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
