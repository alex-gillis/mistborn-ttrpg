/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Select, FormControl, TextField, InputLabel, MenuItem, ListSubheader, Alert, Collapse } from '@mui/material';
function Maker(props) {
    // Complete Stunt Array
    const [theStunts] = useState(props.stunts[0].stunts.concat(props.stunts[1].stunts)
                                .concat(props.stunts[2].stunts));

    const [myCharacters] = useState(props.characters);

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
    const handleRace = (event) => { setRace(event.target.value); lockPowers(event.target.value); };
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
    const handleFirstPower = (event) => { setFirstPower(event.target.value); setFirstStuntName("") };
    const [myFirstStuntName, setFirstStuntName] = useState("");
    const handleFirstStunt = (event) => { let value = event.target.value; setFirstStunt(value); };
    const [myFirstStuntDesc, setFirstStuntDesc] = useState("");
    const [mySecondPower, setSecondPower] = useState("");
    const handleSecondPower = (event) => { setSecondPower(event.target.value); setSecondStuntName(""); };
    const [mySecondStuntName, setSecondStuntName] = useState("");
    const handleSecondStunt = (event) => { let value = event.target.value; setSecondStunt(value); };
    const [mySecondStuntDesc, setSecondStuntDesc] = useState("");
    // Statistics
    const [myAttribute, setAttribute] = useState("");
    const handleAttribute = (event) => { setAttribute(event.target.value); };
    const [myStand, setStand] = useState("");
    const handleStand = (event) => { setStand(event.target.value); };
    const [myPower, setPower] = useState("");
    const handlePower = (event) => { setPower(event.target.value); switchPowers; };
    // Attributes
    const [myPhysique, setPhysique] = useState(2);
    const handlePhysique = (event) => { setPhysique(event.target.value); };
    const [myCharm, setCharm] = useState(2);
    const handleCharm = (event) => { setCharm(event.target.value); };
    const [myWits, setWits] = useState(2);
    const handleWits = (event) => { setWits(event.target.value); };
    // Standings
    const [myResources, setResources] = useState(2);
    const handleResources = (event) => { setResources(event.target.value); };
    const [myInfluence, setInfluence] = useState(2);
    const handleInfluence = (event) => { setInfluence(event.target.value); };
    const [mySpirit, setSpirit] = useState(2);
    const handleSpirit = (event) => { setSpirit(event.target.value); };

    // Error Checking
    const [myError, setError] = useState(false);
    const [myNotAtt, setNotAtt] = useState(false);
    const [myNotStand, setNotStand] = useState(false);

    // Racial Lock 
    const [myKoloss, setKoloss] = useState(false);
    const [myKandra, setKandra] = useState(false);

    const switchPowers = () => {
        if (myKoloss === true) {
            setFirstPower("Koloss Physique");
            setFirstStuntName("Koloss Physique");
        } else {
            setFirstStuntName(""); 
            setSecondStuntName(""); 
            setFirstPower(""); 
            setSecondPower("");
        }
    }

    const lockPowers = (value) => {
        if (value === "Human") {
            setKoloss(false);
            setKandra(false);
            setFirstStuntName(""); 
            setFirstPower(""); 

        } else if (value === "Koloss-Blooded") {
            setKoloss(true);
            setKandra(false);

            if(myAttribute === 1) { setAttribute(""); }

            if(myStand === 1) { setStand(""); }
            
            if (myPower <= 3) {
                setPower("");
            }

            setFirstPower("Koloss Physique");
            setFirstStuntName("Koloss Physique");

        } else if (value === "Kandra") {
            setKoloss(false);
            setKandra(true);
            setPower(4);

            setFirstPower("Mimicry");
            setSecondPower("Hemalurgic Blessing");

            if(myAttribute === 2) { setAttribute(""); }

            if(myStand === 2) { setStand(""); }

        }
    };

    const handleRefresh = () => {
        props.refreshData();
    };

    const containsPower = (power, metal) => {
        if (power === metal + "Allomancy") {
            return 0;
        } else if (power === metal + "Feruchemy") {
            return 1
        } else {
            return 2;
        }
    };

    const renderStunts = (powers, place) => {
        let stunts = [];
        let myPlace;

        if (place === 2) {
            myPlace = myFirstStuntName;
        } else if (place === 1) {
            myPlace = mySecondStuntName;
        }

        if (powers === true){
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
        }

        if (powers === false) {
            stunts.push(
                <ListSubheader key="gunplay-header" style={{ fontWeight: "bolder", fontSize: "large" }}>Gunplay</ListSubheader>
            );
            props.stunts[6].stunts.forEach((stunt, index) => {
                if (props.stunts[6].stunts.length === 0) {
                    stunts.push(
                        <MenuItem
                            key={`gunplay-${index}`}
                            disabled
                            id="outlined-disabled"
                            label="Disabled"
                            style={{ fontWeight: "bolder", fontSize: "large", marginLeft: '5px', fontStyle: 'italic' }}
                            value={"No Stunts"}>
                            No Stunts
                        </MenuItem>
                    );
                } else {
                    stunts.push(
                        <MenuItem
                            key={`gunplay-${index}`}
                            disabled={stunt.name === myPlace} 
                            id="outlined-disabled" 
                            label="Disabled" 
                            style={{ fontWeight: "bolder", fontSize: "large" }}
                            value={stunt.name}>
                            {stunt.name}
                        </MenuItem>
                    );
                }
            });
            stunts.push(
                <ListSubheader key="gunsmith-header" style={{ fontWeight: "bolder", fontSize: "large" }}>Gunsmithing</ListSubheader>
            );
            props.stunts[2].stunts.forEach((stunt, index) => {
                if (props.stunts[2].stunts.length === 0) {
                    stunts.push(
                        <MenuItem
                            key={`gunsmithing-${index}`}
                            disabled
                            id="outlined-disabled"
                            label="Disabled"
                            style={{ fontWeight: "bolder", fontSize: "large", marginLeft: '5px', fontStyle: 'italic' }}
                            value={"No Stunts"}>
                            No Stunts
                        </MenuItem>
                    );
                } else {
                    stunts.push(
                        <MenuItem
                            key={`gunsmithing-${index}`}
                            disabled={myPlace === stunt.name} 
                            id="outlined-disabled" 
                            label="Disabled" 
                            style={{ fontWeight: "bolder", fontSize: "large" }}
                            value={stunt.name}>
                            {stunt.name}
                        </MenuItem>
                    );
                }
            });
        }

        return stunts;
    };

    const setFirstStunt = (value) => {
        setFirstStuntName(value);
        const result = theStunts.find(stunt => stunt.name === value);
        setFirstStuntDesc(result.description);
    };

    const setSecondStunt = (value) => {
        setSecondStuntName(value);
        if (value === "Blessing of Awareness") {
            setSecondStuntDesc("A Tin spike adds 2 dice with rolls involving all your senses. Additionally, you’re considered to have 2 additional Action Dice when determining the order of actions in a Conflict (e.g. when you gain 4 Action Dice, the order in which you act is determined as if you have 6 Action Dice instead).");
        } else if (value === "Blessing of Potency") {
            setSecondStuntDesc("An Iron spike increases your Physique score by 2, to a maximum of 8");
        } else if (value === "Blessing of Presence") {
            setSecondStuntDesc("A Copper spike grants enhanced intelligence and memory, increasing your Wits score by 2, to a maximum of 8.");
        } else if (value === "Blessing of Stability") {
            setSecondStuntDesc("A Zinc spike increases your Willpower by 5, and also makes you immune to control by Brass Allomancy with any rating of 10 or lower.");
        } else {
            const result = theStunts.find(stunt => stunt.name === value);
            setSecondStuntDesc(result.description);
        }
    };

    function errorCheck() {
        // True = No Errors || False = Somewhere on the sheet there is an error

        // if (myName === "") { setName("Unknown"); }

        let check;

        // Error Checking for Attributes
        if (myAttribute === 1 && myPhysique + myCharm + myWits < 9) {
            setError(true);
            check = true;
        } else if (myAttribute === 2 && myPhysique + myCharm + myWits < 11) {
            setError(true);
            check = true;
        } else if (myAttribute === 3 && myPhysique + myCharm + myWits < 13) {
            setError(true);
            check = true;
        } else {
            setError(false);
            check = false;
        }

        if (myStand === 1 && myResources + myInfluence + mySpirit < 9) {
            setError(true);
            check = true;
        } else if (myStand === 2 && myResources + myInfluence + mySpirit < 11) {
            setError(true);
            check = true;
        } else if (myStand === 3 && myResources + myInfluence + mySpirit < 13) {
            setError(true);
            check = true;
        } else {
            setError(false);
            check = false;
        }
        
        if (myAttribute === 1 && myPhysique + myCharm + myWits > 9) {
            setNotAtt(true);
            check = true;
        } else if (myAttribute === 2 && myPhysique + myCharm + myWits > 11) {
            setNotAtt(true);
            check = true;
        } else if (myAttribute === 3 && myPhysique + myCharm + myWits > 13) {
            setNotAtt(true);
            check = true;
        } else {
            setNotAtt(false);
            check = false;
        }

        if (myStand === 1 && myResources + myInfluence + mySpirit > 9) {
            setNotStand(true);
            check = true;
        } else if (myStand === 2 && myResources + myInfluence + mySpirit > 11) {
            setNotStand(true);
            check = true;
        } else if (myStand === 3 && myResources + myInfluence + mySpirit > 13) {
            setNotStand(true);
            check = true;
        } else {
            setNotStand(false);
            check = false;
        }

        if (myAttribute === "") {
            check = true;
        } else if (myStand === "") {
            check = true;
        } else if (myPower === "") {
            check = true;
        }

        return(check);
    };
    
    function saveCharacter() { 

        let check = errorCheck();
        let thePowers = [];
        let theTraits = [];

        if (check == false) {

            if (myPower == 1) {
                let theTrait = [
                    {
                        trait1:myExtra1,
                        trait2:myExtra2
                    }
                ]
                theTraits = theTrait;
                
            } else if (myPower == 2) {
                
                if (props.stunts[6].stunts.find(stunt => stunt.name === myFirstStuntName) && props.stunts[6].stunts.find(stunt => stunt.name === mySecondStuntName)) {
                    let thePower = [
                        {
                            power: "Gunplay Stunts",
                            type: "Other",
                            stunts:[
                                {
                                    stunt:myFirstStuntName,
                                    desc:myFirstStuntDesc
                                },
                                {
                                    stunt:mySecondStuntName,
                                    desc:mySecondStuntDesc
                                }
                            ]
                        }
                    ]
                    thePowers = thePower;
                } else if (props.stunts[2].stunts.find(stunt => stunt.name === myFirstStuntName) && props.stunts[2].stunts.find(stunt => stunt.name === mySecondStuntName)) {
                    
                    let thePower = [
                            {
                            power: "Gunsmith Stunts",
                            type: "Other",
                            stunts:[
                                {
                                    stunt:myFirstStuntName,
                                    desc:myFirstStuntDesc
                                },
                                {
                                    stunt:mySecondStuntName,
                                    desc:mySecondStuntDesc
                                }
                            ]
                        }
                    ]
    
                    thePowers = thePower;
                } else if (props.stunts[6].stunts.find(stunt => stunt.name === myFirstStuntName) && props.stunts[2].stunts.find(stunt => stunt.name === mySecondStuntName)) {
                    let thePower = [
                        {
                            power: "Gunplay Stunts",
                            type: "Other",
                            stunts:[
                                {
                                    stunt:myFirstStuntName,
                                    desc:myFirstStuntDesc
                                }
                            ]
                        },
                        {
                            power: "Gunsmith Stunts",
                            type: "Other",
                            stunts:[
                                {
                                    stunt:mySecondStuntName,
                                    desc:mySecondStuntDesc
                                }
                            ]
                        
                        }
                    ]
                    thePowers = thePower;
                } else if (props.stunts[2].stunts.find(stunt => stunt.name === myFirstStuntName) && props.stunts[6].stunts.find(stunt => stunt.name === mySecondStuntName)) {
                    let thePower = [
                        {
                            power: "Gunsmith Stunts",
                            type: "Other",
                            stunts:[
                                {
                                    stunt:myFirstStuntName,
                                    desc:myFirstStuntDesc
                                }
                            ]
                        },
                        {
                            power: "Gunplay Stunts",
                            type: "Other",
                            stunts:[
                                {
                                    stunt:mySecondStuntName,
                                    desc:mySecondStuntDesc
                                }
                            ]
                        
                        }
                    ]
                    thePowers = thePower;
                }
    
            } else if (myPower == 3) {
    
                if (props.stunts[6].stunts.find(stunt => stunt.name === myFirstStuntName)) {
                    let thePower = [
                        {
                            power: "Gunplay Stunts",
                            type: "Other",
                            stunts:[
                                {
                                    stunt:myFirstStuntName,
                                    desc:myFirstStuntDesc
                                }
                            ]
                        }
                    ]
                    let theTrait = [
                        {
                            trait1:myExtra1,
                            trait2:""
                        }
                    ]
                    thePowers = thePower;
                    theTraits = theTrait;
    
                } else if (props.stunts[2].stunts.find(stunt => stunt.name === myFirstStuntName)) {
                    let thePower = [
                        {
                            power: "Gunsmith Stunts",
                            type: "Other",
                            stunts:[
                                {
                                    stunt:myFirstStuntName,
                                    desc:myFirstStuntDesc
                                }
                            ]
                        }
                    ]
                    let theTrait = [
                        {
                            trait1:myExtra1,
                            trait2:""
                        }
                    ]
                    thePowers = thePower;
                    theTraits = theTrait;
                    
                } 
    
            } else if (myPower == 4 && myKoloss == false && myKandra == false) {
    
                if (myFirstPower.includes("Allomancy")) {
                    if (myFirstStuntName === "") {
                        let thePower = {
                            power: myFirstPower.replace("Allomancy", ""),
                            type: "Allomancy",
                            rating:5,
                            stunts:[]
                        }
                        thePowers.push(thePower);
                    } else {
                        let thePower = {
                            power: myFirstPower.replace("Allomancy", ""),
                            type: "Allomancy",
                            rating:5,
                            stunts:[
                                {
                                    stunt:myFirstStuntName,
                                    desc:myFirstStuntDesc
                                }
                            ]
                        }
                        thePowers.push(thePower);
                    }
    
                } else if (myFirstPower.includes("Feruchemy")) {
                    if (myFirstStuntName === "") {
                        let thePower = {
                            power: myFirstPower.replace("Feruchemy", ""),
                            type: "Feruchemy",
                            rating:5,
                            stunts:[]
                        }
                        thePowers.push(thePower);
                    } else {
                        let thePower = {
                            power: myFirstPower.replace("Feruchemy", ""),
                            type: "Feruchemy",
                            rating:5,
                            stunts:[
                                {
                                    stunt:myFirstStuntName,
                                    desc:myFirstStuntDesc
                                }
                            ]
                        }
                        thePowers.push(thePower);
                    }
    
                }
    
            } else if (myPower == 5 && myKoloss == false) {
    
                if (myFirstPower.includes("Allomancy")) {
                    
                    let thePower = {
                        power: myFirstPower.replace("Allomancy", ""),
                        type: "Allomancy",
                        rating:4,
                        stunts:[]
                    }
                    thePowers.push(thePower);
    
                } else if (myFirstPower.includes("Feruchemy")) {
                    
                    let thePower = {
                        power: myFirstPower.replace("Feruchemy", ""),
                        type: "Feruchemy",
                        rating:4,
                        stunts:[]
                    }
                    thePowers.push(thePower);
    
                }
    
                if (mySecondPower.includes("Allomancy")) {
                    
                    let thePower = {
                        power: mySecondPower.replace("Allomancy", ""),
                        type: "Allomancy",
                        rating:4,
                        stunts:[]
                    }
                    thePowers.push(thePower);
    
                } else if (mySecondPower.includes("Feruchemy")) {
                    
                    let thePower = {
                        power: mySecondPower.replace("Feruchemy", ""),
                        type: "Feruchemy",
                        rating:4,
                        stunts:[]
                    }
                    thePowers.push(thePower);
    
                }
    
            } else if (myKandra == true) {
                    
                let thePower = {
                    power: "Mimicry",
                    type: "Other",
                    rating:5,
                    stunts:[]
                }
                thePowers.push(thePower);
                
                thePower = {
                    power: mySecondPower,
                    type: "Hemalurgy",
                    stunts:[
                        {
                            stunt:mySecondStuntName,
                            desc:mySecondStuntDesc
                        }
                    ]
                }
                thePowers.push(thePower);

            } else if (myPower == 4 && myKoloss == true) {
                    
                let thePower = {
                    power: "Koloss Physique",
                    type: "Other",
                    stunts:[
                        {
                            stunt:"Koloss Physique",
                            desc:"As the children of hugely strong creatures, koloss-blooded inherit some of their sires’ strength and durability. Koloss-blooded characters increase their Physique by 1 at character creation, and may increase their Physique rating to a maximum of 7 (rather than 6 as normal). In addition, their tremendous strength grants koloss-blooded characters 2 additional dice when making a roll involving physical strength (including lifting and moving objects, and wielding heavy weapons)"
                        }
                    ]
                }
                thePowers.push(thePower);

            } else if (myPower == 5 && myKoloss == true) {
                    
                let thePower = {
                    power: "Koloss Physique",
                    type: "Other",
                    stunts:[
                        {
                            stunt:"Koloss Physique",
                            desc:"As the children of hugely strong creatures, koloss-blooded inherit some of their sires’ strength and durability. Koloss-blooded characters increase their Physique by 1 at character creation, and may increase their Physique rating to a maximum of 7 (rather than 6 as normal). In addition, their tremendous strength grants koloss-blooded characters 2 additional dice when making a roll involving physical strength (including lifting and moving objects, and wielding heavy weapons)"
                        }
                    ]
                } 
                thePowers.push(thePower);
    
                if (mySecondPower.includes("Allomancy")) {
                    
                    let thePower = {
                        power: mySecondPower.replace("Allomancy", ""),
                        type: "Allomancy",
                        rating:4,
                        stunts:[]
                    }
                    thePowers.push(thePower);
    
                } else if (mySecondPower.includes("Feruchemy")) {
                    
                    let thePower = {
                        power: mySecondPower.replace("Feruchemy", ""),
                        type: "Feruchemy",
                        rating:4,
                        stunts:[]
                    }
                    thePowers.push(thePower);
    
                }
                
            }
    
            const character = {
                name : myName,
                concept : myConcept,
                crew : myCrew,
                cause : myCause,
                target : myTarget,
                method : myMethod,
                race : myRace,
                gender : myGender,
                age : myAge,
                height : myHeight,
                weight : myWeight,
                physique : myPhysique,
                charm : myCharm,
                wits : myWits,
                resources : myResources,
                influence : myInfluence,
                spirit : mySpirit,
                traits : {
                    drive : myDrive,
                    profession : myProfession,
                    speciality : mySpeciality,
                    feature : myFeature,
                    personality : myPersonality,
                    extras: theTraits
                },
                tragedy : myTragedy,
                destiny : myDestiny,
                powers : thePowers,
                edit : {
                    attribute: myAttribute,
                    standing: myStand,
                    power: myPower
                }
            };
    
            let characters = [];
            
            if (Array.isArray(myCharacters)) {
                characters = myCharacters;
                console.log("This is my full list of characters ", characters)
            }
    
            characters.push(character);

            // handleRefresh();
    
            // Clear Character Database
            // localStorage.clear();
    
            // saving the character information to localStorage
            localStorage.setItem("characterInfo", JSON.stringify(characters));

            handleRefresh();
        
            // console.log("Your character, " + myName + " has been saved");
            // console.log("This is my character ", character)
            // console.log("This is my full list of characters ", characters)

        } 

    };

    return (
        < >
        <div id="character" style={{background:"#FFFFFFDE", height:"98.6%"}}>
            <div>
                <h3 style={{color:'black', marginBottom:'0px', marginTop:'0px' }}>Character Information</h3>
                {/* Character Information */}
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Character Name" variant="filled" value={myName} onChange={handleName} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Concept" variant="filled" value={myConcept} onChange={handleConcept} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Crew Name" variant="filled" value={myCrew} onChange={handleCrew} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Cause" variant="filled" value={myCause} onChange={handleCause} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Target" variant="filled" value={myTarget} onChange={handleTarget} />
                <TextField sx={{ m: 0.5, minWidth: 120, maxWidth: 165 }} id="filled-basic" label="Method" variant="filled" value={myMethod} onChange={handleMethod} />
                <FormControl id="filled-basic" variant="filled" sx={{ m: 0.5, minWidth: 165, maxWidth: 165 }}>
                    <InputLabel id="demo-simple-select-label">Race</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myRace} onChange={handleRace}>
                        <MenuItem value={"Human"}>Human</MenuItem>
                        <MenuItem value={"Koloss-Blooded"}>Koloss-Blooded</MenuItem>
                        <MenuItem value={"Kandra"}>Kandra</MenuItem>
                    </Select>
                </FormControl>
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
                <h4 style={{color:'black', background:"transparent", margintop:'0px' }}>Pick 1 Strong, 1 Average and 1 Weak</h4>
                <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Attributes</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myAttribute} onChange={handleAttribute}>
                        <MenuItem 
                            disabled={myStand === 3 || myPower === 5} 
                            id="outlined-disabled" 
                            label="Disabled" 
                            style={{fontWeight:"bolder", fontSize:"large"}} 
                            value={3}>
                                Strong
                        </MenuItem>
                        <MenuItem
                            disabled={myStand === 2 || myPower === 4} 
                            id="outlined-disabled" 
                            label="Disabled"
                            style={{fontWeight:"bolder", fontSize:"large"}} 
                            value={2}>
                                Average
                        </MenuItem>
                        <MenuItem
                            disabled={myStand === 1 || myPower === 3 || myPower === 2 || myPower === 1} 
                            id="outlined-disabled" 
                            label="Disabled"
                            style={{fontWeight:"bolder", fontSize:"large"}} 
                            value={1}>
                                Weak
                        </MenuItem>
                        <MenuItem
                            style={{fontWeight:"bolder", fontSize:"large"}} 
                            value={""}>
                                None
                        </MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Standings</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myStand} onChange={handleStand}>
                        <MenuItem
                            disabled={myAttribute === 3 || myPower === (5)} 
                            id="outlined-disabled" 
                            label="Disabled" 
                            style={{fontWeight:"bolder", fontSize:"large"}} 
                            value={3}>
                                Strong
                        </MenuItem>
                        <MenuItem
                            disabled={myAttribute === 2 || myPower === (4)} 
                            id="outlined-disabled" 
                            label="Disabled"
                            style={{fontWeight:"bolder", fontSize:"large"}} 
                            value={2}>
                                Average
                        </MenuItem>
                        <MenuItem
                            disabled={myAttribute === 1 || myPower === 3 || myPower === 2 || myPower === 1} 
                            id="outlined-disabled" 
                            label="Disabled"
                            style={{fontWeight:"bolder", fontSize:"large"}} 
                            value={1}>
                                Weak
                        </MenuItem>
                        <MenuItem
                            style={{fontWeight:"bolder", fontSize:"large"}} 
                            value={""}>
                                None
                        </MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Powers</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myPower} onChange={handlePower}>
                        <MenuItem
                            disabled={myAttribute === 3 || myStand === 3 || myKandra === true} 
                            id="outlined-disabled" 
                            label="Disabled"
                            style={{fontWeight:"bolder", fontSize:"large"}} 
                            value={5}>
                                Strong
                        </MenuItem>
                        <MenuItem
                            disabled={myAttribute === 2 || myStand === 2} 
                            id="outlined-disabled" 
                            label="Disabled"
                            style={{fontWeight:"bolder", fontSize:"large"}} 
                            value={4}>
                                Average
                        </MenuItem>
                        <ListSubheader 
                            disabled={myAttribute === 1 || myStand === 1 || myKoloss === true || myKandra === true} 
                            id="outlined-disabled" 
                            label="Disabled"  
                            style={{fontWeight:"bolder", fontSize:"large"}}>
                                Weak
                        </ListSubheader>
                        <MenuItem
                            disabled={myAttribute === 1 || myStand === 1 || myKoloss === true || myKandra === true} 
                            id="outlined-disabled" 
                            label="Disabled" 
                            style={{marginLeft:'5px', fontStyle:'italic'}} 
                            value={1}>
                                Two Traits
                        </MenuItem>
                        <MenuItem
                            disabled={myAttribute === 1 || myStand === 1 || myKoloss === true || myKandra === true} 
                            id="outlined-disabled" 
                            label="Disabled" 
                            style={{marginLeft:'5px', fontStyle:'italic'}} 
                            value={2}>
                                Two Stunts
                        </MenuItem>
                        <MenuItem
                            disabled={myAttribute === 1 || myStand === 1 || myKoloss === true || myKandra === true} 
                            id="outlined-disabled" 
                            label="Disabled" 
                            style={{marginLeft:'5px', fontStyle:'italic'}} 
                            value={3}>
                                One of Each
                        </MenuItem>
                        <MenuItem
                            disabled={myKoloss === true || myKandra === true} 
                            id="outlined-disabled" 
                            label="Disabled"  
                            style={{fontWeight:"bolder", fontSize:"large"}} 
                            value={""}>
                                None
                        </MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                {myAttribute === 1 && 
                    // Weak Attributes
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Attributes</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>Split 9 points between Attributes. No Attribute may exceed 4</h4>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myPhysique + myCharm + myWits > 9} >
                            <InputLabel id="demo-simple-select-label">Physique</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myPhysique} onChange={handlePhysique}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myPhysique + myCharm + myWits > 9} >
                        <InputLabel id="demo-simple-select-label">Charm</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myCharm} onChange={handleCharm}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myPhysique + myCharm + myWits > 9} >
                        <InputLabel id="demo-simple-select-label">Wits</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myWits} onChange={handleWits}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                        <Collapse in={myPhysique + myCharm + myWits > 9}>
                            <Alert variant="filled" severity='error'>You can only spend 9 points total on your attributes</Alert>
                        </Collapse>
                        <Collapse in={myNotAtt === true}>
                            <Alert variant="filled" severity='warning'>You have unspent points</Alert>
                        </Collapse>
                    </div>
                }
                {myAttribute === 2 && 
                    // Average Attributes
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Attributes</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>Split 11 points between Attributes. No Attribute may exceed 5</h4>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myPhysique + myCharm + myWits > 11}>
                            <InputLabel id="demo-simple-select-label">Physique</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myPhysique} onChange={handlePhysique}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myPhysique + myCharm + myWits > 11}>
                        <InputLabel id="demo-simple-select-label">Charm</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myCharm} onChange={handleCharm}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myPhysique + myCharm + myWits > 11}>
                        <InputLabel id="demo-simple-select-label">Wits</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myWits} onChange={handleWits}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                        <Collapse in={myPhysique + myCharm + myWits > 11}>
                            <Alert variant="filled" severity='error'>You can only spend 11 points total on your attributes</Alert>
                        </Collapse>
                        <Collapse in={myNotAtt === true}>
                            <Alert variant="filled" severity='warning'>You have unspent points</Alert>
                        </Collapse>
                    </div>
                }
                {myAttribute === 3 && 
                    // Strong Attributes
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Attributes</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>Split 13 points between Attributes. No Attribute may exceed 6</h4>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myPhysique + myCharm + myWits > 13}>
                            <InputLabel id="demo-simple-select-label">Physique</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myPhysique} onChange={handlePhysique}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myPhysique + myCharm + myWits > 13}>
                        <InputLabel id="demo-simple-select-label">Charm</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myCharm} onChange={handleCharm}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myPhysique + myCharm + myWits > 13}>
                        <InputLabel id="demo-simple-select-label">Wits</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myWits} onChange={handleWits}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                            </Select>
                        </FormControl>
                        <Collapse in={myPhysique + myCharm + myWits > 13}>
                            <Alert variant="filled" severity='error'>You can only spend 13 points total on your attributes</Alert>
                        </Collapse>
                        <Collapse in={myNotAtt === true}>
                            <Alert variant="filled" severity='warning'>You have unspent points</Alert>
                        </Collapse>
                    </div>
                }
                {myStand === 1 && 
                    // Weak Attributes
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Standings</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>Split 9 points between Standings. No Standing may exceed 4</h4>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myResources + myInfluence + mySpirit > 9}>
                            <InputLabel id="demo-simple-select-label">Resources</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myResources} onChange={handleResources}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={7}>7</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myResources + myInfluence + mySpirit > 9}>
                        <InputLabel id="demo-simple-select-label">Influence</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myInfluence} onChange={handleInfluence}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={7}>7</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myResources + myInfluence + mySpirit > 9}>
                        <InputLabel id="demo-simple-select-label">Spirit</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={mySpirit} onChange={handleSpirit}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={5}>5</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={6}>6</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={7}>7</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                        <Collapse in={myResources + myInfluence + mySpirit > 9}>
                            <Alert variant="filled" severity='error'>You can only spend 9 points total on your Standings</Alert>
                        </Collapse>
                        <Collapse in={myNotStand === true}>
                            <Alert variant="filled" severity='warning'>You have unspent points</Alert>
                        </Collapse>
                    </div>
                }
                {myStand === 2 && 
                    // Average Attributes
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Standings</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>Split 11 points between Standings. No Standing may exceed 6</h4>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myResources + myInfluence + mySpirit > 11}>
                            <InputLabel id="demo-simple-select-label">Resources</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myResources} onChange={handleResources}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={7}>7</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myResources + myInfluence + mySpirit > 11}>
                        <InputLabel id="demo-simple-select-label">Influence</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myInfluence} onChange={handleInfluence}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={7}>7</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myResources + myInfluence + mySpirit > 11}>
                        <InputLabel id="demo-simple-select-label">Spirit</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={mySpirit} onChange={handleSpirit}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={7}>7</MenuItem>
                                <MenuItem disabled id="outlined-disabled" label="Disabled" value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                        <Collapse in={myResources + myInfluence + mySpirit > 11}>
                            <Alert variant="filled" severity='error'>You can only spend 11 points total on your Standings</Alert>
                        </Collapse>
                        <Collapse in={myNotStand === true}>
                            <Alert variant="filled" severity='warning'>You have unspent points</Alert>
                        </Collapse>
                    </div>
                }
                {myStand === 3 && 
                    // Strong Attributes
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Standings</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>Split 13 points between Standings. No Standing may exceed 8</h4>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myResources + myInfluence + mySpirit > 13}>
                            <InputLabel id="demo-simple-select-label">Resources</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myResources} onChange={handleResources}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myResources + myInfluence + mySpirit > 13}>
                        <InputLabel id="demo-simple-select-label">Influence</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myInfluence} onChange={handleInfluence}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 120 }} error={myResources + myInfluence + mySpirit > 13}>
                        <InputLabel id="demo-simple-select-label">Spirit</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={mySpirit} onChange={handleSpirit}>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                            </Select>
                        </FormControl>
                        <Collapse in={myResources + myInfluence + mySpirit > 13}>
                            <Alert variant="filled" severity='error'>You can only spend 13 points total on your Standings</Alert>
                        </Collapse>
                        <Collapse in={myNotStand === true}>
                            <Alert variant="filled" severity='warning'>You have unspent points</Alert>
                        </Collapse>
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
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 140 }}>
                            <InputLabel id="demo-simple-select-label">First Stunt</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myFirstStuntName} onChange={handleFirstStunt}>
                                {renderStunts(false, 1)}
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 140 }}>
                            <InputLabel id="demo-simple-select-label">Second Stunt</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={mySecondStuntName} onChange={handleSecondStunt}>
                                {renderStunts(false, 2)}
                            </Select>
                        </FormControl>
                        <br/>
                        {myFirstStuntName !== "" &&
                            <TextField
                                sx={{ m: 0.5, minWidth: 360, maxWidth: 495}}
                                maxRows={4}
                                disabled
                                multiline
                                id="filled-disabled"
                                label="First Stunt Description"
                                value={myFirstStuntDesc}
                            />
                        }
                        <br/><br/>
                        {mySecondStuntName !== "" &&
                            <TextField
                                sx={{ m: 0.5, minWidth: 360, maxWidth: 495 }}
                                maxRows={4}
                                disabled
                                multiline
                                id="filled-disabled"
                                label="Second Stunt Description"
                                value={mySecondStuntDesc}
                            />
                        }
                    </div>
                }
                {myPower === 3 && 
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Powers</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>With Weak Powers, Gain Two Extra Traits, Two Stunts, or One of Each</h4>
                        <TextField sx={{ m: 0.5, minWidth: 414, maxWidth: 450 }} id="filled-basic" label="Extra Trait" variant="filled" value={myExtra1} onChange={handleExtra1} />
                        <br/>
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 140 }}>
                            <InputLabel id="demo-simple-select-label">Stunt</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myFirstStuntName} onChange={handleFirstStunt}>
                                {renderStunts(false)}
                            </Select>
                        </FormControl>
                        <br/>
                        {myFirstStuntName !== "" &&
                            <TextField
                                sx={{ m: 0.5, minWidth: 360, maxWidth: 495}}
                                maxRows={4}
                                disabled
                                multiline
                                id="filled-disabled"
                                label="Stunt Description"
                                value={myFirstStuntDesc}
                            />
                        }
                        
                    </div>
                }
                {myPower === 4 && 
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Powers</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>Kandras, Koloss, Mistings and Ferrings</h4>
                        {myKandra === false && myKoloss == false &&
                            <div id="forHumans">
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
                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={myFirstStuntName} onChange={handleFirstStunt}>
                                            {renderStunts(true)}
                                        </Select>
                                    </FormControl>
                                }
                                <br/>
                                {myFirstStuntName !== "" &&
                                    <TextField
                                        sx={{ m: 0.5, minWidth: 360, maxWidth: 495 }}
                                        maxRows={4}
                                        disabled
                                        multiline
                                        id="filled-disabled"
                                        label="Stunt Description"
                                        value={myFirstStuntDesc}
                                    />
                                }
                            </div>
                        }
                        {myKandra === true && myKoloss == false &&
                            <div id="forKandra">
                                <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 140 }}>
                                    <InputLabel id="demo-simple-select-label">First Power</InputLabel>
                                    <Select disabled defaultValue={"Mimicry"} labelId="demo-simple-select-label" id="demo-simple-select" value={myFirstPower} onChange={handleFirstPower}>
                                        <MenuItem 
                                            style={{fontWeight:"bolder", fontSize:"large"}} 
                                            value={"Mimicry"}>
                                                Mimicry
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 140 }}>
                                    <InputLabel id="demo-simple-select-label">Hemalurgic Blessings</InputLabel>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={mySecondStuntName} onChange={handleSecondStunt}>
                                        <MenuItem 
                                            style={{fontWeight:"bolder", fontSize:"large"}} 
                                            value={"Blessing of Awareness"}>
                                                Blessing of Awareness
                                        </MenuItem>
                                        <MenuItem 
                                            style={{fontWeight:"bolder", fontSize:"large"}} 
                                            value={"Blessing of Potency"}>
                                                Blessing of Potency
                                        </MenuItem>
                                        <MenuItem 
                                            style={{fontWeight:"bolder", fontSize:"large"}} 
                                            value={"Blessing of Presence"}>
                                                Blessing of Presence
                                        </MenuItem>
                                        <MenuItem 
                                            style={{fontWeight:"bolder", fontSize:"large"}} 
                                            value={"Blessing of Stability"}>
                                                Blessing of Stability
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                                <br/>
                                {mySecondStuntName !== "" &&
                                    <TextField
                                        sx={{ m: 0.5, minWidth: 360, maxWidth: 495 }}
                                        maxRows={4}
                                        disabled
                                        multiline
                                        id="filled-disabled"
                                        label="Blessing Description"
                                        value={mySecondStuntDesc}
                                    />
                                }
                            </div>
                        }
                        {myKandra === false && myKoloss == true &&
                            <div id="forKoloss">
                                <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 140 }}>
                                    <InputLabel id="demo-simple-select-label">First Power</InputLabel>
                                    <Select disabled defaultValue={"Koloss Physique"} labelId="demo-simple-select-label" id="demo-simple-select" value={myFirstPower} onChange={handleFirstPower}>
                                        <MenuItem 
                                            style={{fontWeight:"bolder", fontSize:"large"}} 
                                            value={"Koloss Physique"}>
                                                Koloss Physique
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                                {myFirstPower !== "" &&
                                    <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 140 }}>
                                        <InputLabel id="demo-simple-select-label">Stunt</InputLabel>
                                        <Select labelId="demo-simple-select-label" disabled id="demo-simple-select" value={myFirstStuntName} onChange={handleFirstStunt}>
                                            <MenuItem 
                                                default
                                                style={{fontWeight:"bolder", fontSize:"large"}} 
                                                value={"Koloss Physique"}>
                                                    Koloss Physique
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                }
                                <br/>
                                {myFirstStuntName !== "" &&
                                    <TextField
                                        sx={{ m: 0.5, minWidth: 360, maxWidth: 495 }}
                                        maxRows={4}
                                        disabled
                                        multiline
                                        id="filled-disabled"
                                        label="Stunt Description"
                                        value="As the children of hugely strong creatures, koloss-blooded inherit some of their sires’ strength and durability. Koloss-blooded characters increase their Physique by 1 at character creation, and may increase their Physique rating to a maximum of 7 (rather than 6 as normal). In addition, their tremendous strength grants koloss-blooded characters 2 additional dice when making a roll involving physical strength (including lifting and moving objects, and wielding heavy weapons)"
                                    />
                                }
                            </div>
                        }
                    </div>
                }
                {myPower === 5 && 
                    <div>
                        <h3 style={{color:'black', marginBottom:'0px' }}>Powers</h3>
                        <h4 style={{color:'black', background:"transparent", margin:'0px' }}>Twinborn, Koloss-blooded Mistings/Ferrings</h4>
                        {myKandra === false && myKoloss == false &&
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
                        }
                        {myKandra === false && myKoloss == true &&
                            <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 140 }}>
                                <InputLabel id="demo-simple-select-label">First Power</InputLabel>
                                <Select disabled defaultValue={"Koloss Physique"} labelId="demo-simple-select-label" id="demo-simple-select" value={myFirstPower} onChange={handleFirstPower}>
                                    <MenuItem 
                                        style={{fontWeight:"bolder", fontSize:"large"}} 
                                        value={"Koloss Physique"}>
                                            Koloss Physique
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        }
                        <FormControl variant="standard" sx={{ m: 0.5, marginTop: 0, minWidth: 140 }}>
                            <InputLabel id="demo-simple-select-label">Second Power</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={mySecondPower} onChange={handleSecondPower}>
                                <ListSubheader style={{fontWeight:"bolder", fontSize:"large"}}>Allomancy</ListSubheader>
                                {props.metals.map((metal, index) => (
                                    <MenuItem 
                                        key={index} 
                                        disabled={metal.name + "Allomancy" === myFirstPower || myFirstPower.includes("Allomancy")} 
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
                                        disabled={metal.name + "Feruchemy" === myFirstPower || myFirstPower.includes("Feruchemy")} 
                                        id="outlined-disabled" 
                                        label="Disabled" 
                                        style={{fontWeight:"bolder", fontSize:"large"}} 
                                        value={metal.name + "Feruchemy"}>
                                            {metal.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                }
            </div>
            <div>
                <br/>
                <Collapse in={myError === true}>
                    <Alert variant="filled" severity='error'>Please Review Your Entries for any Errors</Alert>
                </Collapse>
                <button className='unselected' onClick={saveCharacter}>Save Character</button>
            </div>
        </div>
        </>
    )
}

export default Maker