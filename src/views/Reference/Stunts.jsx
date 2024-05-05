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
  const [myStunts, setStunts] = useState(props.stunts[0].stunts.concat(props.stunts[1].stunts).concat(props.stunts[2].stunts).concat(props.stunts[3].stunts));

  useEffect(() => {
    let newStunts = [];
    if (myAllo) newStunts = newStunts.concat(props.stunts[0].stunts);
    if (myGuns) newStunts = newStunts.concat(props.stunts[1].stunts);
    if (mySmith) newStunts = newStunts.concat(props.stunts[2].stunts);
    if (myCompound) newStunts = newStunts.concat(props.stunts[3].stunts);
    setStunts(sortByMultipleComponents(newStunts, ['name', 'type', 'req']));
  }, [myAllo, myGuns, mySmith, myCompound, props.stunts]);

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
    { title: 'Gun Tricks', select: myGuns, onClick: () => setGuns(!myGuns) },
    { title: 'Gunsmithing', select: mySmith, onClick: () => setSmith(!mySmith) },
    { title: 'Compounding', select: myCompound, onClick: () => setCompound(!myCompound) }
  ];

  return (
    <div>
      <div className='padderTop'>
        {filters.map((filter, index) => (
          <button key={index} className={filter.select ? 'selected' : 'unselected'} onClick={filter.onClick}>{filter.title}</button>
        ))}
      </div>
      <div id='diagram'>
        <div id='reference-table'>
            <h3 className='notButter'>Stunts</h3>
            <div className='reference-side'>
              <table id='centered'>
                  <thead className='reference-width'>
                      <tr>
                        <th className='reference-item'>
                          <button id='tableButton' onClick={() => setStunts(sortByMultipleComponents(myStunts, ['name', 'type', 'req']))}>
                            Stunt Name
                          </button>
                        </th>
                        <th className='reference-item'>
                          <button id='tableButton' onClick={() => setStunts(sortByMultipleComponents(myStunts, ['type', 'name', 'req']))}>
                            Type
                          </button>
                        </th>
                        <th className='reference-item'>
                          <button id='tableButton' onClick={() => setStunts(sortByMultipleComponents(myStunts, ['req', 'name', 'type']))}>
                            Requirements
                          </button>
                        </th>
                      </tr>
                  </thead>
              </table>
            </div>
            <div id='table-list'>
                <table id='centered'>
                    <tbody id='table-list' className='reference-width'>
                        {myStunts && myStunts.map((section, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'evenRow' : 'oddRow'}>
                            <td>
                            <button id='tableButton' onClick={() => handleSelection(index)}>
                                {section.name}
                            </button>
                            </td>
                            <td>
                            <button id='tableButton' onClick={() => handleSelection(index)}>
                                {section.type}
                            </button>
                            </td>
                            <td>
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
  );
}

export default Stunts;
