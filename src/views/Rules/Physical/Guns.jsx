/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import BigPoints from "../../Modules/BigPoint"

function Guns(props) {

    return (
        < >
            <h1>Gun Tactics</h1>
            <div>{ props.gunplay.intro }</div>
            
            <h2>Aiming</h2>
            <div>
                { props.gunplay.aiming.part } 
            </div>
            <br/>
            <div id="example">
                { props.gunplay.aiming.example } 
            </div>

            <h2>Fanning</h2>
            <div>
                { props.gunplay.fanning.part1 } <span id="bolder">{ props.gunplay.fanning.highlight }</span>
            </div>
            <div>
                { props.gunplay.fanning.part2 }
            </div>

            <h2>Rotary</h2>
            <div>
                { props.gunplay.rotary.part } 
            </div>

            <h2>Pistol Duels</h2>
            <div>
                { props.gunplay.duels.part1 } 
            </div>
            <BigPoints points={props.gunplay.duels.points} />
            <div>
                { props.gunplay.duels.part2 } 
            </div>
            <br/>
            <div id="brandon">
                <h4>Alternative Rule: <br/> Shoot `em, Scare `em, or Scare `em!</h4>
                { props.gunplay.duels.brandon } 
            </div>
            <br/>
            <div id="example">
                { props.gunplay.duels.example } 
            </div>
            
            <h2>Quick Drawing</h2>
            <div>
                { props.gunplay.quickdraw.part1 } <span id="bolder">{ props.gunplay.quickdraw.highlight }</span> { props.gunplay.quickdraw.part2 }
            </div>
            
            <h2>Reloading</h2>
            <div>
                { props.gunplay.reload.part }
            </div>
        </>
    )
}

export default Guns
