/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useNavigate } from "react-router-dom";

function Playing(props) {
    const navigate = useNavigate();
    const myLink = "/mistborn-ttrpg/stunts"
    
    const handlePageChange = (link) => {
        navigate(link);
    };
  
    return (
      <>
      <h1>Playing a Koloss-Blooded Hero</h1>
      <div>{props.info.how}</div>
      <h2>Koloss-Blooded Powers</h2>
      <div>{props.info.powers}</div>
      <h2>Koloss-Blooded Stunts</h2>
      <div className="centered">
        All koloss-blooded characters may gain koloss-blooded Stunts during character creation or during play by spending Advancements. 
        <br/>
        See them all in:
        <div style={{margin:"0 auto"}}>
            <button onClick={() => handlePageChange(myLink)}>
                <span id="bold">Stunts</span>
            </button>
        </div>
      </div>
      </>
    )
  }
  
  export default Playing
  