/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Elendel from './Locals/Elendel';
import Transport from './Locals/Transport';
import Other from './Locals/Other';

function Locals(props) {
    const [mySection, setSecion] = useState(0);
  
    function handleSection(sctNum) {
      setSecion(sctNum);
    }

    const basin = [
      { title: 'Elendel', onClick: () => handleSection(0) },
      { title: 'Transport', onClick: () => handleSection(1) },
      { title: 'Other Cities', onClick: () => handleSection(2) },
    ];

    const rough = [
      { title: 'The Roughs', onClick: () => handleSection(3) },
      { title: 'Rough Travel', onClick: () => handleSection(4) },
      { title: 'Lawkeepers', onClick: () => handleSection(5) },
      { title: 'Roughs Economy', onClick: () => handleSection(6) },
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
            { mySection === 1 && <Transport info={props.basin.canals}/> }
            { mySection === 2 && <Other info={props.basin.other}/> }
        </div>
        </>
    )
}

export default Locals
