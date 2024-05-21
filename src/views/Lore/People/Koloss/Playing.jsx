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
      <div>{props.info.mistFerr}</div>
      <h2>Koloss-Blooded Powers</h2>
      <h2>Koloss-Blooded Stunts</h2>
      <p>
        All koloss-blooded characters may gain koloss-blooded Stunts during character creation or during play by spending Advancements. 
        See them all in <span onClick={() => handlePageChange(myLink)}>Stunts</span>
      </p>
      </>
    )
  }
  
  export default Playing
  