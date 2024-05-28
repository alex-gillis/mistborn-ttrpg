/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Basic from './Sections/Basic';
import Beats from './Sections/Beats';
import Rolls from './Sections/Rolls';
import Types from './Sections/Types';
import Pools from './Sections/Pools';
import Difficulty from './Sections/Difficulty';
import Rolling from './Sections/Rolling';
import Outcome from './Sections/Outcome';
import Complicate from './Sections/Complicate';
import Nudges from './Sections/Nudges';

const Basics = (props) => {
    const [mySection, setSecion] = useState(0);
  
    function handleSection(sctNum) {
      setSecion(sctNum);
    }

    const sections = [
      { title: 'Game Basics', onClick: () => handleSection(0) },
      { title: 'Beats & Breathers', onClick: () => handleSection(1) },
      { title: 'When to Roll?', onClick: () => handleSection(2) },
      { title: 'Types of Rolls', onClick: () => handleSection(3) },
      { title: 'Dice Pools', onClick: () => handleSection(4) },
      { title: 'Difficulty', onClick: () => handleSection(5) },
      { title: 'Rolling the Dice', onClick: () => handleSection(6) },
      { title: "Outcomes", onClick: () => handleSection(7) },
      { title: 'Complications', onClick: () => handleSection(8) },
      { title: 'Nudges', onClick: () => handleSection(9) }
    ];

    return (
        < >
        <div className='mobMargin' style={{marginTop:"15px"}}>
          <ol id='list'>
            <h3>Basics</h3>
            {sections.map((section, index) => (
              <li  id="nav-list" key={index}>
                <button className="index-button" onClick={section.onClick}>
                  <span id="bold">{section.title}</span>
                </button>
              </li>
            ))}
          </ol> 
        </div>
        <div id='info'>
            {mySection === 0  && <Basic basic={props.game.basic}/>}
            {mySection === 1  && <Beats beat={props.game.beats} breath={props.game.breathers} />}
            {mySection === 2  && <Rolls rolls={props.game.rolls} />}
            {mySection === 3  && <Types types={props.game.types} />}
            {mySection === 4  && <Pools game={props.game} />}
            {mySection === 5  && <Difficulty diff={props.game.difficulty} />}
            {mySection === 6  && <Rolling rolling={props.game.rolling} />}
            {mySection === 7  && <Outcome outcome={props.game.outcome} describing={props.game.describing} not={props.game.not}/>}
            {mySection === 8  && <Complicate complication={props.game.complication} />}
            {mySection === 9  && <Nudges nudges={props.game.nudges} />}
        </div>
        </>
    )
}

export default Basics
