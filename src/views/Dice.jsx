/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';

function Dice() {
    const [myNum, setNum] = useState(0);
    const [myView, setView] = useState(true);
 
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
 
    const handleClick = () => {
      setNum(randomNumberInRange(1, 6));
    };

    return (
      <>
      <div id='dicebox'>    
        {myView ? 
        <div className='dicebox-footer'>
          <button id='filterSelected' onClick={() => setView(false)}>
              Dice Roller
          </button>
        </div>
        :
        <div>
          <div className='dicebox-header'>
            <button id='filterSelected' onClick={() => setView(true)}>
                Close Dice Roller
            </button>
          </div>
          <div className='dicebox-body'>
            <h2>Number is: {myNum}</h2>
          </div>
          <div className='dicebox-footer'>
            <button id='filterSelected' onClick={handleClick}>
                Click Me Generate
            </button>
          </div>
        </div>
        }
      </div>
      </>
    )
  }
  
  export default Dice
  