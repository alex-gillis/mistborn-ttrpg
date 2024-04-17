/* eslint-disable react/jsx-key */
import App from './App';
import '../styles/App.css';
import { useState } from 'react';

function Menu() {
    const [myPage, setPage] = useState(0);

    function handlePage(pgNum) {
        setPage(pgNum);
    }

    const pages = [
        { title: 'Basics', className: myPage === 0 ? 'selected' : 'unselected', onClick: () => handlePage(0) },
        { title: 'Conflicts', className: myPage === 1 ? 'selected' : 'unselected', onClick: () => handlePage(1) },
        { title: 'Metallurgy', className: myPage === 2 ? 'selected' : 'unselected', onClick: () => handlePage(2) }
    ];

    return (
        <>
            <header>
                {pages.map((page, index) => (
                    <button key={index} id="head-button" className={page.className} onClick={page.onClick}>
                        <span id="bold">{page.title}</span>
                    </button>
                ))}
            </header>

            <App />
        </>
    );
}

export default Menu;

