/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Belief from './Religion/Belief';
import Survivor from './Religion/Survivor';
import Path from './Religion/Path';
import Sliver from './Religion/Sliver';
import Trell from './Religion/Trell';

function Religion(props) {
    const [mySection, setSecion] = useState(0);
  
    function handleSection(sctNum) {
      setSecion(sctNum);
    }

    const religion = [
      { title: 'Belief & Worship', onClick: () => handleSection(0) },
      { title: 'Survivorism', onClick: () => handleSection(1) },
      { title: 'The Path', onClick: () => handleSection(2) },
      { title: 'Sliverism', onClick: () => handleSection(3) },
      { title: 'Trelagism & Trellism', onClick: () => handleSection(4) }
    ];


    return (
        < >
        <div className='mobMargin' style={{marginTop:"15px"}}>
          <ol id='list'>
            <h3>Belief & Worship</h3>
            {religion.map((section, index) => (
              <li  id="nav-list" key={index}>
                <button className="index-button" onClick={section.onClick}>
                  <span id="bold">{section.title}</span>
                </button>
              </li>
            ))}
          </ol> 
        </div>
        <div id='info'>
            { mySection === 0 && <Belief info={props.religion.intro} /> }
            { mySection === 1 && <Survivor info={props.religion.survivor} /> }
            { mySection === 2 && <Path info={props.religion.path} /> }
            { mySection === 3 && <Sliver info={props.religion.sliver} /> }
            { mySection === 4 && <Trell info={props.religion.trell} /> }
        </div>
        </>
    )
}

export default Religion
