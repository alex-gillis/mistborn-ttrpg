/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Basics from './Improvement/Basics';
import How from './Improvement/How';
import Spending from './Improvement/Spending';
import Advancement from './Improvement/Advancement';
import Improve from './Era2/Improve';
import Advance from './Era2/Advance';

function Improvement(props) {
    const [mySection, setSecion] = useState(0);
  
    function handleSection(sctNum) {
      setSecion(sctNum);
    }

    const sections = [
      { title: 'Improvement Basics', onClick: () => handleSection(0) },
      { title: 'How to Advance', onClick: () => handleSection(1) },
      { title: 'Advancing in Era 1 ', onClick: () => handleSection(2) },
      { title: 'List of Advancements', onClick: () => handleSection(3) },
      { title: 'Advancing in Era 2 ', onClick: () => handleSection(4) },
      { title: 'New Advancements ', onClick: () => handleSection(5) }
    ];

    return (
        < >

        <ol id='list'>
          <h3>Advancment</h3>
          {sections.map((section, index) => (
            <li  id="nav-list" className='basicBuild' key={index}>
              <button className="index-button" onClick={section.onClick}>
                <span id="bold">{section.title}</span>
              </button>
            </li>
          ))}
        </ol> 
        <div id='buildInfo'>
            {mySection === 0  && <Basics improvement={props.improvement}/>}
            {mySection === 1  && <How improvement={props.improvement}/>}
            {mySection === 2  && <Spending improvement={props.improvement}/>}
            {mySection === 3  && <Advancement improvement={props.improvement}/>}
            {mySection === 4  && <Improve info={props.alloy}/>}
            {mySection === 5  && <Advance info={props.alloy.advancements.new}/>}
        </div>
        </>
    )
}

export default Improvement
