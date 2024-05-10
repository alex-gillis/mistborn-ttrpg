/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Intro from './Contests/Intro';
import Extended from './Contests/Extended';
import Other from './Contests/Other';
import Describing from './Contests/Describing';
import Sample from './Contests/Sample';

function Contests(props) {
    const [mySection, setSecion] = useState(0);
  
    function handleSection(sctNum) {
      setSecion(sctNum);
    }

    const sections = [
      { title: 'Contests', onClick: () => handleSection(0) },
      { title: 'Extended Contests', onClick: () => handleSection(1) },
      { title: 'Other Contest Rules', onClick: () => handleSection(2) },
      { title: 'Describing Contests', onClick: () => handleSection(3) },
      { title: 'Sample Contests', onClick: () => handleSection(4) }
    ];

    return (
        < >

        <ol id='list'>
          <h3 className='notButter'>Contests</h3>
          {sections.map((section, index) => (
            <li  id="nav-list" key={index}>
              <button className="index-button" onClick={section.onClick}>
                <span id="bold">{section.title}</span>
              </button>
            </li>
          ))}
        </ol> 
        <div id='info'>
            {mySection === 0  && <Intro intro={props.game.intro}/>}
            {mySection === 1  && <Extended extended={props.game.extended} />}
            {mySection === 2  && <Other other={props.game.other}/>}
            {mySection === 3  && <Describing describe={props.game.describe} />}
            {mySection === 4  && <Sample sample={props.game.sample} />}
        </div>
        </>
    )
}

export default Contests
