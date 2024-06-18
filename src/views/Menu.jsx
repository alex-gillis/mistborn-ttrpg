/* eslint-disable react/jsx-key */
// import Creation from './Main/Creation';
// import Lore from './Main/Lore';
// import Rules from './Main/Rules';
// import Intro from './Main/Intro';
// import Reference from './Main/Reference';
import '../styles/App.css';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';

import * as React from 'react';
import Submenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Menu = () => {
    // Component Menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const mobOpen = Boolean(anchorEl);
    const handleMobClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMobClose = () => {
        setAnchorEl(null);
    };

    const [anchorE2, setAnchorE2] = React.useState(null);
    const regOpen = Boolean(anchorE2);
    const handleRegClick = (event) => {
        setAnchorE2(event.currentTarget);
    };
    const handleRegClose = () => {
        setAnchorE2(null);
    };

    // Original Code
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();
    
    const [mySelection, setSelection] = useState(false);

    const handlePageChange = (link) => {
        navigate(link);
        setSelection(false);
    };
    
    const handleRefPageChange = (link) => {
        navigate(link);
    };
  
    function toggleMenu() {
      setSelection(!mySelection);
    }

    const rules = [
        "/rules",
        "/contests",
        "/conflicts",
        "/standing"
    ]

    const creation = [
        "/creation",
        "/samples",
        "/building",
        "/improvement"
    ]

    const lore = [
        "/lore",
        "/locations",
        "/people",
        "/history",
        "/religion"
    ]

    const reference = [
        "/metal",
        "/props",
        "/stunts",
        "/network",
        "/terms",
        "/bestiary"
    ];

    const ruleSelect = rules.some(path => pathname.includes(path));
    const createSelect = creation.some(path => pathname.includes(path));
    const loreSelect = lore.some(path => pathname.includes(path));
    const refSelect = reference.some(path => pathname.includes(path));

    const metal = pathname.includes("/metal");
    const props = pathname.includes("/props");
    const stunts = pathname.includes("/stunts");
    const networks = pathname.includes("/networks");
    const terms = pathname.includes("/terms");
    

    const pages = [
        { title: 'Home', link: "/", className: pathname === "/" ? 'selected' : 'unselected', onClick: handlePageChange },
        { title: 'Rules', link: "/rules", className: ruleSelect ? 'selected' : 'unselected', onClick: handlePageChange },
        { title: 'Creation', link: "/creation", className: createSelect ? 'selected' : 'unselected', onClick: handlePageChange },
        { title: 'Lore', link: "/lore", className: loreSelect ? 'selected' : 'unselected', onClick: handlePageChange },
        {
            title: 'References', 
            className: refSelect || mySelection ? 'selected' : 'unselected',
            classDrop: mySelection ? 'dropDown' : 'pickUp', 
            onClick: toggleMenu,
            subpages: [
                { title: 'Bestiary', link: "/bestiary", subclassName: props ? 'dropSelected' : 'dropUnselected' },
                { title: 'Metallurgy', link: "/metallurgy", subclassName: metal ? 'dropSelected' : 'dropUnselected' },
                { title: 'Networks', link: "/networks", subclassName: networks ? 'dropSelected' : 'dropUnselected' },
                { title: 'Props', link: "/props", subclassName: props ? 'dropSelected' : 'dropUnselected' },
                { title: 'Stunts', link: "/stunts", subclassName: stunts ? 'dropSelected' : 'dropUnselected' },
                { title: 'Terms', link: "/terms", subclassName: terms ? 'dropSelected' : 'dropUnselected' }
            ]
        },
    ];

    return (
        <>
            <header> 
                <nav id='regMenu'>
                    {pages.map((page, index) => (
                        <span key={index}>
                            {page.subpages ? (
                                <span>
                                    <button
                                        id="head-button" 
                                        className={regOpen ? 'selected' : page.className} 
                                        aria-controls={regOpen ? 'demo-positioned-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={regOpen ? 'true' : undefined}
                                        onClick={handleRegClick}
                                    >
                                        References
                                    </button>
                                    <Submenu
                                        id="demo-positioned-menu"
                                        anchorEl={anchorE2}
                                        open={regOpen}
                                        // onMouseOver={}
                                        // onMouseOut={}
                                        onClose={handleRegClose}
                                        anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                        }}
                                    >
                                        {page.subpages.map((subpage, subIndex) => (
                                            <span key={subIndex}>
                                                <MenuItem onClick={handleRegClose}>
                                                    <span style={{width:"102.5px"}} onClick={() => handleRefPageChange(subpage.link)}>
                                                        <span id="bold">{subpage.title}</span>
                                                    </span>
                                                </MenuItem>
                                            </span>
                                        ))}
                                    </Submenu>
                                </span>
                            ) : (
                                <button id="head-button" className={page.className} onClick={() => page.onClick(page.link)}>
                                    <span id="bold">{page.title}</span>
                                </button>
                            )}
                        </span>
                    ))}
                </nav>
                <nav id='mobiMenu'>
                    <button
                        id="head-button" 
                        className={mobOpen ? 'selected' : 'unselected'} 
                        aria-controls={mobOpen ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={mobOpen ? 'true' : undefined}
                        onClick={handleMobClick}
                    >
                        Menu
                    </button>
                    <Submenu
                        id="demo-positioned-menu"
                        anchorEl={anchorEl}
                        open={mobOpen}
                        // onMouseOver={handleMobClose}
                        // onMouseOut={handleMobClose}
                        onClose={handleMobClose}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                    >
                        {pages.map((page, index) => (
                            <span key={index}>
                                {page.subpages ? (
                                    <span>
                                        {page.subpages.map((subpage, subIndex) => (
                                            <span key={subIndex}>
                                                <MenuItem onClick={handleMobClose}>
                                                    <span style={{width:"102.5px"}} onClick={() => handleRefPageChange(subpage.link)}>
                                                        <span id="bold">{subpage.title}</span>
                                                    </span>
                                                </MenuItem>
                                            </span>
                                        ))}
                                    </span>
                                ) : (
                                    <MenuItem onClick={handleMobClose}>
                                        <span style={{width:"102.5px"}} onClick={() => handleRefPageChange(page.link)}>
                                            <span id="bold">{page.title}</span>
                                        </span>
                                    </MenuItem>
                                )}
                            </span>
                        ))}
                    </Submenu>
                </nav>
            </header>

            <Outlet />
        </>
    );
}

export default Menu;

