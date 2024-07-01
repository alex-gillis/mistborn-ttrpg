/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
//Universal Info
import Overview from './People/Universal/Overview';
import Appearance from './People/Universal/Appearance';
import Human from './People/Universal/Human';
import Society from './People/Universal/Society';
import Psychology from './People/Universal/Psychology';
//Koloss Info
import MistFerr from './People/Koloss/MistFerr';
import Playing from './People/Koloss/Playing';
// Terris Info
import Structure from './People/Terris/Structure';
import Community from './People/Terris/Community';
import Outside from './People/Terris/Outside';
import History from './People/Terris/History';
import Villages from './People/Terris/Villages';
import Fundamentalist from './People/Terris/Fundamental';
//Kandra Info
import KandraSociety from './People/Kandra/Society';
import Identify from './People/Kandra/Identify';
import Death from './People/Kandra/Death';
import Harmony from './People/Kandra/Harmony';
import Hemalurgy from './People/Kandra/Hemalurgy';
import KandraPlaying from './People/Kandra/Playing';
//Malwish Info
import Culture from './People/Malwish/Culture';
import Technology from './People/Malwish/Technology';
import Character from './People/Malwish/Character';

function People(props) {
    const [mySection, setSecion] = useState(0);
  
    function handleSection(sctNum) {
      setSecion(sctNum);
    }

    const koloss = [
      { title: 'Overview', onClick: () => handleSection(0) },
      { title: 'Appearance', onClick: () => handleSection(1) },
      { title: 'In Human Society', onClick: () => handleSection(2) },
      { title: 'In Koloss Society', onClick: () => handleSection(3) },
      { title: 'Psychology', onClick: () => handleSection(4) },
      { title: 'Mistings & Ferrings', onClick: () => handleSection(5) },
      { title: 'Playing a Koloss', onClick: () => handleSection(6) }
    ];

    const terris = [
      { title: 'Overview', onClick: () => handleSection(7) },
      { title: 'Structure', onClick: () => handleSection(8) },
      { title: 'Community & \n Hierarchy', onClick: () => handleSection(9) },
      { title: 'Outside World', onClick: () => handleSection(10) },
      { title: 'History', onClick: () => handleSection(11) },
      { title: 'Village', onClick: () => handleSection(12) },
      { title: 'Fundamentalist \n Settlements', onClick: () => handleSection(13) }
    ];

    const kandra = [
      { title: 'Overview', onClick: () => handleSection(14) },
      { title: 'Appearance', onClick: () => handleSection(15) },
      { title: 'In Human Society', onClick: () => handleSection(16) },
      { title: 'In Kandra Society', onClick: () => handleSection(17) },
      { title: 'Identify', onClick: () => handleSection(18) },
      { title: 'Death', onClick: () => handleSection(19) },
      { title: 'Psychology', onClick: () => handleSection(20) },
      { title: 'Harmony', onClick: () => handleSection(21) },
      { title: 'Hemalurgy', onClick: () => handleSection(22) },
      { title: 'Playing a Kandra', onClick: () => handleSection(23) }
    ];

    const malwish = [
      { title: 'Overview', onClick: () => handleSection(24) },
      { title: 'Malwish Culture', onClick: () => handleSection(25) },
      { title: 'Malwish Technology', onClick: () => handleSection(26) },
      { title: 'Playing a Malwish', onClick: () => handleSection(27) }
    ];


    return (
        < >
        <div className='mobMargin' style={{marginTop:"15px"}}>
          <ol id='list'>
            <h3 className='notButter'>Koloss Tribes</h3>
            {koloss.map((section, index) => (
              <li id="nav-list" className={mySection === index ? "nav-chosen" : "nav-unchosen"} key={index}>
                <button className="index-button" onClick={section.onClick}>
                  <span id="bold">{section.title}</span>
                </button>
              </li>
            ))}
            <h3>Terris Enclaves</h3>
            {terris.map((section, index) => (
              <li id="nav-list" className={mySection === index + 7 ? "nav-chosen" : "nav-unchosen"} key={index}>
                <button className="index-button" onClick={section.onClick}>
                  <span id="bold">{section.title}</span>
                </button>
              </li>
            ))}
            <h3>Faceless Immortals</h3>
            {kandra.map((section, index) => (
              <li id="nav-list" className={mySection === index + 14 ? "nav-chosen" : "nav-unchosen"} key={index}>
                <button className="index-button" onClick={section.onClick}>
                  <span id="bold">{section.title}</span>
                </button>
              </li>
            ))}
            <h3>Malwish People</h3>
            {malwish.map((section, index) => (
              <li id="nav-list" className={mySection === index + 24 ? "nav-chosen" : "nav-unchosen"} key={index}>
                <button className="index-button" onClick={section.onClick}>
                  <span id="bold">{section.title}</span>
                </button>
              </li>
            ))}
          </ol> 
        </div>
        <div id='info'>
            { mySection === 0 && <Overview info={props.koloss} /> }
            { mySection === 1 && <Appearance info={props.koloss} /> }
            { mySection === 2 && <Human info={props.koloss} /> }
            { mySection === 3 && <Society info={props.koloss} /> }
            { mySection === 4 && <Psychology info={props.koloss} /> }
            { mySection === 5 && <MistFerr info={props.koloss} /> }
            { mySection === 6 && <Playing info={props.koloss.playing} /> }
            
            { mySection === 7 && <Overview info={props.terris} /> }
            { mySection === 8 && <Structure info={props.terris.structure} /> }
            { mySection === 9 && <Community info={props.terris} /> }
            { mySection === 10 && <Outside info={props.terris} /> }
            { mySection === 11 && <History info={props.terris} /> }
            { mySection === 12 && <Villages info={props.terris} /> }
            { mySection === 13 && <Fundamentalist info={props.terris} /> }

            { mySection === 14 && <Overview info={props.kandra} /> }
            { mySection === 15 && <Appearance info={props.kandra} /> }
            { mySection === 16 && <Human info={props.kandra} /> }
            { mySection === 17 && <KandraSociety info={props.kandra.ownSociety} /> }
            { mySection === 18 && <Identify info={props.kandra} /> }
            { mySection === 19 && <Death info={props.kandra} /> }
            { mySection === 20 && <Psychology info={props.kandra} /> }
            { mySection === 21 && <Harmony info={props.kandra} /> }
            { mySection === 22 && <Hemalurgy info={props.kandra.hemalurgy} /> }
            { mySection === 23 && <KandraPlaying info={props.kandra.playing} /> }
            
            { mySection === 24 && <Overview info={props.malwish} /> }
            { mySection === 25 && <Culture info={props.malwish.culture} /> }
            { mySection === 26 && <Technology info={props.malwish.technology} /> }
            { mySection === 27 && <Character info={props.malwish.character} /> }
        </div>
        </>
    )
}

export default People
