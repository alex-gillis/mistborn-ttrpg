/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react';
import Prop from './Props/Prop';

function Props(props) {
  const [mySelection, setSelection] = useState(0);
  const [myEraOne, setEraOne] = useState(true);
  const [myEraTwo, setEraTwo] = useState(true);
  const [myMelee, setMelee] = useState(true);
  const [myRanged, setRange] = useState(true);
  const [myGuns, setGuns] = useState(true);
  const [myCustom, setCustom] = useState(true);
  const [myAmmo, setAmmo] = useState(true);
  const [myArmor, setArmor] = useState(true);
  const [myShields, setShields] = useState(true);
  const [myAnimal, setAnimal] = useState(true);
  const [myTools, setTools] = useState(true);
  const [myImplement, setImplement] = useState(true);
  const [myProps, setProps] = useState([]);

  
  useEffect(() => {
    let newProps = [];
    // newProps = newProps.concat(props.propped.era1[0].props);
    // newProps = newProps.concat(props.propped.era1[1].props);
    // newProps = newProps.concat(props.propped.era1[2].props);
    // newProps = newProps.concat(props.propped.era1[3].props);
    // newProps = newProps.concat(props.propped.era1[4].props);
    // newProps = newProps.concat(props.propped.era1[5].props);
    // newProps = newProps.concat(props.propped.era1[6].props);

    newProps = newProps.concat(props.propped.era2[0].props);
    newProps = newProps.concat(props.propped.era2[1].props);
    newProps = newProps.concat(props.propped.era2[2].props);
    newProps = newProps.concat(props.propped.era2[3].props);
    newProps = newProps.concat(props.propped.era2[4].props);
    newProps = newProps.concat(props.propped.era2[5].props);
    newProps = newProps.concat(props.propped.era2[6].props);
    newProps = newProps.concat(props.propped.era2[7].props);
    newProps = newProps.concat(props.propped.era2[8].props);
    newProps = newProps.concat(props.propped.era2[9].props);
    setProps(sortByMultipleComponents(newProps, ['item', 'type', 'props', 'difficulty']));
  },[props.propped.era2]);

  useEffect(() => {
    let newProps = [];
    // if (myEraOne && myMelee) newProps = newProps.concat(props.propped.era1[0].props);
    // if (myEraOne && myRanged) newProps = newProps.concat(props.propped.era1[1].props);
    // if (myEraOne && myArmor) newProps = newProps.concat(props.propped.era1[2].props);
    // if (myEraOne && myShields) newProps = newProps.concat(props.propped.era1[3].props);
    // if (myEraOne && myAnimal) newProps = newProps.concat(props.propped.era1[4].props);
    // if (myEraOne && myTools) newProps = newProps.concat(props.propped.era1[5].props);
    // if (myEraOne && myImplement) newProps = newProps.concat(props.propped.era1[6].props);

    if (myEraTwo && myMelee) newProps = newProps.concat(props.propped.era2[0].props);
    if (myEraTwo && myRanged) newProps = newProps.concat(props.propped.era2[1].props);
    if (myEraTwo && myArmor) newProps = newProps.concat(props.propped.era2[2].props);
    if (myEraTwo && myShields) newProps = newProps.concat(props.propped.era2[3].props);
    if (myEraTwo && myAnimal) newProps = newProps.concat(props.propped.era2[4].props);
    if (myEraTwo && myTools) newProps = newProps.concat(props.propped.era2[5].props);
    if (myEraTwo && myImplement) newProps = newProps.concat(props.propped.era2[6].props);
    if (myEraTwo && myGuns) newProps = newProps.concat(props.propped.era2[7].props);
    if (myEraTwo && myCustom) newProps = newProps.concat(props.propped.era2[8].props);
    if (myEraTwo && myAmmo) newProps = newProps.concat(props.propped.era2[9].props);
    setProps(sortByMultipleComponents(newProps, ['item', 'type', 'props', 'difficulty']));
  }, [myGuns, myMelee, myRanged, myCustom, myAmmo, myArmor, myShields, myAnimal, myTools, myImplement, myEraOne, myEraTwo, props.propped.era1, props.propped.era2]);

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
    { title: 'Era One', select: myEraOne, onClick: () => setEraOne(!myEraOne) },
    { title: 'Era Two', select: myEraTwo, onClick: () => setEraTwo(!myEraTwo) },
    { title: 'Melee', select: myMelee, onClick: () => setMelee(!myMelee) },
    { title: 'Ranged', select: myRanged, onClick: () => setRange(!myRanged) },
    { title: 'Armor', select: myArmor, onClick: () => setArmor(!myArmor) },
    { title: 'Shields', select: myShields, onClick: () => setShields(!myShields) }
  ];

  const filtersTwo = [
    { title: 'Animals', select: myAnimal, onClick: () => setAnimal(!myAnimal) },
    { title: 'Tools', select: myTools, onClick: () => setTools(!myTools) },
    { title: 'Implements', select: myImplement, onClick: () => setImplement(!myImplement) },
    { title: 'Guns', select: myGuns, onClick: () => setGuns(!myGuns) },
    { title: 'Customizations', select: myCustom, onClick: () => setCustom(!myCustom) },
    { title: 'Ammunition', select: myAmmo, onClick: () => setAmmo(!myAmmo) }
  ];

  return (
    <div className='padderTop'>
      <div id='diagram'>
        <div id='reference-table'>
            <h3 className='notButter'>Stunts</h3>
            <div>
              <table>
                <tr>
                  {filters.map((filter, index) => (
                    <td>
                      <button key={index} id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                    </td>
                  ))}
                </tr>
                <tr>
                  {filtersTwo.map((filter, index) => (
                    <td>
                      <button key={index} id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                    </td>
                  ))}
                </tr>
              </table>
            </div>
            <div className='reference-side'>
              <table id='centered'>
                  <thead className='reference-width' id='reference-size'>
                      <tr>
                        <th className='ref-one'>
                          <button id='tableButton' onClick={() => setProps(sortByMultipleComponents(myProps, ['item', 'type', 'props', 'difficulty']))}>
                            <span className='righter'>Item</span>
                          </button>
                        </th>
                        <th className='ref-two'>
                          <button id='tableButton' onClick={() => setProps(sortByMultipleComponents(myProps, ['type', 'item', 'props', 'difficulty']))}>
                            Type
                          </button>
                        </th>
                        <th className='ref-three'>
                          <button id='tableButton' onClick={() => setProps(sortByMultipleComponents(myProps, ['props', 'item', 'type', 'difficulty']))}>
                            Requirements
                          </button>
                        </th>
                        <th className='ref-four'>
                          <button id='tableButton' onClick={() => setProps(sortByMultipleComponents(myProps, ['difficulty', 'item', 'type', 'props']))}>
                            Difficulty
                          </button>
                        </th>
                      </tr>
                  </thead>
              </table>
            </div>
            <div id='table-list'>
                <table id='centered'>
                    <tbody id='table-list' className='reference-width'>
                        {myProps && myProps.map((section, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'evenRow' : 'oddRow'}>
                            <td className='ref-one'>
                              <button id='tableButton' onClick={() => handleSelection(index)}>
                                  {section.item}
                              </button>
                            </td>
                            <td className='ref-two'>
                              <button id='tableButton' onClick={() => handleSelection(index)}>
                                  {section.type}
                              </button>
                            </td>
                            <td className='ref-three'>
                              <button id='tableButton' onClick={() => handleSelection(index)}>
                                  {section.props}
                              </button>
                            </td>
                            <td className='ref-four'>
                              <button id='tableButton' onClick={() => handleSelection(index)}>
                                  {section.difficulty}
                              </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
        <div id='reference-info'>
            <Prop prop={myProps[mySelection]} />
        </div>
      </div>
    </div>
  );
}

export default Props;
