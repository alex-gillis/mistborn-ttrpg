/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Metallurgy from '../Main/Metallurgy';
import Terms from '../Reference/Terms';

function Reference(props) {
  const [myPage, setPage] = useState(0);

  function handlePage(pgNum) {
      setPage(pgNum);
  }

  const pages = [
    { title: 'Metallurgy', className: myPage === 0 ? 'selected' : 'unselected', onClick: () => handlePage(0) },
    { title: 'Game Terms', className: myPage === 1 ? 'selected' : 'unselected', onClick: () => handlePage(1) }
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
            { myPage === 0 && props.metals[0] && props.basics[0] && <Metallurgy basics={props.basics} metals={props.metals} /> }
            { myPage === 1 && <Terms gameTerms={props.creation[2].gameTerms}/> }
        </div>
        
    </>
  )
}
  
export default Reference
  