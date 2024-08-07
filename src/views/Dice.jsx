/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react';
import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceSix } from '@fortawesome/free-solid-svg-icons';

function Dice() {
  const [myView, setView] = useState(true);
  const [myDice, setDice] = useState(2);
  const [myRolls, setRolls] = useState([]);
  // const [myPair, setPair] = useState(0);
  // const [myNudges, setNudges] = useState(0);
  const [myLogs, setLogs] = useState([]);

  const handleDice = (event) => {
    setDice(event.target.value);
  };

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const countDice = (array, target) => {
    return array.reduce((count, currentValue) => {
      return currentValue === target ? count + 1 : count;
    }, 0);
  };

  const handleRoll = () => {
    const newRolls = Array.from({ length: myDice }, () => randomNumberInRange(1, 6));
    setRolls(newRolls);
  };

  useEffect(() => {
    if (myRolls.length > 0) {
      const newPair =
          countDice(myRolls, 5) >= 2 ? 5 :
          countDice(myRolls, 4) >= 2 ? 4 :
          countDice(myRolls, 3) >= 2 ? 3 :
          countDice(myRolls, 2) >= 2 ? 2 :
          countDice(myRolls, 1) >= 2 ? 1 : 0;

      // setPair(newPair);
      const nudgesCount = countDice(myRolls, 6);
      // setNudges(nudgesCount);

      const logData = {
          pair: newPair,
          nudges: nudgesCount,
          rolls: myRolls
      };

      setLogs((prevLogs) => [...prevLogs, logData]);
    }
  }, [myRolls]);

  return (
    <>
    <div id='dicebox'>    
      {myView ? 
      <div className='dicebox-footer'>
        <FontAwesomeIcon icon={faDiceSix} size="2x" onClick={() => setView(false)} />
      </div>
      :
      <div>
        <div className='dicebox-header'>
          <button id='filterSelected' onClick={() => setView(true)}>
              Close Dice Roller
          </button>
        </div>
        {myRolls.length === 0 ?
          <div className='dicebox-body'>
          </div>
        :
          <div className='dicebox-body'>
            {/* <h3>Highest Pair: {myPair}</h3>
            <h3>Nudges: {myNudges}</h3> */}
            {myLogs.map((info, index) => (
              <div key={index} style={{marginBottom:'5px', borderBottom:'0.05px', borderBottomStyle:'solid', borderColor:'white'}}>
                  Highest Pair: {info.pair} <br/> 
                  Nudges: {info.nudges} <br/>
                  Rolls: {info.rolls}
              </div>
            ))}
          </div>
        }
        <div className='dicebox-footer'>
          <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth:'124px', color:'goldenrod', border:'0.05px solid goldenrod', maxWidth:'100px' }}>
              <InputLabel id="demo-simple-select-label" sx={{ color:'goldenrod', marginLeft:'15px' }}>How many dice?</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myDice} onChange={handleDice} sx={{ color:'white' }}>
                  <MenuItem 
                      style={{fontWeight:"bolder", fontSize:"large"}} 
                      value={2}>
                          2 dice
                  </MenuItem>
                  <MenuItem 
                      style={{fontWeight:"bolder", fontSize:"large"}} 
                      value={3}>
                          3 dice
                  </MenuItem>
                  <MenuItem 
                      style={{fontWeight:"bolder", fontSize:"large"}} 
                      value={4}>
                          4 dice
                  </MenuItem>
                  <MenuItem 
                      style={{fontWeight:"bolder", fontSize:"large"}} 
                      value={5}>
                          5 dice
                  </MenuItem>
                  <MenuItem 
                      style={{fontWeight:"bolder", fontSize:"large"}} 
                      value={6}>
                          6 dice
                  </MenuItem>
                  <MenuItem 
                      style={{fontWeight:"bolder", fontSize:"large"}} 
                      value={7}>
                          7 dice
                  </MenuItem>
                  <MenuItem 
                      style={{fontWeight:"bolder", fontSize:"large"}} 
                      value={8}>
                          8 dice
                  </MenuItem>
                  <MenuItem 
                      style={{fontWeight:"bolder", fontSize:"large"}} 
                      value={9}>
                          9 dice
                  </MenuItem>
                  <MenuItem 
                      style={{fontWeight:"bolder", fontSize:"large"}} 
                      value={10}>
                          10 dice
                  </MenuItem>
              </Select>
          </FormControl>
          <button id='filterSelected' style={{minWidth:'25px', paddingLeft:'4px', paddingRight:'4px', height:'44px'}} onClick={handleRoll}>
              Roll
          </button>
        </div>
      </div>
      }
    </div>
    </>
    )
  }
  
  export default Dice
  