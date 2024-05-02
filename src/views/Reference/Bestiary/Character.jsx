/* eslint-disable react/prop-types */
function Character(props) {
    return (
        < >
        <div id="character">
            <div className="wiggleRoom">
                <span id="bold">Character Name:</span> <span id="italicked">{props.rogue.name}</span>
                <span id="bold" className="concept">Concept:</span> <span id="italicked">{props.rogue.concept}</span>
            </div>
            <div className="wiggleRoom" id="necessary">
                    <span id="bold">Crew Name:</span> <span id="italicked">{props.rogue.crew}</span><span id="bold" className="concept">Cause:</span> <span id="italicked">{props.rogue.cause}</span>
                    <br/>
                    <span id="bold" className="concept">Target:</span> <span id="italicked">{props.rogue.target}</span><span id="bold" className="concept">Method:</span> <span id="italicked">{props.rogue.method}</span>
            </div>
            <div className="wiggleRoom">
                <span id="bold">Race:</span> <span id="italicked">{props.rogue.race}</span>
                <span id="bold" className="concept">Sex:</span> <span id="italicked">{props.rogue.sex}</span>
                <span id="bold" className="concept">Age:</span> <span id="italicked">{props.rogue.age}</span>
                <span id="bold" className="concept">Height:</span> <span id="italicked">{props.rogue.height}</span>
                <span id="bold" className="concept">Weight:</span> <span id="italicked">{props.rogue.weight}</span>
            </div>
            <div className="wiggleRoom">
                <table>
                    <tbody>
                        <tr>
                            <td id="bold" colSpan={2}>Attributes</td>
                            <td id="bold" colSpan={2}>Standing</td>
                            <td id="bold" colSpan={2}>Resiliences</td>
                        </tr>
                        <tr>
                            <td colSpan={1}></td>
                            <td colSpan={1}>Dice</td>
                            <td colSpan={1}></td>
                            <td colSpan={1}>Dice</td>
                            <td colSpan={1}></td>
                            <td colSpan={1}>Score</td>
                        </tr>
                        <tr>
                            <td colSpan={1}>Physique</td>
                            <td id="centered" colSpan={1}>{props.rogue.physique}</td>
                            <td colSpan={1}>Resources</td>
                            <td id="centered" colSpan={1}>{props.rogue.resources}</td>
                            <td colSpan={1}>Health</td>
                            <td id="centered" colSpan={1}>{props.rogue.physique + props.rogue.resources}</td>
                        </tr>
                        <tr>
                            <td colSpan={1}>Charm</td>
                            <td id="centered" colSpan={1}>{props.rogue.charm}</td>
                            <td colSpan={1}>Influence</td>
                            <td id="centered" colSpan={1}>{props.rogue.influence}</td>
                            <td colSpan={1}>Reputation</td>
                            <td id="centered" colSpan={1}>{props.rogue.charm + props.rogue.influence}</td>
                        </tr>
                        <tr>
                            <td colSpan={1}>Wits</td>
                            <td id="centered" colSpan={1}>{props.rogue.wits}</td>
                            <td colSpan={1}>Spirit</td>
                            <td id="centered" colSpan={1}>{props.rogue.spirit}</td>
                            <td colSpan={1}>Willpower</td>
                            <td id="centered" colSpan={1}>{props.rogue.wits + props.rogue.spirit}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h4>Traits & Burdens</h4>
            <div className="wiggleRoom">
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={1}><span id="bold">Drive:</span> {props.rogue.traits.drive}</td>
                            <td colSpan={1}><span id="bold">Profession:</span> {props.rogue.traits.profession}</td>
                        </tr>
                        <tr>
                            <td colSpan={1}><span id="bold">Speciality:</span> {props.rogue.traits.speciality}</td>
                            <td colSpan={1}><span id="bold">Feature:</span> {props.rogue.traits.feature}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}><span id="bold">Personality:</span> {props.rogue.traits.personality}</td>
                        </tr>
                        {props.rogue.traits.extras?.map((myExtra, index) => (
                            <tr key={index}>
                                <td colSpan={1}><span id="bold">Extra:</span> {myExtra.trait1}</td>
                            <   td colSpan={1}><span id="bold">Extra:</span> {myExtra.trait2}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h4>Tragedy</h4>
            <div className="centered">{props.rogue.tragedy}</div>
            <h4>Destiny</h4>
            <div className="centered">{props.rogue.destiny}</div>
            <h4>Powers</h4>
            <div>
                {props.rogue.powers && props.rogue.powers.length > 0 ? (
                    <table className="centered">
                        <tbody>
                            <tr id="bold">
                                <td>Power</td>
                                <td>Type</td>
                                <td>Rating</td>
                                <td>Stunts</td>
                            </tr>
                                {props.rogue.powers.map((item, index) => (
                                    <tr key={index} className="justified">
                                        <td>{item.power}</td>
                                        <td>{item.type}</td>
                                        <td>{item.rating}</td>
                                        <td>
                                        {item.stunts?.map((item, index) => (
                                            <span key={index}>
                                                <span id="bold">{item.stunt}</span> {item.desc}
                                                <br/>
                                            </span>
                                        ))}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="centered">{props.rogue.name} possesses no powers</div>
                )}
            </div>
            <div>
                <table>
                    <tbody>
                        <tr id="bold">
                            <td colSpan={2}>Item</td>
                            <td colSpan={4}>Rules</td>
                            <td colSpan={1}>Prop</td>
                        </tr>
                        {props.rogue.equipment.map((item, index) => (
                            <tr key={index}>
                                <td colSpan={2}>{item.item}</td>
                                <td colSpan={4}>{item.rules}</td>
                                <td colSpan={1}><input type="checkbox" checked={item.props} readOnly /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Character