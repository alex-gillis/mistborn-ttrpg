/* eslint-disable react/prop-types */
function Basomancy(props) { 
    let myOptions = props.info.options;
    let myCharge = props.info.chargesSizes;
    let myRates = props.info.rates

    return (
        < >
            <h2>{ props.info.name }</h2>
            { props.info.basics }
            <h2>Allomancy History</h2>
            { props.info.history }
            <h2>{ props.info.name } after Ascension</h2>
            { props.info.ascension }
            <h2>Allomancy Basics</h2>
            { props.info.mechanical }
            <h2>Gaining & Improving Allomantic Powers</h2>
            Characters can gain Allomantic Powers in several ways: <br/>
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
            <h2>Multiple Allomantic Powers</h2>
            { props.info.multiPower }
            <h2>Burning</h2>
            { props.info.burning }
            <h2>Charges</h2>
            { props.info.charges }
            <table>
                <tbody>
                    <tr>
                        <th>
                            Charges
                        </th>
                        <th>
                            Size or Type
                        </th>
                    </tr>
                    {myCharge?.map((charge, index) => (
                        <tr key={index}>
                            <td>
                                {charge.number}
                            </td>
                            <td>
                                {charge.size}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Metal Purity & Toxity</h2>
            { props.info.pureTox }
            <h2>Burn Rate & Flaring </h2>
            { props.info.burnrate }
            <table>
                <tbody>
                    <tr>
                        <th>
                            Metal
                        </th>
                        <th>
                            Burn Rate
                        </th>
                        <th>
                            Flare Rate
                        </th>
                    </tr>
                    {myRates?.map((rate, index) => (
                        <tr key={index}>
                            <td>
                                {rate.metal}
                            </td>
                            <td>
                                {rate.burnrate}
                            </td>
                            <td>
                                {rate.flared}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Allomantic Stunts</h2>
            { props.info.stunts }
            <h2>Misting Savants</h2>
            { props.info.savants }
        </>
    )

}
  
export default Basomancy
  