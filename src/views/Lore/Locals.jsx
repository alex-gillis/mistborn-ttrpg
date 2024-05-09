/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Elendel from './Locals/Elendel';
import Transport from './Locals/Transport';
import Other from './Locals/Other';
import Groups from './Locals/Groups';
import Roughs from './Locals/Roughs';
import Travel from './Locals/Travel';
import Lawkeeper from './Locals/Lawkeeper';
import Northern from './Locals/Northern';
import Southern from './Locals/Southern';

function Locals(props) {
    const [mySection, setSecion] = useState(0);
  
    function handleSection(sctNum) {
      setSecion(sctNum);
    }

    const basin = [
      { title: 'Elendel', onClick: () => handleSection(0) },
      { title: 'Major Players', onClick: () => handleSection(1) },
      { title: 'Transport', onClick: () => handleSection(2) },
      { title: 'Other Cities', onClick: () => handleSection(3) },
    ];

    const rough = [
      { title: 'The Roughs', onClick: () => handleSection(4) },
      { title: 'Rough Travel', onClick: () => handleSection(5) },
      { title: 'Lawkeepers', onClick: () => handleSection(6) },
      { title: 'Northern Roughs', onClick: () => handleSection(7) },
      { title: 'Southern Roughs', onClick: () => handleSection(8) }
    ];

    return (
        < >
        <ol id='list'>
          <h3>Inside the Basin</h3>
          {basin.map((section, index) => (
            <li  id="nav-list" key={index}>
              <button className="index-button" onClick={section.onClick}>
                <span id="bold">{section.title}</span>
              </button>
            </li>
          ))}
          <h3>Outside the Basin</h3>
          {rough.map((section, index) => (
            <li  id="nav-list" key={index}>
              <button className="index-button" onClick={section.onClick}>
                <span id="bold">{section.title}</span>
              </button>
            </li>
          ))}
        </ol> 
        <div id='info'>
            { mySection === 0 && <Elendel info={props.basin} /> }
            { mySection === 1 && <Groups info={props.basin} /> }
            { mySection === 2 && <Transport info={props.basin.canals}/> }
            { mySection === 3 && <Other info={props.basin.other}/> }
            { mySection === 4 && <Roughs info={props.roughs}/> }
            { mySection === 5 && <Travel info={props.roughs.travel}/> }
            { mySection === 6 && <Lawkeeper info={props.roughs.lawkeeper}/> }
            { mySection === 7 && <Northern info={props.roughs.northern}/> }
            { mySection === 8 && <Southern info={props.roughs.southern}/> }
        </div>
        </>
    )
}

export default Locals
