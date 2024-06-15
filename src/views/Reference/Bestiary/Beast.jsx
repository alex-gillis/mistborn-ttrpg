/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';

function Beast(props) {
    const [myStats, setStats] = useState(true);
    const [myLore, setLore] = useState(false);
    const [myImage, setImage] = useState(false);

    const filters = [
        { title: 'Stat Block', select: myStats, onClick: () => changeStat() },
        { title: 'Lore', select: myLore, onClick: () => changeLore() },
        { title: 'Images', select: myImage, onClick: () => changeImage() }
    ]

    function changeStat() {
        setStats(true);
        setLore(false);
        setImage(false);
    }

    function changeLore() {
        setStats(false);
        setLore(true);
        setImage(false);
    }

    function changeImage() {
        setStats(false);
        setLore(false);
        setImage(true);
    }

    return (
        <>
            {props.info ? (
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <h2 className="notButter">{props.info.name}</h2>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}> 
                          <h3 className="notButter" id='brandon'><span id="timid">{props.info.threat} Threat</span></h3>
                        </td>
                      </tr>
                      <tr>
                        {props.info.timeframe && 
                            <td colSpan={2}> 
                                <h3 className="notButter">Time Frame: <span id="timid">{props.info.timeframe}</span></h3>
                            </td>
                        }
                      </tr>
                    </tbody>
                  </table>
                  <div>
                      <table style={{margin:"auto"}}>
                        <tbody>
                            <tr>
                                {filters.map((filter, index) => (
                                    <td key={index}>
                                        <button style={{width:"100px"}} id={filter.select ? 'filterSelected' : 'filterUnselected'} onClick={filter.onClick}>{filter.title}</button>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                  </div>
                {myStats && 
                  <div>
                    <br/>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <h4 id="undrawnLine" className="notButter">Attributes: <span id="timid">
                                                Physique {props.info.attributes.physique},
                                                Charm {props.info.attributes.charm},
                                                Wits {props.info.attributes.wits}
                                            </span>
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4 id="undrawnLine" className="notButter">Standings: <span id="timid">
                                                Resources {props.info.standings.resources},
                                                Influence {props.info.standings.influence},
                                                Spirit {props.info.standings.spirit}
                                            </span>
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4 id="undrawnLine" className="notButter">Resiliences: <span id="timid">
                                                Health {props.info.resiliences.health},
                                                Reputation {props.info.resiliences.reputation},
                                                Willpower {props.info.resiliences.willpower}
                                            </span>
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4 id="undrawnLine" className="notButter">Traits: <span id="timid">
                                                {props.info.traits?.map((myObject, index) => (
                                                    <span key={index}>{myObject.trait}; </span>
                                                ))}
                                            </span>
                                        </h4>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        {props.info.gunplay && (
                            <div>
                                <h4 id="undrawnLine" className="notButter">Gunplay Stunts</h4>
                                <ul className="notButter">
                                    {props.info.gunplay?.map((myObject, index) => (
                                        <li key={index}>
                                            <span id="bold">{myObject.name}</span> ({myObject.desc})
                                            <ul>
                                                {myObject.stunts?.map((myObject, index) => (
                                                    <li key={index}>
                                                        <span id="italicked">{myObject.name}</span>: {myObject.desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {props.info.gunsmith && (
                            <div>
                                <h4 id="undrawnLine" className="notButter">Gunsmithing Stunts</h4>
                                <ul className="notButter">
                                    {props.info.gunsmith?.map((myObject, index) => (
                                        <li key={index}>
                                            <span id="bold">{myObject.name}</span> {myObject.desc && <span>({myObject.desc})</span>}
                                            <ul>
                                                {myObject.stunts?.map((myObject, index) => (
                                                    <li key={index}>
                                                        <span id="italicked">{myObject.name}</span>: {myObject.desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {props.info.allomancy && (
                            <div>
                                <h4 id="undrawnLine" className="notButter">Powers (Allomancy)</h4>
                                <ul className="notButter">
                                    {props.info.allomancy?.map((myObject, index) => (
                                        <li key={index}>
                                            <span id="bold">{myObject.name}</span> ({myObject.desc})
                                            <ul>
                                                {myObject.stunts?.map((myObject, index) => (
                                                    <li key={index}>
                                                        <span id="italicked">{myObject.name}</span>: {myObject.desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {props.info.feruchemy && (
                            <div>
                                <h4 id="undrawnLine" className="notButter">Powers (Feruchemy)</h4>
                                <ul className="notButter">
                                    {props.info.feruchemy?.map((myObject, index) => (
                                        <li key={index}>
                                            <span id="bold">{myObject.name}</span> ({myObject.desc})
                                            <ul>
                                                {myObject.stunts?.map((myObject, index) => (
                                                    <li key={index}>
                                                        <span id="italicked">{myObject.name}</span>: {myObject.desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {props.info.hemalurgy && (
                            <div>
                                <h4 id="undrawnLine" className="notButter">Powers (Hemalurgy)</h4>
                                <ul className="notButter">
                                    {props.info.hemalurgy?.map((myObject, index) => (
                                        <li key={index}>
                                            <span id="bold">{myObject.name}</span> ({myObject.desc})
                                            <ul>
                                                {myObject.stunts?.map((myObject, index) => (
                                                    <li key={index}>
                                                        <span id="italicked">{myObject.name}</span>: {myObject.desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {props.info.koloss && (
                            <div>
                                <h4 id="undrawnLine" className="notButter">Powers (Koloss)</h4>
                                <ul className="notButter">
                                    {props.info.koloss?.map((myObject, index) => (
                                        <li key={index}>
                                            <span id="bold">{myObject.name}</span> ({myObject.desc})
                                            <ul>
                                                {myObject.stunts?.map((myObject, index) => (
                                                    <li key={index}>
                                                        <span id="italicked">{myObject.name}</span>: {myObject.desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {props.info.kandra && (
                            <div>
                                <h4 id="undrawnLine" className="notButter">Powers (Kandra)</h4>
                                <ul className="notButter">
                                    {props.info.kandra?.map((myObject, index) => (
                                        <li key={index}>
                                            <span id="bold">{myObject.name}</span> ({myObject.desc})
                                            <ul>
                                                {myObject.stunts?.map((myObject, index) => (
                                                    <li key={index}>
                                                        <span id="italicked">{myObject.name}</span>: {myObject.desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    {props.info.equipment &&
                        <div className='justified'>
                            <span id='bold'>Equipment: {props.info.equipment?.map((myObject, index) => (
                                <span key={index}><span id="timid">{myObject.item}</span>; </span>
                            ))}</span>
                        </div>
                    }
                  </div>
                }
                {myLore &&
                    <div>
                        <div>
                            <h3>Lore</h3>
                            {props.info.lore.example &&
                                <div id='example'>
                                    {props.info.lore.example}
                                <br/><br/>
                                </div>
                            }
                            {props.info.lore.info}
                        </div>
                        
                        {props.info.roleplay &&
                            <div>
                                {props.info.roleplay.playing &&
                                    <div>
                                        <h3>Playing {props.info.name}</h3>
                                        {props.info.roleplay.playing}
                                    </div>
                                }
                                {props.info.roleplay.ally &&
                                    <div>
                                        <h3>{props.info.name} as an Ally</h3>
                                        {props.info.roleplay.ally}
                                    </div>
                                }
                                {props.info.roleplay.enemy &&
                                    <div>
                                        <h3>{props.info.name} as an Enemy</h3>
                                        {props.info.roleplay.enemy}
                                    </div>
                                }
                                {props.info.roleplay.whatif &&
                                    <div>
                                        <h3>What if {props.info.name}...?</h3>
                                        {props.info.roleplay.whatif}
                                    </div>
                                }
                            </div>

                        }
                    </div>
                }
                {myImage &&
                    <div>
                    <br/>
                        {props.info.image ? 
                            <div id="centerIMG">
                                <div>
                                    <img className="heroSample" id="rightSample" src={props.info.image} alt={props.info.name} />
                                    <br/>
                                </div>
                            </div>
                            :
                            <div>
                                <h3>There are no images of {props.info.name}</h3>
                            </div>
                        }
                    </div>
                }
                </div>
            ) : (
                <div>
                    <h3 className="marginal">You have no selected Character</h3>
                </div>
            )}
        </>
    );
}

export default Beast;
