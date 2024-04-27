/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Points from "../../Modules/BigPoint"

function Pools(props) {
  
    return (
      <>
      <div>
        <h1>Dice Pools</h1>
        <div>{props.game.pools.part1}</div>
        <br/>
        <div id="example">{props.game.pools.example}</div>
        <br/>
        <div>{props.game.pools.part2}</div>
      </div>

      <div>
        <h2>Applying Traits</h2>
        <div>{props.game.traits.part1}</div>
        <br/>
        <div id="example">{props.game.traits.example}</div>
        <br/>
        <div>{props.game.traits.part2}</div>
        <br/>
        <div id="example">{props.game.traits.example2}</div>
        <br/>
        <div>{props.game.traits.part3}</div>
        <br/>
        <div id="example">{props.game.traits.example3}</div>
      </div>

      <div>
        <h2>Applying Tools</h2>
        <div>{props.game.tools.part1}</div>
        <br/>
        <div id="example">{props.game.tools.example}</div>
        <br/>
        <div>{props.game.tools.part2}</div>
        <br/>
        <div id="example">{props.game.tools.example2}</div>
        <br/>
        <div>{props.game.tools.part3}</div>
      </div>

      <div>
        <h2>Applying Circumstances</h2>
        <div>{props.game.circumstances.part1}</div>
        <div>
            <Points points={props.game.circumstances.points} />
        </div>
        <div id="example">{props.game.tools.example}</div>
      </div>

      <div>
        <h2>Pools Above Ten Dice</h2>
        <div>
            <span id="bold">{props.game.above.part1}</span> {props.game.above.part2}
        </div>
        <br/>
        <div id="example">{props.game.above.example}</div>
      </div>

      <div>
        <h2>Pools Below Two Dice</h2>
        <div>
            <span id="bold">{props.game.below.part1}</span> {props.game.below.part2}
        </div>
        <br/>
        <div id="example">{props.game.below.example}</div>
        <br/>
        <div id="brandon">
            <h4>Do I get more dice when I ``catch a beat``?</h4>
            {props.game.below.brandon}
        </div>
      </div>
      </>
    )
  }
  
  export default Pools
  