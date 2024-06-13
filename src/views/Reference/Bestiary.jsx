/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react';
import Beast from './Bestiary/Beast';

function Bestiary(props) {
  const [mySelection, setSelection] = useState(0);
  const [myEraOne, setEraOne] = useState(false);
  const [myEraTwo, setEraTwo] = useState(true);
  // const [myEraOne] = useState(false);
  // const [myEraTwo] = useState(true);
  const [myHeroes, setHeroes] = useState(true);
  const [myCity, setCity] = useState(true);
  const [myWildlife, setWildlife] = useState(true);
  const [myRoughs, setRough] = useState(true);
  const [myMetals, setMetals] = useState(true);
  const [myOutsider, setOutsider] = useState(true);
  const [myMalwish, setMalwish] = useState(true);
  const [myGangs, setGangs] = useState(true);
  const [myBeasts, setBeasts] = useState([]);
  
  useEffect(() => {
    let newBeasts = [];
    // newBeasts = newBeasts.concat(props.era1.props);

    newBeasts = newBeasts.concat(props.era2.heroes);
    newBeasts = newBeasts.concat(props.era2.city);
    newBeasts = newBeasts.concat(props.era2.roughs);
    newBeasts = newBeasts.concat(props.era2.metalborn);
    newBeasts = newBeasts.concat(props.era2.outsider);
    newBeasts = newBeasts.concat(props.era2.malwish);
    newBeasts = newBeasts.concat(props.era2.gangs);
    newBeasts = newBeasts.concat(props.era2.chimera);
    newBeasts = newBeasts.concat(props.era2.wildlife);
    setBeasts(sortByMultipleComponents(newBeasts, ['name', 'type', 'threat']));
  },[props.era1, props.era2]);

  useEffect(() => {
    let newBeasts = [];
    // if (myEraOne && myHeroes) newBeasts = newBeasts.concat(props.era1.heroes);

    if (myEraTwo && myHeroes) newBeasts = newBeasts.concat(props.era2.heroes);
    if (myEraTwo && myCity) newBeasts = newBeasts.concat(props.era2.city);
    if (myEraTwo && myRoughs) newBeasts = newBeasts.concat(props.era2.roughs);
    if (myEraTwo && myMetals) newBeasts = newBeasts.concat(props.era2.metalborn);
    if (myEraTwo && myOutsider) newBeasts = newBeasts.concat(props.era2.outsider);
    if (myEraTwo && myMalwish) newBeasts = newBeasts.concat(props.era2.malwish);
    if (myEraTwo && myGangs) newBeasts = newBeasts.concat(props.era2.gangs);
    if (myEraTwo && myWildlife) newBeasts = newBeasts.concat(props.era2.wildlife);
    setBeasts(sortByMultipleComponents(newBeasts, ['name', 'type', 'threat']));
  }, [myHeroes, myCity, myWildlife, myRoughs, myMetals, myOutsider, myMalwish, myGangs, myEraOne, myEraTwo, props.era1, props.era2]);

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

  // function switchEra(){
  //   setEraOne(!myEraOne); 
  //   setEraTwo(!myEraTwo);
  // }

  // const eraFilters = [
  //   { title: 'Era One', select: myEraOne, onClick: () => switchEra()},
  //   { title: 'Era Two', select: myEraTwo, onClick: () => switchEra()}
  // ];

  const filters = [
    { title: 'Era 1', select: myEraOne, onClick: () => setEraOne(!myEraOne) },
    { title: 'Named', select: myHeroes, onClick: () => setHeroes(!myHeroes) },
    { title: 'City Folks', select: myCity, onClick: () => setCity(!myCity) },
    { title: 'Roughs Folks', select: myRoughs, onClick: () => setRough(!myRoughs) },
    { title: 'Metalborn', select: myMetals, onClick: () => setMetals(!myMetals) }
  ];

  const filtersTwo = [
    { title: 'Era 2', select: myEraTwo, onClick: () => setEraTwo(!myEraTwo) },
    { title: 'Gangs', select: myGangs, onClick: () => setGangs(!myGangs) },
    { title: 'Outsiders', select: myOutsider, onClick: () => setOutsider(!myOutsider) },
    { title: 'Malwish', select: myMalwish, onClick: () => setMalwish(!myMalwish) },
    { title: 'Wildlife', select: myWildlife, onClick: () => setWildlife(!myWildlife) }
  ];

  
  const mobileFilters = [
    { title: 'Era 1', select: myEraOne, onClick: () => setEraOne(!myEraOne) },
    { title: 'Named', select: myHeroes, onClick: () => setHeroes(!myHeroes) },
    { title: 'Metalborn', select: myMetals, onClick: () => setMetals(!myMetals) },
    { title: 'Malwish', select: myMalwish, onClick: () => setMalwish(!myMalwish) },
    { title: 'Outsiders', select: myOutsider, onClick: () => setOutsider(!myOutsider) }
  ];

  const mobileFiltersTwo = [
    { title: 'Era 2', select: myEraTwo, onClick: () => setEraTwo(!myEraTwo) },
    { title: 'City Folk', select: myCity, onClick: () => setCity(!myCity) },
    { title: 'Roughs Folks', select: myRoughs, onClick: () => setRough(!myRoughs) },
    { title: 'Gangs', select: myGangs, onClick: () => setGangs(!myGangs) },
    { title: 'Wildlife', select: myWildlife, onClick: () => setWildlife(!myWildlife) }
  ];

  return (
    <div className='isButter' >
      <div>
        <div id='diagram'>
          <div id='reference-table'>
              <div id='regMenu'>
                <table id='reference-size' className='reference-width' style={{margin:"auto"}}>
                  <tbody>
                    <tr>
                      <td colSpan={10}>
                        <h3 className='notButter'>Creatures from {myEraOne ? 'Era 1' : 'Era 2'}</h3>
                      </td>        
                    </tr>
                    {/* <tr>
                      <td></td>
                      {eraFilters.map((filter, index) => (
                        <td key={index}>
                          <button style={{width:"140px"}} id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                        </td>
                      ))}
                      <td></td>
                    </tr> */}
                    <tr>
                      {filters.map((filter, index) => (
                        <td key={index}>
                          <button style={{width:"140px"}} id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {filtersTwo.map((filter, index) => (
                        <td key={index}>
                          <button style={{width:"140px"}} id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id='mobiMenu'>
                <table  style={{margin:"auto"}}>
                  <tbody>
                    <tr>
                      <td colSpan={5}>
                        <h3 className='notButter'>Creatures from {myEraOne ? 'Era 1' : 'Era 2'}</h3>
                      </td>        
                    </tr>
                    <tr>
                      {mobileFilters.map((filter, index) => (
                        <td key={index}>
                          <button id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {mobileFiltersTwo.map((filter, index) => (
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
                        <th onClick={() => setBeasts(sortByMultipleComponents(myBeasts, ['name', 'type', 'threat']))} style={{ cursor:"pointer" }}>
                          <button id='tableButton'>
                            Name
                          </button>
                        </th>
                        <th onClick={() => setBeasts(sortByMultipleComponents(myBeasts, ['type', 'name', 'threat']))} style={{ cursor:"pointer" }}>
                          <button id='tableButton'>
                            Type
                          </button>
                        </th>
                        <th onClick={() => setBeasts(sortByMultipleComponents(myBeasts, ['level', 'name', 'type']))} style={{ cursor:"pointer" }}>
                          <button id='tableButton' >
                            Threat
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody id='table-list' className="scrolling-body">
                        {myBeasts && myBeasts.map((section, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'evenRow' : 'oddRow'} id={mySelection === index ? "chosenRow" : ""} onClick={() => handleSelection(index)} style={{ cursor:"pointer" }}>
                            <td>
                              {section.name}
                            </td>
                            <td>
                              {section.type}
                            </td>
                            <td>
                              {section.threat}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                  </table>
              </div>
          </div>
          
          <div id='reference-info'>
              <Beast info={myBeasts[mySelection]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bestiary;
