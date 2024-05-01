/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Intro from './Mental/Intro';
import Injuries from './Mental/Injuries';
import Circumstance from './Mental/Circumstance';
import Example from './Mental/Example';
import Tactics from './Mental/Tactics';

function Mental(props) {
    const [mySection, setSecion] = useState(0);
  
    function handleSection(sctNum) {
      setSecion(sctNum);
    }

    const sections = [
      { title: 'Mental Conflicts', onClick: () => handleSection(0) },
      { title: 'Mental Damage', onClick: () => handleSection(1) },
      { title: 'Circumstances', onClick: () => handleSection(2) },
      { title: 'Mental Tactics', onClick: () => handleSection(3) },
      { title: 'Combat Sample', onClick: () => handleSection(4) }
    ];

    return (
        < >

        <ol id='list'>
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
            {mySection === 1  && <Injuries injury={props.game.injury}/>}
            {mySection === 2  && <Circumstance circumstances={props.game.circumstances}/>}
            {mySection === 3  && <Tactics tactics={props.game.tactics}/>}
            {mySection === 4  && <Example example={props.game.example}/>}
        </div>
        </>
    )
}


  export default Mental