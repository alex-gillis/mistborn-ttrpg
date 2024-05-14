/* eslint-disable react/jsx-key */
// import Creation from './Main/Creation';
// import Lore from './Main/Lore';
// import Rules from './Main/Rules';
// import Intro from './Main/Intro';
// import Reference from './Main/Reference';
import '../styles/App.css';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';

const Menu = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();
    
    const [mySection, setSecion] = useState(false);

    const handlePageChange = (link) => {
        navigate(link);
        setSecion(false);
    };
    
    const handleRefPageChange = (link) => {
        navigate(link);
    };
  
    function toggleMenu() {
      setSecion(!mySection);
    }

    const reference = [
        "/mistborn-ttrpg/metal",
        "/mistborn-ttrpg/props",
        "/mistborn-ttrpg/stunts",
        "/mistborn-ttrpg/terms"
    ];

    const rules = pathname.includes("/mistborn-ttrpg/rules");
    const creation = pathname.includes("/mistborn-ttrpg/creation");
    const lore = pathname.includes("/mistborn-ttrpg/lore");

    const isSelected = reference.some(path => pathname.includes(path));

    const metal = pathname.includes("/mistborn-ttrpg/metal");
    const props = pathname.includes("/mistborn-ttrpg/props");
    const stunts = pathname.includes("/mistborn-ttrpg/stunts");
    const terms = pathname.includes("/mistborn-ttrpg/terms");
    

    const pages = [
        { title: 'Home', link: "/mistborn-ttrpg/", className: pathname === "/mistborn-ttrpg/" ? 'selected' : 'unselected', onClick: handlePageChange },
        { title: 'Rules', link: "/mistborn-ttrpg/rules", className: rules ? 'selected' : 'unselected', onClick: handlePageChange },
        { title: 'Creation', link: "/mistborn-ttrpg/creation", className: creation ? 'selected' : 'unselected', onClick: handlePageChange },
        { title: 'Lore', link: "/mistborn-ttrpg/lore", className: lore ? 'selected' : 'unselected', onClick: handlePageChange },
        // { title: 'References', link: "/mistborn-ttrpg/references", className: references ? 'selected' : 'unselected' }
        {
            title: 'References', 
            className: isSelected || mySection ? 'selected' : 'unselected',
            classDrop: mySection ? 'dropDown' : 'pickUp', 
            onClick: toggleMenu,
            subpages: [
                { title: 'Metallurgy', link: "/mistborn-ttrpg/metallurgy", subclassName: metal ? 'selected' : 'unselected' },
                { title: 'Props', link: "/mistborn-ttrpg/props", subclassName: props ? 'selected' : 'unselected' },
                { title: 'Stunts', link: "/mistborn-ttrpg/stunts", subclassName: stunts ? 'selected' : 'unselected' },
                { title: 'Game Terms', link: "/mistborn-ttrpg/terms", subclassName: terms ? 'selected' : 'unselected' }
            ]
        },
    ];

    return (
        <>
            <header>
                <nav>
                    {pages.map((page, index) => (
                        <span key={index}>
                            {page.subpages ? (
                                <span className="dropdown">
                                    <button id="head-button" className={page.className} onClick={() => page.onClick(page.link)}>{page.title}</button>
                                    <div className={page.classDrop} >
                                        {page.subpages.map((subpage, subIndex) => (
                                            <button id="head-button" className={subpage.subclassName} key={subIndex} onClick={() => handleRefPageChange(subpage.link)}>
                                                {subpage.title}
                                            </button>
                                        ))}
                                    </div>
                                </span>
                            ) : (
                                // Render regular button if no subpages
                                <button id="head-button" className={page.className} onClick={() => page.onClick(page.link)}>
                                    <span id="bold">{page.title}</span>
                                </button>
                            )}
                        </span>
                    ))}
                </nav>
            </header>

            <Outlet />
            
            {/*{ myPage === 4 && <Reference basics={myBasics} creation={myCreations} metals={myMetals} stunts={myStunts} propped={myProps[1]}/> } */}
        </>
    );
}

export default Menu;

