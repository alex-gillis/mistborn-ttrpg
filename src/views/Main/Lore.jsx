/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Overview from '../Lore/Overview';
import Locals from '../Lore/Locals';

function Lore(props) {
    const [myPage, setPage] = useState(0);

    function handlePage(pgNum) {
        setPage(pgNum);
    }

    const pages = [
        { title: 'Overview', className: myPage === 0 ? 'selected' : 'unselected', onClick: () => handlePage(0) },
        { title: 'Locations', className: myPage === 1 ? 'selected' : 'unselected', onClick: () => handlePage(1) }
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
            { myPage === 0 && <Overview lore={props.lore[0]}/> }
            { myPage === 1 && <Locals basin={props.lore[1]} roughs={props.lore[2]} strange={props.lore[3]} />}
        </div>
        </>
    )
}

export default Lore
