/* eslint-disable react/jsx-key */
import App from './App';
import '../styles/App.css';
import { useState } from 'react';

function Menu() {
    const [myPage, setPage] = useState(0);

    function handlePage(pgNum) {
        setPage(pgNum);
    }

  if (myPage === 0){
    return (
      <>
        <header>
          <button id="head-button" className='selected' onClick={() => handlePage(0)}>
            <span id="bold">Metallurgy</span>
          </button>
          <button id="head-button" className='unselected' onClick={() => handlePage(1)}>
            <span id="bold">Conflicts</span>
          </button>
        </header>

        <App />
      </>
    )
  } else if (myPage === 1){
    return (
      <>
        <header>
          <button id="head-button" className='unselected' onClick={() => handlePage(0)}>
            <span id="bold">Metallurgy</span>
          </button>
          <button id="head-button" className='selected' onClick={() => handlePage(1)}>
            <span id="bold">Conflicts</span>
          </button>
        </header>


      </>
    )
  }
}

export default Menu
