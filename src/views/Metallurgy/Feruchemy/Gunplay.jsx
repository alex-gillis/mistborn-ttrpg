/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Gunplay(props) {
    let myGunplay = props.metal.feruchemy.gunplay;
    if (myGunplay !== undefined && myGunplay.length >= 1) {
        return (
          < >
            <h4>{ props.metal.name } Feruchemy Gunplay Stunts </h4>
            <div>
              Just as with Allomancers, Ferrings have learned to combine their Feruchemy with their shooting skills to get results impossible for ordinary humans to duplicate. These special talents and tricks are known as <span id="bold">Feruchemical Shot Stunts</span>
              <br/>
              <span id="bold">Any Ferring or Twinborn Hero</span> may gain Feruchemical shot Stunts corresponding to his or her metals during character creation, or purchase them during play using Advancements.
            </div>
            <ul>
              {myGunplay?.map((myGun, index) => (
                  <li key={index}>   
                    <span id="bolder">{myGun.name}:</span> {myGun.description}
                    <br/><br/>
                  </li>
              ))}
            </ul>
          </>
        )
    } else {
        return (
            < ></>
          )
    } 
  }
  
  export default Gunplay
  
