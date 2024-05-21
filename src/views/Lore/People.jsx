/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import KolossOverview from './People/Koloss/Overview';
import KolossAppearance from './People/Koloss/Appearance';
import KolossHuman from './People/Koloss/Human';
import KolossSociety from './People/Koloss/Society';
import KolossPsychology from './People/Koloss/Psychology';
import MistFerr from './People/Koloss/MistFerr';
import Playing from './People/Koloss/Playing';
import TerrisOverview from './People/Terris/Overview';
import Structure from './People/Terris/Structure';
import Community from './People/Terris/Community';
import Outside from './People/Terris/Outside';
import History from './People/Terris/History';
import Villages from './People/Terris/Villages';
import Fundamentalist from './People/Terris/Fundamental';

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
      { title: 'In Koloss Society', onClick: () => handleSection(17) },
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
        <ol id='list'>
          <h3 className='notButter'>Koloss Tribes</h3>
          {koloss.map((section, index) => (
            <li id="nav-list" key={index}>
              <button className="index-button" onClick={section.onClick}>
                <span id="bold">{section.title}</span>
              </button>
            </li>
          ))}
          <h3>Terris Enclaves</h3>
          {terris.map((section, index) => (
            <li id="nav-list" key={index}>
              <button className="index-button" onClick={section.onClick}>
                <span id="bold">{section.title}</span>
              </button>
            </li>
          ))}
          <h3>Faceless Immortals</h3>
          {kandra.map((section, index) => (
            <li id="nav-list" key={index}>
              <button className="index-button" onClick={section.onClick}>
                <span id="bold">{section.title}</span>
              </button>
            </li>
          ))}
          <h3>Malwish People</h3>
          {malwish.map((section, index) => (
            <li id="nav-list" key={index}>
              <button className="index-button" onClick={section.onClick}>
                <span id="bold">{section.title}</span>
              </button>
            </li>
          ))}
        </ol> 
        <div id='info'>
            { mySection === 0 && <KolossOverview info={props.koloss} /> }
            { mySection === 1 && <KolossAppearance info={props.koloss} /> }
            { mySection === 2 && <KolossHuman info={props.koloss} /> }
            { mySection === 3 && <KolossSociety info={props.koloss} /> }
            { mySection === 4 && <KolossPsychology info={props.koloss} /> }
            { mySection === 5 && <MistFerr info={props.koloss} /> }
            { mySection === 6 && <Playing info={props.koloss.playing} /> }
            
            { mySection === 7 && <TerrisOverview info={props.terris} /> }
            { mySection === 8 && <Structure info={props.terris.structure} /> }
            { mySection === 9 && <Community info={props.terris} /> }
            { mySection === 10 && <Outside info={props.terris} /> }
            { mySection === 11 && <History info={props.terris} /> }
            { mySection === 12 && <Villages info={props.terris} /> }
            { mySection === 13 && <Fundamentalist info={props.terris} /> }
        </div>
        </>
    )
}

export default People
