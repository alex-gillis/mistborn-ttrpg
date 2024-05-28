/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Elendel from './Locals/Basin/Elendel';
import Transport from './Locals/Basin/Transport';
import Other from './Locals/Basin/Other';
import Groups from './Locals/Basin/Groups';
import Roughs from './Locals/Roughs/Roughs';
import Travel from './Locals/Roughs/Travel';
import Lawkeeper from './Locals/Roughs/Lawkeeper';
import Northern from './Locals/Roughs/Northern';
import Southern from './Locals/Roughs/Southern';
import Frontier from './Locals/Frontiers/Frontier';
import Mountains from './Locals/Frontiers/Mountains';
import Deep from './Locals/Frontiers/Deep';
import Oceans from './Locals/Frontiers/Oceans';

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

    const frontier = [
      { title: 'The Frontiers', onClick: () => handleSection(9) },
      { title: 'The Mountains', onClick: () => handleSection(10) },
      { title: 'Deep Roughs', onClick: () => handleSection(11) },
      { title: 'Oceans and Beyond', onClick: () => handleSection(12) }
    ];


    return (
        < >
        <ol id='list'>
          <h3 className='notButter'>Inside the Basin</h3>
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
          <h3>Stranger Frontiers</h3>
          {frontier.map((section, index) => (
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

            { mySection === 9 && <Frontier info={props.strange}/> }
            { mySection === 10 && <Mountains info={props.strange.mountains}/> }
            { mySection === 11 && <Deep info={props.strange.deep}/> }
            { mySection === 12 && <Oceans info={props.strange.oceans}/> }
        </div>
        </>
    )
}

export default Locals
