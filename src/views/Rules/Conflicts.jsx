/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Intro from './Conflicts/Intro';
import Setup from './Conflicts/Setup';
import Frame from './Conflicts/Frame';
import Groups from './Conflicts/Groups';
import Round from './Conflicts/Round';
import Damage from './Conflicts/Damage';
import Burden from './Conflicts/Burden';
import Yield from './Conflicts/Yield';
import Recovery from './Conflicts/Recovery';
import Describe from './Conflicts/Describe';
import Nudges from './Conflicts/Nudges';
import Complications from './Conflicts/Complications';

function Conflicts(props) {
    const [mySection, setSecion] = useState(0);
  
    function handleSection(sctNum) {
      setSecion(sctNum);
    }

    const sections = [
      { title: 'Conflict Basics', onClick: () => handleSection(0) },
      { title: 'Setting Up', onClick: () => handleSection(1) },
      { title: 'Framing the Scene', onClick: () => handleSection(2) },
      { title: 'Grouping Extras', onClick: () => handleSection(3) },
      { title: 'Round Breakdown', onClick: () => handleSection(4) },
      { title: 'Damage & Defeat', onClick: () => handleSection(5) },
      { title: 'Burdens', onClick: () => handleSection(6) },
      { title: 'Yielding', onClick: () => handleSection(7) },
      { title: 'Recovery', onClick: () => handleSection(8) },
      { title: 'Complications', onClick: () => handleSection(9) },
      { title: 'Nudges', onClick: () => handleSection(10) },
      { title: 'Describing', onClick: () => handleSection(11) }
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
            {mySection === 1  && <Setup setup={props.game.setup}/>}
            {mySection === 2  && <Frame frame={props.game.frame}/>}
            {mySection === 3  && <Groups grouping={props.game.grouping}/>}
            {mySection === 4  && <Round round={props.game.round}/>}
            {mySection === 5  && <Damage damage={props.game.round.damage} wounded={props.game.round.wounded} defeat={props.game.round.defeat} />}
            {mySection === 6  && <Burden burdens={props.game.round.burdens}/>}
            {mySection === 7  && <Yield yield={props.game.round.yield}/>}
            {mySection === 8  && <Recovery recovery={props.game.round.recovery} />}
            {mySection === 9  && <Complications complications={props.game.round.complications}/>}
            {mySection === 10  && <Nudges nudges={props.game.round.nudges}/>}
            {mySection === 11  && <Describe describe={props.game.round.describe} />}
        </div>
        </>
    )
}

export default Conflicts
