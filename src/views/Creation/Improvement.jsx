/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Basics from './Improvement/Basics';
import How from './Improvement/How';
import Spending from './Improvement/Spending';

function Improvement(props) {
    const [mySection, setSecion] = useState(0);
  
    function handleSection(sctNum) {
      setSecion(sctNum);
    }

    const sections = [
      { title: 'Improvement Basics', onClick: () => handleSection(0) },
      { title: 'How to Advanceme', onClick: () => handleSection(1) },
      { title: 'Spending Advancements', onClick: () => handleSection(2) }
    ];

    return (
        < >

        <ol id='list'>
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
        </div>
        </>
    )
}

export default Improvement
