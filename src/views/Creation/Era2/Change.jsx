/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Change(props) {
    return (
      <>
        <h1>Building Alloy Heroes</h1>
        <div>{props.basics}</div>
        <h2>Which options have been changed or retired?</h2>
        <div>{props.change.basics}</div>
        <h3>Races and Factions</h3>
        <div>
            <ul>
                {props.change.races?.map((myObject, index) => (
                    <li key={index}>
                        {myObject.option}
                    </li>
                ))}
            </ul>
        </div>
        <h3>Powers</h3>
        <div>
            <ul>
                {props.change.powers?.map((myObject, index) => (
                    <li key={index}>
                        {myObject.option}
                    </li>
                ))}
            </ul>
        </div>
        <h3>Destiny, Tragedy, Traits and Burdens</h3>
        <div>
            <ul>
                {props.change.destiny}
            </ul>
        </div>
      </>
    );
}
  
export default Change;
