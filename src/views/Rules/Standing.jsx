/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Intro from './Standing/Intro'
import Resources from './Standing/Resources'
import Influence from './Standing/Influence'
import Spirit from './Standing/Spirit';

const Standing = (props) => {
    const [mySection, setSecion] = useState(0);
  
    function handleSection(sctNum) {
      setSecion(sctNum);
    }

    const sections = [
      { title: 'How Standing Works', onClick: () => handleSection(0) },
      { title: 'Resources', onClick: () => handleSection(1) },
      { title: 'Influence', onClick: () => handleSection(2) },
      { title: 'Spirit', onClick: () => handleSection(3) }
    ];

    return (
        < >
        <div className='mobMargin' style={{marginTop:"15px"}}>
          <ol id='list'>
            <h3>Standings</h3>
            {sections.map((section, index) => (
              <li id="nav-list" className={mySection === index ? "nav-chosen" : "nav-unchosen"} key={index}>
                <button className="index-button" onClick={section.onClick}>
                  <span id="bold">{section.title}</span>
                </button>
              </li>
            ))}
          </ol> 
        </div>
        <div id='info'>
            {mySection === 0  && <Intro intro={props.game.intro}/>}
            {mySection === 1  && <Resources resources={props.game.resources}/>}
            {mySection === 2  && <Influence influence={props.game.influence} />}
            {mySection === 3  && <Spirit spirit={props.game.spirit} />}
        </div>
        </>
    )
}

export default Standing
