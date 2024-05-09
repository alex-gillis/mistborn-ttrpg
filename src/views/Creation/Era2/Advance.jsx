/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Points from "../../Modules/Points"
function Advance(props) {
    return (
      <>
        <h1>New Advancements</h1>
        <div>{props.info.opener}</div>
        <h2 id="italicked">4 Advancements</h2>
        <div><span id="bold">{props.info.four.name}</span>: {props.info.four.part1}</div>
        <Points points={props.info.four.points} />
        <div>{props.info.four.part2}</div>
        <br/>
        <div id="example">{props.info.four.example}</div>
        {props.info.remains?.map((myItem, index) => (
            <div key={index}>
                <h2 id="italicked">{myItem.title}</h2>
                <span id="bold">{myItem.name}</span>: {myItem.desc}
            </div>
        ))}
      </>
    );
}
  
export default Advance;
