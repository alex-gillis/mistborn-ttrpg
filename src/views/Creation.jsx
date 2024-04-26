/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Samples from './Creation/Samples';
import Starting from './Creation/Starting';
import Terms from './Reference/Terms';
import Build from './Creation/Build';
import Improvement from './Creation/Improvement';

function Creation(props) {
    const [myPage, setPage] = useState(0);

    function handlePage(pgNum) {
        setPage(pgNum);
    }

    const pages = [
        { title: 'Getting Started', className: myPage === 0 ? 'selected' : 'unselected', onClick: () => handlePage(0) },
        { title: 'Sample Characters', className: myPage === 1 ? 'selected' : 'unselected', onClick: () => handlePage(1) },
        { title: 'Building Characters', className: myPage === 3 ? 'selected' : 'unselected', onClick: () => handlePage(3) },
        { title: 'Improving Characters', className: myPage === 4 ? 'selected' : 'unselected', onClick: () => handlePage(4) }
    ];

  return (
    <>
        <div id="startHead">
            {pages.map((page, index) => (
                <button key={index} id="head-button" className={page.className} onClick={page.onClick}>
                    <span id="bold">{page.title}</span>
                </button>
            ))}
        </div>
        <div id='creation' >
            { myPage === 0 && <Starting create={props.creation[0]}/> }
            { myPage === 1 && <Samples era1={props.creation[1].era1Samples} era2={props.creation[1].era2Samples} rogues={props.rogues}/> }
            { myPage === 2 && <Terms gameTerms={props.creation[2].gameTerms}/> }
            { myPage === 3 && <Build start={props.creation[3]} building={props.creation[4]}  propped={props.propped} built={props.creation[6]} /> }
            { myPage === 4 && <Improvement improvement={props.creation[5]} /> }
        </div>
        
    </>
  )
}
  
export default Creation
  