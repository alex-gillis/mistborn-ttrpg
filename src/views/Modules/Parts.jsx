/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

function Parts(props) {
    return (
        < >
        
        <div>
            
            <h2 id="italicked">{props.title}</h2>
            <div>{props.part.basics}</div>
            <ul>
                {props.part.physical?.map((myObject, index) => (
                    <li key={index}>
                    <span id="bold">{myObject.name}:</span> {myObject.desc}
                    </li>
                ))}
            </ul>
            <div>{props.part.part1}</div>
                {props.part.points?.map((myObject, index) => (
                    <div>
                    <span id="bold">{myObject.name}</span>
                    <ul>
                        <li key={index}>
                        {myObject.desc}
                        </li>
                    </ul>
                    </div>
                ))}
            <br/>
            <div id="italicked">{props.part.example}</div>
    
            </div>
        </>
    )
}

export default Parts;