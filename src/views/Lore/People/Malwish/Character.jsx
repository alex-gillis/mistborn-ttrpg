/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { useNavigate } from "react-router-dom";

function Character(props) {
    const navigate = useNavigate();
    const myLink = "/mistborn-ttrpg/stunts"
    
    const handlePageChange = (link) => {
        navigate(link);
    };
  
    return (
      <>
        <h1>Malwish Characters</h1>
        <div>{props.info.main}</div>
        <div id="sampleDisplay">
            <div id="centerIMG">
                <div style={{width:"500px"}}>
                    <img className="heroSample" id="rightSample" src={props.info.image} />
                    <br/>
                </div>
            </div>
            <div>
                <h2>High Body Temperature</h2>
                <div style={{textAlign:"justify"}}>{props.info.temp}</div>
            </div>
        </div>
        <h2>Alien Culture</h2>
        <div>{props.info.culture}</div>
        <h2>Malwish Stunts</h2>
        <div className="centered">
        Characters who hail from the south can choose these Stunts during character creation or during play by spending Advancements. These are tied to the technology and culture of the Malwish people rather than a special or improved use of a particular power.
            <br/>
            See them all in:
            <div style={{margin:"0 auto"}}>
                <button onClick={() => handlePageChange(myLink)}>
                    <span id="bold">Go to Stunts</span>
                </button>
            </div>
        </div>
      </>
    )
  }
  
  export default Character
  