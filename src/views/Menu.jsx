/* eslint-disable react/jsx-key */
import Creation from './Main/Creation';
import Cultures from './Main/Cultures';
import Rules from './Main/Rules';
import Intro from './Main/Intro';
import Reference from './Main/Reference';
import { useState, useEffect } from 'react';
import '../styles/App.css';

function Menu() {
    const [myMetals, setMetals] = useState([]);
    const [myBasics, setBasics] = useState([]);
    const [myCreations, setCreations] = useState([]);
    const [myProps, setProps] = useState([]);
    const [myRogues, setRogues] = useState([]);
    const [myGames, setGames] = useState([]);
    const [myStunts, setStunts] = useState([]);


    useEffect(() => {
        const getMetals = async () => {
        try {
            const response = await fetch('./assets/information.json'); 
            if (!response.ok) {
            throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setMetals(data.metals); 
            setBasics (data.basics);
            setCreations (data.creation);
            setProps (data.propped);
            setRogues (data.rogues);
            setGames (data.game);
            setStunts (data.stunts);
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
        { title: 'Rules', className: myPage === 1 ? 'selected' : 'unselected', onClick: () => handlePage(1) },
        { title: 'Creation', className: myPage === 2 ? 'selected' : 'unselected', onClick: () => handlePage(2) },
        { title: 'Cultures', className: myPage === 3 ? 'selected' : 'unselected', onClick: () => handlePage(3) },
        { title: 'References', className: myPage === 4 ? 'selected' : 'unselected', onClick: () => handlePage(4) },
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
            { myPage === 1 && <Rules game={myGames}/> }
            { myPage === 2 && <Creation creation={myCreations} propped={myProps[0]} rogues={myRogues} /> }
            { myPage === 3 && <Cultures /> }
            { myPage === 4 && <Reference basics={myBasics} creation={myCreations} metals={myMetals} stunts={myStunts}/> }
        </>
    );
}

export default Menu;

