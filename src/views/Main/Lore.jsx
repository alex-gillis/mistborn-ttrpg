/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Overview from '../Lore/Overview';
import Locals from '../Lore/Locals';
import History from '../Lore/History';
import Religion from '../Lore/Religion';

function Lore(props) {
    const [myPage, setPage] = useState(0);

    function handlePage(pgNum) {
        setPage(pgNum);
    }

    const pages = [
        { title: 'Overview', className: myPage === 0 ? 'selected' : 'unselected', onClick: () => handlePage(0) },
        { title: 'Locations', className: myPage === 1 ? 'selected' : 'unselected', onClick: () => handlePage(1) },
        { title: 'History', className: myPage === 2 ? 'selected' : 'unselected', onClick: () => handlePage(2) },
        { title: 'Religion', className: myPage === 3 ? 'selected' : 'unselected', onClick: () => handlePage(3) }
    ];
    
    return (
        < >
        <div id="startHead">
        {pages.map((page, index) => (
            <button key={index} id="head-button" className={page.className} onClick={page.onClick}>
                <span id="bold">{page.title}</span>
            </button>
        ))}
        </div>
        <div id="creation">
            { myPage === 0 && <Overview lore={props.lore[0]} /> }
            { myPage === 1 && <Locals basin={props.lore[1]} roughs={props.lore[2]} strange={props.lore[3]} />}
            { myPage === 2 && <History history={props.lore[4]} />}
            { myPage === 3 && <Religion religion={props.lore[5]} />}
        </div>
        </>
    )
}

export default Lore
