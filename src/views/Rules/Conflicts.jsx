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
// Physical Imports
import PhyIntro from './Physical/Intro';
import PhyInjuries from './Physical/Injuries';
import PhyCircumstance from './Physical/Cirumstance';
import Range from './Physical/Range';
import Weapon from './Physical/Weapons';
import Armor from './Physical/Armor';
import PhyTactics from './Physical/Tactics';
import Guns from './Physical/Guns';
import Sample from './Physical/Sample';
// Social Imports
import SocIntro from './Social/Intro';
import SocInjuries from './Social/Injuries';
import SocCircumstance from './Social/Circumstance';
import SocExample from './Social/Example';
import SocTactics from './Social/Tactics';
// Mental Imports
import MenIntro from './Mental/Intro';
import MenInjuries from './Mental/Injuries';
import MenCircumstance from './Mental/Circumstance';
import MenExample from './Mental/Example';
import MenTactics from './Mental/Tactics';

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
      { title: 'Describing Basics', onClick: () => handleSection(11) }
    ];

    const physicals = [
      { title: 'Physical Conflicts', onClick: () => handleSection(12) },
      { title: 'Physical Injury', onClick: () => handleSection(13) },
      { title: 'Circumstances', onClick: () => handleSection(14) },
      { title: 'Range & Movement', onClick: () => handleSection(15) },
      { title: 'Weapons & Armor', onClick: () => handleSection(16) },
      { title: 'Combat Tactics', onClick: () => handleSection(17) },
      { title: 'Guns & Gunplay', onClick: () => handleSection(29) },
      { title: 'Combat Example', onClick: () => handleSection(18) }
    ];

    const socials = [
      { title: 'Social Conflicts', onClick: () => handleSection(19) },
      { title: 'Social Damage', onClick: () => handleSection(20) },
      { title: 'Circumstances', onClick: () => handleSection(21) },
      { title: 'Social Tactics', onClick: () => handleSection(22) },
      { title: 'Combat Example', onClick: () => handleSection(23) }
    ];

    const mentals = [
      { title: 'Mental Conflicts', onClick: () => handleSection(24) },
      { title: 'Mental Damage', onClick: () => handleSection(25) },
      { title: 'Circumstances', onClick: () => handleSection(26) },
      { title: 'Mental Tactics', onClick: () => handleSection(27) },
      { title: 'Combat Example', onClick: () => handleSection(28) }
    ];

    return (
        < >
        <ol id='list'>
          <h3>Basics</h3>
          {sections.map((section, index) => (
            <li  id="nav-list" key={index}>
              <button className="index-button" onClick={section.onClick}>
                <span id="bold">{section.title}</span>
              </button>
            </li>
          ))}
          <h3>Physical</h3>
          {physicals.map((section, index) => (
            <li  id="nav-list" key={index}>
              <button className="index-button" onClick={section.onClick}>
                <span id="bold">{section.title}</span>
              </button>
            </li>
          ))}
          <h3>Social</h3>
          {socials.map((section, index) => (
            <li  id="nav-list" key={index}>
              <button className="index-button" onClick={section.onClick}>
                <span id="bold">{section.title}</span>
              </button>
            </li>
          ))}
          <h3>Mental</h3>
          {mentals.map((section, index) => (
            <li  id="nav-list" key={index}>
              <button className="index-button" onClick={section.onClick}>
                <span id="bold">{section.title}</span>
              </button>
            </li>
          ))}
        </ol> 
        <div id='info'>
            {/* Conflict Basics Section */}
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
            {/* Physical Conflict Section */}
            {mySection === 12  && <PhyIntro intro={props.phys.intro}/>}
            {mySection === 13  && <PhyInjuries injury={props.phys.injuries}/>}
            {mySection === 14  && <PhyCircumstance circumstances={props.phys.circumstances}/>}
            {mySection === 15  && <Range range={props.phys.range}/>}
            {mySection === 16  && <Weapon weapons={props.phys.weapons}/>}
            {mySection === 16  && <Armor armor={props.phys.armor}/>}
            {mySection === 17  && <PhyTactics tactics={props.phys.tactics}/>}
            {mySection === 29  && <Guns gunplay={props.phys.gunplay}/>}
            {mySection === 18  && <Sample sample={props.phys.sample}/>}
            {/* Social Conflict Section */}
            {mySection === 19  && <SocIntro intro={props.soci.intro}/>}
            {mySection === 20  && <SocInjuries injury={props.soci.injury}/>}
            {mySection === 21  && <SocCircumstance circumstances={props.soci.circumstances}/>}
            {mySection === 22  && <SocTactics tactics={props.soci.tactics}/>}
            {mySection === 23  && <SocExample example={props.soci.example}/>}
            {/* Mental Conflict Section */}
            {mySection === 24  && <MenIntro intro={props.ment.intro}/>}
            {mySection === 25  && <MenInjuries injury={props.ment.injury}/>}
            {mySection === 26  && <MenCircumstance circumstances={props.ment.circumstances}/>}
            {mySection === 27  && <MenTactics tactics={props.ment.tactics}/>}
            {mySection === 28  && <MenExample example={props.ment.example}/>}
        </div>
        </>
    )
}

export default Conflicts
