/* eslint-disable react/prop-types */
function Basochemy(props) { 
    let myOptions = props.info.options;
    let myStorage = props.info.storage;
    return (
        < >
            <h2>{ props.info.name }</h2>
            { props.info.basics }
            <h2>Feruchemical History</h2>
            { props.info.history }
            <h2>{ props.info.name } after Ascension</h2>
            { props.info.ascension }
            <h2>Feruchemy in Era 2</h2>
            { props.info.ferrings }
            <h2>Ferrings in Society</h2>
            { props.info.society }
            <div id="brandon">
                { props.info.nicknames }
                <table>
                    <tbody>
                        {props.info.types?.map((type, index) => (
                            <tr key={index}>
                                <td>
                                    {type.one}
                                </td>
                                <td>
                                    {type.two}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h2>Ferrings in Society</h2>
            { props.info.terris }
            <div id="brandon">
                <h4>What about full Feruchemists?</h4>
                { props.info.full }
            </div>
            <h3>Power and Personality</h3>
            { props.info.personality }
            <h2>Feruchemical Basics</h2>
            { props.info.mechanical }
            <h2>Gaining & Improving Feruchemical Powers</h2>
            Characters can gain Feruchemical Powers in three ways: <br/>
            <ul>
            {myOptions?.map((option, index) => (
                <li key={index}>
                    <span id="bold">{option.option}</span>
                <br/>
                </li>
            ))}
            </ul>
            { props.info.startRate }
            <br/>
            { props.info.spendAdv }
            <h2>Storing in a Metalmind</h2>
            { props.info.storing }
            <h2>Storing During Breathers</h2>
            { props.info.breathers }
            <h2>Storing Capacity</h2>
            { props.info.capacity }
            <table>
                <tbody>
                    <tr>
                        <th>
                            Capacity
                        </th>
                        <th>
                            Size / Weight
                        </th>
                    </tr>
                    {myStorage?.map((storage, index) => (
                        <tr key={index}>
                            <td>
                                {storage.capacity}
                            </td>
                            <td>
                                {storage.size}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Tapping a Metalmind</h2>
            { props.info.tapping }
            <h2>Tapping 10 or More Charges</h2>
            { props.info.tenMore }
            <h2>Tapping for a Nudge</h2>
            { props.info.nudge }
        </>
    )

}
  
export default Basochemy
  