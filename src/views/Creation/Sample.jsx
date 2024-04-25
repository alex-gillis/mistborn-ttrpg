
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Character from "../Reference/Bestiary/Character"
function Sample(props) {
    // const altSheet = props.hero.name + "`s Character sheet"

    return (
      < >
        <h1>{props.hero.name}</h1>
        <div id="desc">
          {props.hero.info}
        </div>
        <div id="sampleDisplay">
            <div>
                {/* <img className="heroSample" src={props.hero.sheet} alt={altSheet}/>
                <br/>
                <span className="sampleText" id="bolder">{props.hero.name}`s Character sheet</span>
                <br/> */}
                <Character rogue={props.rogue} />
            </div>
            <div>
                <img className="heroSample" id="rightSample" src={props.hero.portrait} alt={props.hero.portrait} />
                <br/>
                <span className="sampleText"  id="bolder">{props.hero.name}</span>
                <br/>
            </div>
        </div>
      </>
    )
  }
  
  export default Sample
  