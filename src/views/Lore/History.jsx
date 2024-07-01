/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Society from './History/Society';
import Early from './History/Early';
import Class from './History/Class';
import Beyond from './History/Beyond';

function History(props) {
    const [mySection, setSecion] = useState(0);
  
    function handleSection(sctNum) {
      setSecion(sctNum);
    }

    const history = [
      { title: 'History & Society', onClick: () => handleSection(0) },
      { title: 'Early Years', onClick: () => handleSection(1) },
      { title: 'Class System', onClick: () => handleSection(2) },
      { title: 'Beyond Basin', onClick: () => handleSection(3) },
    ];


    return (
        < >
        <div className='mobMargin' style={{marginTop:"15px"}}>
          <ol id='list'>
            <h3 className='notButter'>History & Society</h3>
            {history.map((section, index) => (
              <li  id="nav-list" className={mySection === index ? "nav-chosen" : "nav-unchosen"} key={index}>
                <button className="index-button" onClick={section.onClick}>
                  <span id="bold">{section.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </div> 
        <div id='info'>
            { mySection === 0 && <Society info={props.history} /> }
            { mySection === 1 && <Early info={props.history.early} /> }
            { mySection === 2 && <Class info={props.history.class} /> }
            { mySection === 3 && <Beyond info={props.history.beyond} /> }
        </div>
        </>
    )
}

export default History
