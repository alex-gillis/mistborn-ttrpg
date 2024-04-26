/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Terms from './Reference/Terms';

function Reference(props) {
  const [myPage, setPage] = useState(0);

  function handlePage(pgNum) {
      setPage(pgNum);
  }

  const pages = [
    { title: 'Game Terms', className: myPage === 0 ? 'selected' : 'unselected', onClick: () => handlePage(2) }
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
            { myPage === 0 && <Terms gameTerms={props.creation[2].gameTerms}/> }
        </div>
        
    </>
  )
}
  
export default Reference
  