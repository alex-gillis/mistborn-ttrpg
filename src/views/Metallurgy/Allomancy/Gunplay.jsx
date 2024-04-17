/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Gunplay(props) {
    let myGunplay = props.metal.allomancy.gunplay;
    if (myGunplay !== undefined && myGunplay.length >= 1) {
        return (
          < >
            <h4>Allomantic Gunplay Stunts with { props.metal.name }</h4>
            <div>
                With the advent of guns, Mistings have learned to combine their shooting skills with their Allomancy to forge innovative and deadly new fighting styles.  <span id="bold"> Allomantic shot Stunts</span> are a subcategory of Allomancy Stunts, which work like all other Stunts but are only useful during combat. 
                <br/>
                <span id="bold">Any Misting or Twinborn Hero</span> may gain Allomantic shot Stunts corresponding to his or her metals during character creation, or purchase them during play using Advancements.
            </div>
            {myGunplay?.map((myGun, index) => (
                <div key={index}>   
                    <span id="bolder">{myGun.name}: </span>{myGun.description}
                    <br/>
                </div>
            ))}
          </>
        )
    } else {
        return (
            < ></>
          )
    } 
  }
  
  export default Gunplay
  
