/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react';
import Beast from './Bestiary/Beast';

function Bestiary(props) {
  const [mySelection, setSelection] = useState(0);

  const [myEraOne, setEraOne] = useState(true);
  // const [myEraOne] = useState(true);
  const [myFirstHeroes, setFirstHeroes] = useState(true);
  const [myFolk, setFolk] = useState(true);
  const [myNobles, setNobles] = useState(true);
  const [myRogues, setRogues] = useState(true);
  const [myMetal, setMetal] = useState(true);
  const [myMinistry, setMinistry] = useState(true);
  const [myKoloss, setKoloss] = useState(true);
  const [myWraiths, setWraiths] = useState(true);
  
  const [myEraTwo, setEraTwo] = useState(true);
  // const [myEraTwo] = useState(true);
  const [mySecondHeroes, setSecondHeroes] = useState(true);
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
    newBeasts = newBeasts.concat(props.era1.heroes);
    newBeasts = newBeasts.concat(props.era1.folk);
    newBeasts = newBeasts.concat(props.era1.nobles);
    newBeasts = newBeasts.concat(props.era1.rogues);
    newBeasts = newBeasts.concat(props.era1.metalborn);
    newBeasts = newBeasts.concat(props.era1.ministry);
    newBeasts = newBeasts.concat(props.era1.koloss);
    newBeasts = newBeasts.concat(props.era1.wraiths);

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
    if (myEraOne && myFirstHeroes) newBeasts = newBeasts.concat(props.era1.heroes);
    if (myEraOne && myFolk) newBeasts = newBeasts.concat(props.era1.folk);
    if (myEraOne && myNobles) newBeasts = newBeasts.concat(props.era1.nobles);
    if (myEraOne && myRogues) newBeasts = newBeasts.concat(props.era1.rogues);
    if (myEraOne && myMetal) newBeasts = newBeasts.concat(props.era1.metalborn);
    if (myEraOne && myMinistry) newBeasts = newBeasts.concat(props.era1.ministry);
    if (myEraOne && myKoloss) newBeasts = newBeasts.concat(props.era1.koloss);
    if (myEraOne && myWraiths) newBeasts = newBeasts.concat(props.era1.wraiths);

    if (myEraTwo && mySecondHeroes) newBeasts = newBeasts.concat(props.era2.heroes);
    if (myEraTwo && myCity) newBeasts = newBeasts.concat(props.era2.city);
    if (myEraTwo && myRoughs) newBeasts = newBeasts.concat(props.era2.roughs);
    if (myEraTwo && myMetals) newBeasts = newBeasts.concat(props.era2.metalborn);
    if (myEraTwo && myOutsider) newBeasts = newBeasts.concat(props.era2.outsider);
    if (myEraTwo && myMalwish) newBeasts = newBeasts.concat(props.era2.malwish);
    if (myEraTwo && myGangs) newBeasts = newBeasts.concat(props.era2.gangs);
    if (myEraTwo && myWildlife) newBeasts = newBeasts.concat(props.era2.wildlife);
    setBeasts(sortByMultipleComponents(newBeasts, ['name', 'type', 'threat']));
  }, [myCity, myWildlife, myRoughs, myMetals, myOutsider, myMalwish, myGangs, myEraOne, myEraTwo, props.era1, props.era2, myFirstHeroes, myFolk, myNobles, myRogues, myMetal, myKoloss, myWraiths, mySecondHeroes, myMinistry]);

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

  const eraFilters = [
    { title: 'Era One', select: myEraOne, onClick: () => setEraOne(!myEraOne)},
    { title: 'Era Two', select: myEraTwo, onClick: () => setEraTwo(!myEraTwo)}
  ];

  const finalFilters = [
    { title: 'Named', select: myFirstHeroes, onClick: () => setFirstHeroes(!myFirstHeroes) },
    { title: 'Ordinary Folk', select: myFolk, onClick: () => setFolk(!myFolk) },
    { title: 'Nobility', select: myNobles, onClick: () => setNobles(!myNobles) },
    { title: 'Metalborn', select: myMetal, onClick: () => setMetal(!myMetal) }
  ];

  const finalFiltersTwo = [
    { title: 'Rogues', select: myRogues, onClick: () => setRogues(!myRogues) },
    { title: 'Steel Ministry', select: myMinistry, onClick: () => setMinistry(!myMinistry) },
    { title: 'Koloss', select: myKoloss, onClick: () => setKoloss(!myKoloss) },
    { title: 'Mistwraith/Kandra', select: myWraiths, onClick: () => setWraiths(!myWraiths) }
  ];

  const mobileFinalFilters = [
    { title: 'Named', select: myFirstHeroes, onClick: () => setFirstHeroes(!myFirstHeroes) },
    { title: 'Ordinary', select: myFolk, onClick: () => setFolk(!myFolk) },
    { title: 'Nobility', select: myNobles, onClick: () => setNobles(!myNobles) },
    { title: 'Metalborn', select: myMetal, onClick: () => setMetal(!myMetal) }
  ];

  const mobileFinalFiltersTwo = [
    { title: 'Rogues', select: myRogues, onClick: () => setRogues(!myRogues) },
    { title: 'Ministry', select: myMinistry, onClick: () => setMinistry(!myMinistry) },
    { title: 'Koloss', select: myKoloss, onClick: () => setKoloss(!myKoloss) },
    { title: 'Wraiths/Kandra', select: myWraiths, onClick: () => setWraiths(!myWraiths) }
  ];

  const alloyFilters = [
    { title: 'Named', select: mySecondHeroes, onClick: () => setSecondHeroes(!mySecondHeroes) },
    { title: 'City Folks', select: myCity, onClick: () => setCity(!myCity) },
    { title: 'Roughs Folks', select: myRoughs, onClick: () => setRough(!myRoughs) },
    { title: 'Metalborn', select: myMetals, onClick: () => setMetals(!myMetals) }
  ];

  const alloyFiltersTwo = [
    { title: 'Gangs', select: myGangs, onClick: () => setGangs(!myGangs) },
    { title: 'Outsiders', select: myOutsider, onClick: () => setOutsider(!myOutsider) },
    { title: 'Malwish', select: myMalwish, onClick: () => setMalwish(!myMalwish) },
    { title: 'Wildlife', select: myWildlife, onClick: () => setWildlife(!myWildlife) }
  ];

  const mobileAlloyFilters = [
    { title: 'Named', select: mySecondHeroes, onClick: () => setSecondHeroes(!mySecondHeroes) },
    { title: 'Metalborn', select: myMetals, onClick: () => setMetals(!myMetals) },
    { title: 'Malwish', select: myMalwish, onClick: () => setMalwish(!myMalwish) },
    { title: 'Outsiders', select: myOutsider, onClick: () => setOutsider(!myOutsider) }
  ];

  const mobileAlloyFiltersTwo = [
    { title: 'City Folk', select: myCity, onClick: () => setCity(!myCity) },
    { title: 'Roughers', select: myRoughs, onClick: () => setRough(!myRoughs) },
    { title: 'Gangs', select: myGangs, onClick: () => setGangs(!myGangs) },
    { title: 'Wildlife', select: myWildlife, onClick: () => setWildlife(!myWildlife) }
  ];

  return (
    <div className='butter'>
      <div>
        <div id='diagram'>
          <div id='reference-table'>
              <div id='regMenu'>
                <table id='reference-size' className='reference-width' style={{margin:"auto"}}>
                  <tbody>
                    <tr>
                      <td></td>
                      {eraFilters.map((filter, index) => (
                        <td key={index}>
                          <button style={{width:"140px"}} id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                        </td>
                      ))}
                      <td></td>
                    </tr>
                    <tr>
                      <td colSpan={10}>
                        <h3 className='notButter'>Final Empire Era</h3>
                      </td>        
                    </tr>
                    <tr>
                      {finalFilters.map((filter, index) => (
                        <td key={index}>
                          <button style={{width:"140px"}} id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {finalFiltersTwo.map((filter, index) => (
                        <td key={index}>
                          <button style={{width:"140px"}} id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td colSpan={10}>
                        <h3 className='notButter'>Allow of Law Era</h3>
                      </td>        
                    </tr>
                    <tr>
                      {alloyFilters.map((filter, index) => (
                        <td key={index}>
                          <button style={{width:"140px"}} id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {alloyFiltersTwo.map((filter, index) => (
                        <td key={index}>
                          <button style={{width:"140px"}} id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id='mobiMenu'>
                <table style={{margin:"auto"}}>
                  <tbody>
                    <tr>
                      <td></td>
                      {eraFilters.map((filter, index) => (
                        <td key={index}>
                          <button style={{maxWidth:"125px"}} id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                        </td>
                      ))}
                      <td></td>
                    </tr>
                    <tr>
                      <td colSpan={10}>
                        <h3 className='notButter'>Final Empire Era</h3>
                      </td>        
                    </tr>
                    <tr>
                      {mobileFinalFilters.map((filter, index) => (
                        <td key={index}>
                          <button style={{maxWidth:"125px"}} id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {mobileFinalFiltersTwo.map((filter, index) => (
                        <td key={index}>
                          <button style={{maxWidth:"125px"}} id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td colSpan={10}>
                        <h3 className='notButter'>Allow of Law Era</h3>
                      </td>        
                    </tr>
                    <tr>
                      {mobileAlloyFilters.map((filter, index) => (
                        <td key={index}>
                          <button style={{maxWidth:"125px"}} id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {mobileAlloyFiltersTwo.map((filter, index) => (
                        <td key={index}>
                          <button style={{maxWidth:"125px"}} id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
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
                    <tbody id='table-list' className="scrolling-body" style={{maxHeight:"480px"}}>
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
