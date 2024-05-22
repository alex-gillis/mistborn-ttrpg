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
      <h1>Playing a Kandra Hero</h1>
      <div>{props.info.how}</div>
      <h2>What Generation?</h2>
      <div>{props.info.generation}</div>
      <h2>What Blessing?</h2>
      <div>{props.info.blessing}</div>
      <h2>What Powers?</h2>
      <div>{props.info.pickPowers}</div>
      <h2>View of Humanity?</h2>
      <div>{props.info.humanity}</div>
      <h2>Relationship with Harmony?</h2>
      <div>{props.info.harmony}</div>
      <h2>View of Other Kandra?</h2>
      <div>{props.info.other}</div>
      <h2>Kandra Powers</h2>
      <div>{props.info.powers.main}</div>
      <h3>Kandra Hemalurgy</h3>
      <div>{props.info.powers.hemalurgy}</div>
      <h2>Kandra Stunts</h2>
      <div className="centered">
        All kandra characters may gain kandra Stunts during character creation or during play by spending Advancements. Unlike mimicry Stunts, these Stunts represent some part of the Faceless Immortals’ society, history, or culture rather than a special or improved use of a particular power.
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
  
  export default Playing
  