/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Select, FormControl, FormControlLabel, Button, ButtonGroup, TextField, InputLabel, MenuItem, ListSubheader } from '@mui/material';
function Maker(props) {
    // Character Information
    const [myName, setName] = useState("");
    const handleName = (event) => { setName(event.target.value); };
    const [myConcept, setConcept] = useState("");
    const handleConcept = (event) => { setConcept(event.target.value); };
    const [myCrew, setCrew] = useState("");
    const handleCrew = (event) => { setCrew(event.target.value); };
    const [myCause, setCause] = useState("");
    const handleCause = (event) => { setCause(event.target.value); };
    const [myTarget, setTarget] = useState("");
    const handleTarget = (event) => { setTarget(event.target.value); };
    const [myMethod, setMethod] = useState("");
    const handleMethod = (event) => { setMethod(event.target.value); };
    const [myRace, setRace] = useState("");
    const handleRace = (event) => { setRace(event.target.value); };
    const [myGender, setGender] = useState("");
    const handleGender = (event) => { setGender(event.target.value); };
    const [myAge, setAge] = useState("");
    const handleAge = (event) => { setAge(event.target.value); };
    const [myHeight, setHeight] = useState("");
    const handleHeight = (event) => { setHeight(event.target.value); };
    const [myWeight, setWeight] = useState("");
    const handleWeight = (event) => { setWeight(event.target.value); };
    const [myDrive, setDrive] = useState("");
    const handleDrive = (event) => { setDrive(event.target.value); };
    const [myProfession, setProfession] = useState("");
    const handleProfession = (event) => { setProfession(event.target.value); };
    const [mySpeciality, setSpeciality] = useState("");
    const handleSpeciality = (event) => { setSpeciality(event.target.value); };
    const [myFeature, setFeature] = useState("");
    const handleFeature = (event) => { setFeature(event.target.value); };
    const [myPersonality, setPersonality] = useState("");
    const handlePersonality = (event) => { setPersonality(event.target.value); };
    const [myTragedy, setTragedy] = useState("");
    const handleTragedy = (event) => { setTragedy(event.target.value); };
    const [myDestiny, setDestiny] = useState("");
    const handleDestiny = (event) => { setDestiny(event.target.value); };
    // Powers Weak Extra Traits
    const [myExtra1, setExtra1] = useState("");
    const handleExtra1 = (event) => { setExtra1(event.target.value); };
    const [myExtra2, setExtra2] = useState("");
    const handleExtra2 = (event) => { setExtra2(event.target.value); };
    // Powers
    const [myFirstPower, setFirstPower] = useState("");
    const handleFirstPower = (event) => { setFirstPower(event.target.value); };
    const [myFirstStuntName, setFirstStuntName] = useState("");
    const handleFirstStuntName = (event) => { setFirstStuntName(event.target.value); };
    const [myFirstStuntDesc, setFirstStuntDesc] = useState("");
    const handleFirstStuntDesc = (event) => { setFirstStuntDesc(event.target.value); };
    const [mySecondPower, setSecondPower] = useState("");
    const handleSecondPower = (event) => { setSecondPower(event.target.value); };
    const [mySecondStuntName, setSecondStuntName] = useState("");
    const handleSecondStuntName = (event) => { setSecondStuntName(event.target.value); };
    const [mySecondStuntDesc, setSecondStuntDesc] = useState("");
    const handleSecondStuntDesc = (event) => { setSecondStuntDesc(event.target.value); };
    // Statistics
    const [myAttribute, setAttribute] = useState("");
    const handleAttribute = (event) => { setAttribute(event.target.value); };
    const [myStand, setStand] = useState("");
    const handleStand = (event) => { setStand(event.target.value); };
    const [myPower, setPower] = useState("");
    const handlePower = (event) => { setPower(event.target.value); };
    // Attributes
    const [myPhysique, setPhysique] = useState("");
    const handlePhysique = (event) => { setPhysique(event.target.value); };
    const [myCharm, setCharm] = useState("");
    const handleCharm = (event) => { setCharm(event.target.value); };
    const [myWits, setWits] = useState("");
    const handleWits = (event) => { setWits(event.target.value); };

    const containsPower = (power, metal) => {
        if (power === metal + "Allomancy") {
            return 0;
        } else if (power === metal + "Feruchemy") {
            return 1
        } else {
            return 2;
        }
    };

    const renderStunts = () => {
        let stunts = [];

        if (myFirstPower.includes("Allomancy")) {
            stunts.push(
                <ListSubheader key="power-stunts-header" style={{ fontWeight: "bolder", fontSize: "large" }}>Power Stunts</ListSubheader>
            );
            props.metals.forEach((metal, index) => {
                if (containsPower(myFirstPower, metal.name) === 0) {
                    if (metal.allomancy.stunts.length === 0) {
                        stunts.push(
                            <MenuItem
                                key={`no-stunts-${index}`}
                                disabled
                                id="outlined-disabled"
                                label="Disabled"
                                style={{ fontWeight: "bolder", fontSize: "large", marginLeft: '5px', fontStyle: 'italic' }}
                                value={"No Stunts"}>
                                No Stunts
                            </MenuItem>
                        );
                    } else {
                        metal.allomancy.stunts.forEach((stunt, subindex) => {
                            stunts.push(
                                <MenuItem
                                    key={`allomancy-stunt-${index}-${subindex}`}
                                    style={{ fontWeight: "bolder", fontSize: "large" }}
                                    value={stunt.name}>
                                    {stunt.name}
                                </MenuItem>
                            );
                        });
                    }
                }
            });

            stunts.push(
                <ListSubheader key="gunplay-stunts-header" style={{ fontWeight: "bolder", fontSize: "large" }}>Gunplay Stunts</ListSubheader>
            );
            props.metals.forEach((metal, index) => {
                if (containsPower(myFirstPower, metal.name) === 0) {
                    if (metal.allomancy.gunplay.length === 0) {
                        stunts.push(
                            <MenuItem
                                key={`no-gunplay-${index}`}
                                disabled
                                id="outlined-disabled"
                                label="Disabled"
                                style={{ fontWeight: "bolder", fontSize: "large", marginLeft: '5px', fontStyle: 'italic' }}
                                value={"No Stunts"}>
                                No Stunts
                            </MenuItem>
                        );
                    } else {
                        metal.allomancy.gunplay.forEach((stunt, subindex) => {
                            stunts.push(
                                <MenuItem
                                    key={`allomancy-gunplay-${index}-${subindex}`}
                                    style={{ fontWeight: "bolder", fontSize: "large" }}
                                    value={stunt.name}>
                                    {stunt.name}
                                </MenuItem>
                            );
                        });
                    }
                }
            });
        }

        if (myFirstPower.includes("Feruchemy")) {
            stunts.push(
                <ListSubheader key="feruchemy-gunplay-header" style={{ fontWeight: "bolder", fontSize: "large" }}>Gunplay</ListSubheader>
            );
            props.metals.forEach((metal, index) => {
                if (containsPower(myFirstPower, metal.name) === 1) {
                    if (metal.feruchemy.gunplay.length === 0) {
                        stunts.push(
                            <MenuItem
                                key={`no-feruchemy-gunplay-${index}`}
                                disabled
                                id="outlined-disabled"
                                label="Disabled"
                                style={{ fontWeight: "bolder", fontSize: "large", marginLeft: '5px', fontStyle: 'italic' }}
                                value={"No Stunts"}>
                                No Stunts
                            </MenuItem>
                        );
                    } else {
                        metal.feruchemy.gunplay.forEach((stunt, subindex) => {
                            stunts.push(
                                <MenuItem
                                    key={`feruchemy-gunplay-${index}-${subindex}`}
                                    style={{ fontWeight: "bolder", fontSize: "large" }}
                                    value={stunt.name}>
                                    {stunt.name}
                                </MenuItem>
                            );
                        });
                    }
                }
            });
        }

        return stunts;
    };

    return (
        < >
        <div id="character" style={{background:"#FFFFFFDE", height:"100%"}}>
            <div>
                <h3 style={{color:'black', marginBottom:'0px', marginTop:'0px' }}>Character Information</h3>
                {/* Character Information */}
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Character Name" variant="filled" value={myName} onChange={handleName} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Concept" variant="filled" value={myConcept} onChange={handleConcept} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Crew Name" variant="filled" value={myCrew} onChange={handleCrew} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Cause" variant="filled" value={myCause} onChange={handleCause} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Target" variant="filled" value={myTarget} onChange={handleTarget} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Method" variant="filled" value={myMethod} onChange={handleMethod} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Race" variant="filled" value={myRace} onChange={handleRace} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Gender" variant="filled" value={myGender} onChange={handleGender} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Age" variant="filled" value={myAge} onChange={handleAge} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Height" variant="filled" value={myHeight} onChange={handleHeight} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Weight" variant="filled" value={myWeight} onChange={handleWeight} />
            </div>
            <div>
                {/* Traits & Burdens */}
                <h3 style={{color:'black', marginBottom:'0px' }}>Traits & Burdens</h3>
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Drive" variant="filled" value={myDrive} onChange={handleDrive} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Profession" variant="filled" value={myProfession} onChange={handleProfession} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Speciality" variant="filled" value={mySpeciality} onChange={handleSpeciality} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Feature" variant="filled" value={myFeature} onChange={handleFeature} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Personality" variant="filled" value={myPersonality} onChange={handlePersonality} />
                <div>
                    <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Tragedy" variant="filled" value={myTragedy} onChange={handleTragedy} />
                    <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Destiny" variant="filled" value={myDestiny} onChange={handleDestiny} />
                </div>
            </div>
            <div>
                {/* Build */}
                <h3 style={{color:'black', marginBottom:'0px' }}>Build</h3>
                <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Attributes</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myAttribute} onChange={handleAttribute}>
                        <MenuItem style={{fontWeight:"bolder", fontSize:"large"}} value={3}>Strong</MenuItem>
                        <MenuItem style={{fontWeight:"bolder", fontSize:"large"}} value={2}>Average</MenuItem>
                        <MenuItem style={{fontWeight:"bolder", fontSize:"large"}} value={1}>Weak</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Standings</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myStand} onChange={handleStand}>
                        <MenuItem style={{fontWeight:"bolder", fontSize:"large"}} value={3}>Strong</MenuItem>
                        <MenuItem style={{fontWeight:"bolder", fontSize:"large"}} value={2}>Average</MenuItem>
                        <MenuItem style={{fontWeight:"bolder", fontSize:"large"}} value={1}>Weak</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Powers</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myPower} onChange={handlePower}>
                        <MenuItem style={{fontWeight:"bolder", fontSize:"large"}} value={5}>Strong</MenuItem>
                        <MenuItem style={{fontWeight:"bolder", fontSize:"large"}} value={4}>Average</MenuItem>
                        <ListSubheader style={{fontWeight:"bolder", fontSize:"large"}}>Weak</ListSubheader>
                        <MenuItem style={{marginLeft:'5px', fontStyle:'italic'}} value={1}>Two Traits</MenuItem>
                        <MenuItem style={{marginLeft:'5px', fontStyle:'italic'}} value={2}>Two Stunts</MenuItem>
                        <MenuItem style={{marginLeft:'5px', fontStyle:'italic'}} value={3}>One of Each</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                {myAttribute === 1 && 
                    // Weak Attributes
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Attributes</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>Split 9 points between Attributes. No Attribute may exceed 4</h4>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-label">Physique</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myPhysique} onChange={handlePhysique}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Charm</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myCharm} onChange={handleCharm}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Wits</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myWits} onChange={handleWits}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                }
                {myAttribute === 2 && 
                    // Average Attributes
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Attributes</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>Split 11 points between Attributes. No Attribute may exceed 5</h4>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-label">Physique</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myPhysique} onChange={handlePhysique}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Charm</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myCharm} onChange={handleCharm}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Wits</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myWits} onChange={handleWits}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                }
                {myAttribute === 3 && 
                    // Strong Attributes
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Attributes</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>Split 13 points between Attributes. No Attribute may exceed 6</h4>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-label">Physique</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myPhysique} onChange={handlePhysique}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Charm</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myCharm} onChange={handleCharm}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Wits</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myWits} onChange={handleWits}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                }
                {myStand === 1 && 
                    // Weak Attributes
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Standings</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>Split 9 points between Attributes. No Attribute may exceed 4</h4>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-label">Resources</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myPhysique} onChange={handlePhysique}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={7}>7</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Influence</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myCharm} onChange={handleCharm}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={7}>7</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Spirit</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myWits} onChange={handleWits}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={7}>7</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                }
                {myStand === 2 && 
                    // Average Attributes
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Standings</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>Split 11 points between Attributes. No Attribute may exceed 6</h4>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-label">Resources</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myPhysique} onChange={handlePhysique}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={7}>7</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Influence</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myCharm} onChange={handleCharm}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={7}>7</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Spirit</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myWits} onChange={handleWits}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={7}>7</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                }
                {myStand === 3 && 
                    // Strong Attributes
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Standings</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>Split 13 points between Attributes. No Attribute may exceed 8</h4>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-label">Resources</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myPhysique} onChange={handlePhysique}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Influence</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myCharm} onChange={handleCharm}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Spirit</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myWits} onChange={handleWits}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                }
            </div>
            <div>
                {myPower === 1 && 
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Powers</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>With Weak Powers, Gain Two Extra Traits, Two Stunts, or One of Each</h4>
                        <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Extra Trait" variant="filled" value={myExtra1} onChange={handleExtra1} />
                        <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Extra Trait" variant="filled" value={myExtra2} onChange={handleExtra2} />
                    </div>
                }
                {myPower === 2 && 
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Powers</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>With Weak Powers, Gain Two Extra Traits, Two Stunts, or One of Each</h4>
                        <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Stunt Name" variant="filled" value={myFirstStuntName} onChange={handleFirstStuntName} />
                        <TextField sx={{ m: 0.5, minWidth: 240, maxWidth: 330 }} id="filled-basic" label="Stunt Description" variant="filled" value={myFirstStuntDesc} onChange={handleFirstStuntDesc} />
                        <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Stunt Name" variant="filled" value={mySecondStuntName} onChange={handleSecondStuntName} />
                        <TextField sx={{ m: 0.5, minWidth: 240, maxWidth: 330 }} id="filled-basic" label="Stunt Description" variant="filled" value={mySecondStuntDesc} onChange={handleSecondStuntDesc} />
                    </div>
                }
                {myPower === 3 && 
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Powers</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>With Weak Powers, Gain Two Extra Traits, Two Stunts, or One of Each</h4>
                        <TextField sx={{ m: 0.5, minWidth: 414, maxWidth: 450 }} id="filled-basic" label="Extra Trait" variant="filled" value={myExtra1} onChange={handleExtra1} />
                        <br/>
                        
                    </div>
                }
                {myPower === 4 && 
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Powers</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>Kandras, Koloss, Mistings and Ferrings</h4>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 140 }}>
                            <InputLabel id="demo-simple-select-label">First Power</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myFirstPower} onChange={handleFirstPower}>
                                <ListSubheader style={{fontWeight:"bolder", fontSize:"large"}}>Allomancy</ListSubheader>
                                {props.metals.map((metal, index) => (
                                    <MenuItem 
                                        key={index} 
                                        style={{fontWeight:"bolder", fontSize:"large"}} 
                                        value={metal.name + "Allomancy"}>
                                            {metal.name}
                                    </MenuItem>
                                ))}
                                <ListSubheader style={{fontWeight:"bolder", fontSize:"large"}}>Feruchemy</ListSubheader>
                                {props.metals.map((metal, index) => (
                                    <MenuItem 
                                        key={index} 
                                        style={{fontWeight:"bolder", fontSize:"large"}} 
                                        value={metal.name + "Feruchemy"}>
                                            {metal.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        {myFirstPower !== "" &&
                            <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 140 }}>
                            <InputLabel id="demo-simple-select-label">Stunt</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myFirstStuntName} onChange={handleFirstStuntName}>
                                {renderStunts()}
                            </Select>
                        </FormControl>
                        }
                    </div>
                }
                {myPower === 5 && 
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Powers</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>Twinborn, Koloss-blooded Mistings/Ferrings</h4>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 140 }}>
                            <InputLabel id="demo-simple-select-label">First Power</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myFirstPower} onChange={handleFirstPower}>
                                <ListSubheader style={{fontWeight:"bolder", fontSize:"large"}}>Allomancy</ListSubheader>
                                {props.metals.map((metal, index) => (
                                    <MenuItem 
                                        key={index} 
                                        disabled={metal.name + "Allomancy" === mySecondPower} 
                                        id="outlined-disabled" 
                                        label="Disabled" 
                                        style={{fontWeight:"bolder", fontSize:"large"}} 
                                        value={metal.name + "Allomancy"}>
                                            {metal.name}
                                    </MenuItem>
                                ))}
                                <ListSubheader style={{fontWeight:"bolder", fontSize:"large"}}>Feruchemy</ListSubheader>
                                {props.metals.map((metal, index) => (
                                    <MenuItem 
                                        key={index} 
                                        disabled={metal.name + "Feruchemy" === mySecondPower} 
                                        id="outlined-disabled" 
                                        label="Disabled" 
                                        style={{fontWeight:"bolder", fontSize:"large"}} 
                                        value={metal.name + "Feruchemy"}>
                                            {metal.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 140 }}>
                            <InputLabel id="demo-simple-select-label">Second Power</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={mySecondPower} onChange={handleSecondPower}>
                                <ListSubheader style={{fontWeight:"bolder", fontSize:"large"}}>Allomancy</ListSubheader>
                                {props.metals.map((metal, index) => (
                                    <MenuItem 
                                        key={index} 
                                        disabled={metal.name + "Allomancy" === myFirstPower} 
                                        id="outlined-disabled" 
                                        label="Disabled" 
                                        style={{fontWeight:"bolder", fontSize:"large"}} 
                                        value={metal.name + "Allomancy"}>
                                            {metal.name}
                                    </MenuItem>
                                ))}
                                <ListSubheader style={{fontWeight:"bolder", fontSize:"large"}}>Feruchemy</ListSubheader>
                                {props.metals.map((metal, index) => (
                                    <MenuItem 
                                        key={index} 
                                        disabled={metal.name + "Feruchemy" === myFirstPower} 
                                        id="outlined-disabled" 
                                        label="Disabled" 
                                        style={{fontWeight:"bolder", fontSize:"large"}} 
                                        value={metal.name + "Feruchemy"}>
                                            {metal.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <div>
                            {/* <TextField sx={{ m: 0.5, minWidth: 414, maxWidth: 450 }} id="filled-basic" label="Power Name & Rating" variant="filled" value={myFirstPower} onChange={handleFirstPower} />
                            <ButtonGroup size="small" aria-label="Small button group">
                                <Button >Allomancy</Button>
                                <Button>Feruchemy</Button>
                                <Button>Hemalurgy</Button>
                                <Button>Other</Button>
                            </ButtonGroup>
                            <br/>
                            <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Stunt Name" variant="filled" value={myFirstStuntName} onChange={handleFirstStuntName} />
                            <TextField sx={{ m: 0.5, minWidth: 240, maxWidth: 330 }} id="filled-basic" label="Stunt Description" variant="filled" value={myFirstStuntDesc} onChange={handleFirstStuntDesc} />
                            <br/><br/>
                            <TextField sx={{ m: 0.5, minWidth: 414, maxWidth: 450 }} id="filled-basic" label="Power Name & Rating" variant="filled" value={mySecondPower} onChange={handleSecondPower} />
                            <ButtonGroup size="small" aria-label="Small button group">
                                <Button >Allomancy</Button>
                                <Button>Feruchemy</Button>
                                <Button>Hemalurgy</Button>
                                <Button>Other</Button>
                            </ButtonGroup>
                            <br/>
                            <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Stunt Name" variant="filled" value={mySecondStuntName} onChange={handleSecondStuntName} />
                            <TextField sx={{ m: 0.5, minWidth: 240, maxWidth: 330 }} id="filled-basic" label="Stunt Description" variant="filled" value={mySecondStuntDesc} onChange={handleSecondStuntDesc} /> */}
                        </div>
                    </div>
                }
            </div>
        </div>
        </>
    )
}

export default Maker