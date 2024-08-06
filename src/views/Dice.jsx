/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';

function Dice() {
    // const [myNum, setNum] = useState(0);
    const [myView, setView] = useState(true);
    const [myDice, setDice] = useState(2);
    const handleDice = (event) => { setDice(event.target.value); };
    const [myRolls, setRolls] = useState([]);
    const [myPair, setPair] = useState(0);
    const [myNudges, setNudges] = useState(0);
    const [myLogs, setLogs] = useState([]);
    
 
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
    
    const hasPairs = (arr, targetSum) => {
      const numSet = new Set();
      for (const num of arr) {
          const complement = targetSum - num;
          if (numSet.has(complement)) {
              return true; // Found a pair
          }
          numSet.add(num);
      }
      return false; // No pairs found
    };

    function countNudges(array) {
      return array.reduce((count, currentValue) => {
          return currentValue === 6 ? count + 1 : count;
      }, 0);
    }
 
    const handleRoll = () => {
      // setNum(randomNumberInRange(1, 6));
      
      let i = 0;

      while (i !== myDice) {
        let result = randomNumberInRange(1, 6);
        let newRolls = myRolls;

        newRolls.push(result);
        setRolls(newRolls);

        i++
      }

      if (myRolls.length !== 0) {
        if (hasPairs(myRolls, 5)) {
          setPair(5);
        } else if (hasPairs(myRolls, 4)) {
          setPair(4);
        } else if (hasPairs(myRolls, 3)) {
          setPair(3);
        } else if (hasPairs(myRolls, 2)) {
          setPair(2);
        } else if (hasPairs(myRolls, 1)) {
          setPair(1);
        } else {
          setPair(0);
        }

        setNudges(countNudges(myRolls));
      }
      
      setRolls([0]);
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
          {myRolls.length === 0 ?
            <div className='dicebox-body'>
              <br/>
            </div>
          :
            <div className='dicebox-body'>
              <h3>Highest Pair: {myPair}</h3>
              <h3>Nudges: {myNudges}</h3>
              {/* {filters.map((filter, index) => (
                <td key={index}>
                  <button id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                </td>
              ))} */}
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
  