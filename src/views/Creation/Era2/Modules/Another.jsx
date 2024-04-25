/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

function Another(props) {
    return (
      <>
        <h2>{props.info.question}</h2>
        <div>{props.info.part1}</div>
        <ul>
            {props.info.points?.map((myObject, index) => (
                <li key={index}>
                    {myObject.point}
                </li>
            ))}
        </ul>
        <div>{props.info.part2}</div>
        <div id="italicked">{props.info.example}</div>
      </>
    );
}
  
export default Another;
