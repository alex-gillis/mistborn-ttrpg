
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Character from "../Reference/Bestiary/Character"
function Sample(props) {
    return (
      < >
        <h1>{props.hero.name}</h1>
        <div id="regMenu">
          <div id="desc">
            {props.hero.info}
          </div>
          <div id="sampleDisplay">
              <div className="sheet">
                  <Character rogue={props.rogue} />
              </div>
              <div id="centerIMG">
                  <div>
                    <img className="heroSample" id="rightSample" src={props.hero.portrait} alt={props.hero.portrait} />
                    <br/>
                    <span className="sampleText"  id="bolder">{props.hero.name}</span>
                    <br/>
                  </div>
              </div>
          </div>
        </div>
        <div id="mobiMenu">
          <div id="sampleDisplay">
              <div id="desc">
                {props.hero.info}
              </div>
              <div id="centerIMG">
                  <div>
                    <img className="heroSample" id="rightSample" src={props.hero.portrait} alt={props.hero.portrait} />
                    <br/>
                    <span className="sampleText"  id="bolder">{props.hero.name}</span>
                    <br/>
                  </div>
              </div>
          </div>
          <div id="desc" className="sheet">
              <Character rogue={props.rogue} />
          </div>
        </div>
      </>
    )
  }
  
  export default Sample
  