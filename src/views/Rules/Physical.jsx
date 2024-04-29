/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Intro from './Physical/Intro';
import Injuries from './Physical/Injuries';
import Circumstance from './Physical/Cirumstance';
import Range from './Physical/Range';
import Weapon from './Physical/Weapons';
import Armor from './Physical/Armor';
import Tactics from './Physical/Tactics';
import Sample from './Physical/Sample';

function Physical(props) {
    const [mySection, setSecion] = useState(0);
  
    function handleSection(sctNum) {
      setSecion(sctNum);
    }

    const sections = [
      { title: 'Physical Conflicts', onClick: () => handleSection(0) },
      { title: 'Physical Injury', onClick: () => handleSection(1) },
      { title: 'Circumstances', onClick: () => handleSection(2) },
      { title: 'Range & Movement', onClick: () => handleSection(3) },
      { title: 'Weapons & Armor', onClick: () => handleSection(4) },
      { title: 'Combat Tactics', onClick: () => handleSection(5) },
      { title: 'Combat Sample', onClick: () => handleSection(6) }
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
            {mySection === 1  && <Injuries injury={props.game.injuries}/>}
            {mySection === 2  && <Circumstance circumstances={props.game.circumstances}/>}
            {mySection === 3  && <Range range={props.game.range}/>}
            {mySection === 4  && <Weapon weapons={props.game.weapons}/>}
            {mySection === 4  && <Armor armor={props.game.armor}/>}
            {mySection === 5  && <Tactics tactics={props.game.tactics}/>}
            {mySection === 6  && <Sample sample={props.game.sample}/>}
        </div>
        </>
    )
}


  export default Physical