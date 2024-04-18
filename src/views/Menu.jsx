/* eslint-disable react/jsx-key */
import Metallurgy from './Metallurgy';
import Cultures from './Cultures';
import Intro from './Intro';
import '../styles/App.css';
import { useState, useEffect } from 'react';

function Menu() {
    const [myMetals, setMetals] = useState([]);
    const [myBasics, setBasics] = useState([]);


    useEffect(() => {
        const getMetals = async () => {
        try {
            const response = await fetch('./src/assets/information.json'); 
            if (!response.ok) {
            throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setMetals(data.metals); 
            setBasics (data.basics);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
    
        getMetals();
    }, []);
    
    const [myPage, setPage] = useState(0);

    function handlePage(pgNum) {
        setPage(pgNum);
    }

    const pages = [
        { title: 'Home', className: myPage === 0 ? 'selected' : 'unselected', onClick: () => handlePage(0) },
        { title: 'Cultures', className: myPage === 1 ? 'selected' : 'unselected', onClick: () => handlePage(1) },
        { title: 'Conflicts', className: myPage === 2 ? 'selected' : 'unselected', onClick: () => handlePage(2) },
        { title: 'Metallurgy', className: myPage === 3 ? 'selected' : 'unselected', onClick: () => handlePage(3) }
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
            
            { myPage === 0 && <Intro /> }
            { myPage === 1 && <Cultures /> }
            { myPage === 3 && myMetals[0] && myBasics[0] && <Metallurgy basics={myBasics} metals={myMetals} /> }
        </>
    );
}

export default Menu;

