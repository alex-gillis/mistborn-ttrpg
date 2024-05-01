/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Basics from '../Rules/Basics';
import Contests from '../Rules/Contests';
import Conflicts from '../Rules/Conflicts';
import Physical from '../Rules/Physical';
import Social from '../Rules/Social';
import Mental from '../Rules/Mental';

function Rules(props) {
  const [myPage, setPage] = useState(0);

  function handlePage(pgNum) {
      setPage(pgNum);
  }


  const pages = [
    { title: 'Basics', className: myPage === 0 ? 'selected' : 'unselected', onClick: () => handlePage(0) },
    { title: 'Contests', className: myPage === 1 ? 'selected' : 'unselected', onClick: () => handlePage(1) },
    { title: 'Conflicts', className: myPage === 2 ? 'selected' : 'unselected', onClick: () => handlePage(2) },
    { title: 'Physical', className: myPage === 3 ? 'selected' : 'unselected', onClick: () => handlePage(3) },
    { title: 'Social', className: myPage === 4 ? 'selected' : 'unselected', onClick: () => handlePage(4) },
    { title: 'Mental', className: myPage === 5 ? 'selected' : 'unselected', onClick: () => handlePage(5) }
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
            { myPage === 1 && <Contests game={props.game[1]} />}
            { myPage === 2 && <Conflicts game={props.game[2]} />}
            { myPage === 3 && <Physical game={props.game[3]} />}
            { myPage === 4 && <Social game={props.game[4]} />}
            { myPage === 5 && <Mental game={props.game[5]} />}
        </div>
        
    </>
  )
}
  
export default Rules
  