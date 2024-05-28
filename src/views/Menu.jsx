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
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorE2, setAnchorE2] = React.useState(null);
    const regOpen = Boolean(anchorE2);
    const handleRegClick = (event) => {
        setAnchorEl(event.currentTarget);
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
        "/mistborn-ttrpg/rules",
        "/mistborn-ttrpg/contests",
        "/mistborn-ttrpg/conflicts",
        "/mistborn-ttrpg/standing"
    ]

    const creation = [
        "/mistborn-ttrpg/creation",
        "/mistborn-ttrpg/samples",
        "/mistborn-ttrpg/building",
        "/mistborn-ttrpg/improvement"
    ]

    const lore = [
        "/mistborn-ttrpg/lore",
        "/mistborn-ttrpg/locations",
        "/mistborn-ttrpg/people",
        "/mistborn-ttrpg/history",
        "/mistborn-ttrpg/religion"
    ]

    const reference = [
        "/mistborn-ttrpg/metal",
        "/mistborn-ttrpg/props",
        "/mistborn-ttrpg/stunts",
        "/mistborn-ttrpg/terms"
    ];

    const ruleSelect = rules.some(path => pathname.includes(path));
    const createSelect = creation.some(path => pathname.includes(path));
    const loreSelect = lore.some(path => pathname.includes(path));
    const refSelect = reference.some(path => pathname.includes(path));

    const metal = pathname.includes("/mistborn-ttrpg/metal");
    const props = pathname.includes("/mistborn-ttrpg/props");
    const stunts = pathname.includes("/mistborn-ttrpg/stunts");
    const terms = pathname.includes("/mistborn-ttrpg/terms");
    

    const pages = [
        { title: 'Home', link: "/mistborn-ttrpg/", className: pathname === "/mistborn-ttrpg/" ? 'selected' : 'unselected', onClick: handlePageChange },
        { title: 'Rules', link: "/mistborn-ttrpg/rules", className: ruleSelect ? 'selected' : 'unselected', onClick: handlePageChange },
        { title: 'Creation', link: "/mistborn-ttrpg/creation", className: createSelect ? 'selected' : 'unselected', onClick: handlePageChange },
        { title: 'Lore', link: "/mistborn-ttrpg/lore", className: loreSelect ? 'selected' : 'unselected', onClick: handlePageChange },
        {
            title: 'References', 
            className: refSelect || mySelection ? 'selected' : 'unselected',
            classDrop: mySelection ? 'dropDown' : 'pickUp', 
            onClick: toggleMenu,
            subpages: [
                { title: 'Metallurgy', link: "/mistborn-ttrpg/metallurgy", subclassName: metal ? 'dropSelected' : 'dropUnselected' },
                { title: 'Props', link: "/mistborn-ttrpg/props", subclassName: props ? 'dropSelected' : 'dropUnselected' },
                { title: 'Stunts', link: "/mistborn-ttrpg/stunts", subclassName: stunts ? 'dropSelected' : 'dropUnselected' },
                { title: 'Game Terms', link: "/mistborn-ttrpg/terms", subclassName: terms ? 'dropSelected' : 'dropUnselected' }
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
                                        Reference
                                    </button>
                                    <Submenu
                                        id="demo-positioned-menu"
                                        anchorEl={anchorE2}
                                        open={regOpen}
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
                                                <MenuItem onClick={handleClose}>
                                                    <span style={{width:"102.5px"}} onClick={() => handleRefPageChange(subpage.link)}>
                                                        {subpage.title}
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
                        onClick={handleClick}
                    >
                        Menu
                    </button>
                    <Submenu
                        id="demo-positioned-menu"
                        anchorEl={anchorEl}
                        open={mobOpen}
                        onClose={handleClose}
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
                                                    <MenuItem onClick={handleClose}>
                                                        <span style={{width:"102.5px"}} onClick={() => handleRefPageChange(subpage.link)}>
                                                            <span id="bold">{subpage.title}</span>
                                                        </span>
                                                    </MenuItem>
                                                </span>
                                            ))}
                                    </span>
                                ) : (
                                    <MenuItem onClick={handleClose}>
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

