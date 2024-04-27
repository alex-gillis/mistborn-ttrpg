/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Basics from '../Rules/Basics';

function Rules(props) {
  const [myPage, setPage] = useState(0);

  function handlePage(pgNum) {
      setPage(pgNum);
  }


  const pages = [
    { title: 'Game Basics', className: myPage === 0 ? 'selected' : 'unselected', onClick: () => handlePage(2) }
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
            { myPage === 0 && <Basics game={props.game[0]} />}
        </div>
        
    </>
  )
}
  
export default Rules
  