/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Opener from './Overview/Opener';
import Lands from './Overview/Lands';
import People from './Overview/People';
import Lingo from './Overview/Lingo';

function Overview(props) {
    const [mySection, setSecion] = useState(0);
  
    function handleSection(sctNum) {
      setSecion(sctNum);
    }

    const sections = [
      { title: 'Opening', onClick: () => handleSection(0) },
      { title: 'The Lands', onClick: () => handleSection(1) },
      { title: 'The People', onClick: () => handleSection(2) },
      { title: 'Modern Slang', onClick: () => handleSection(3) },
      { title: 'Tech & Trade', onClick: () => handleSection(4) },
      { title: 'Law & Crime', onClick: () => handleSection(5) },
      { title: 'Religious Beliefs', onClick: () => handleSection(6) },
      { title: 'Beasts & Monsters', onClick: () => handleSection(7) },
      { title: 'Metallic Magic', onClick: () => handleSection(8) }
    ];

    return (
        < >
        <div className='mobMargin' style={{marginTop:"15px"}}>
          <ol id='list'>
            <h3 className='notButter'>Overview</h3>
            {sections.map((section, index) => (
              <li  id="nav-list" className={mySection === index ? "nav-chosen" : "nav-unchosen"} key={index}>
                <button className="index-button" onClick={section.onClick}>
                  <span id="bold">{section.title}</span>
                </button>
              </li>
            ))}
          </ol> 
        </div>
        <div id='info'>
            { mySection === 0 && <Opener lore={props.lore.opening} title={"A World Transformed"} /> }
            { mySection === 1 && <Lands lore={props.lore.lands}/> }
            { mySection === 2 && <People lore={props.lore.people}/> }
            { mySection === 3 && <Lingo lore={props.lore.people.lingo}/> }
            { mySection === 4 && <Opener lore={props.lore.tech} title={"Technology, Trade, & Commerce"} /> }
            { mySection === 5 && <Opener lore={props.lore.law} title={"Crime & Law Enforcement"} /> }
            { mySection === 6 && <Opener lore={props.lore.belief} title={"Beliefs"} /> }
            { mySection === 7 && <Opener lore={props.lore.beasts} title={"Beasts & Monsters"} /> }
            { mySection === 8 && <Opener lore={props.lore.magic} title={"Magic"} /> }
        </div>
        </>
    )
}

export default Overview
