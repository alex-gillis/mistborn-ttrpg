/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Table from "../../Modules/Table";

function Prop(props) {
    return (
        <>
            {props.prop ? (
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <h2 className="notButter">{props.prop.item}</h2>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}> 
                          <h3 className="notButter">Type of Prop: <span id="timid">{props.prop.type}</span></h3>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h3 className="notButter">Prop Cost: <span id="timid">{props.prop.props}</span></h3>
                        </td>
                        <td>
                          <h3 className="notButter">Difficulty: <span id="timid">{props.prop.difficulty}</span></h3>
                        </td>
                      </tr>
                      {props.prop.damage && (
                        <tr>
                          <td colSpan={2}>
                            <h3 className="notButter">
                              Weapon Damage: <span id="timid">{props.prop.damage}</span>
                            </h3>
                          </td>
                        </tr>
                      )}
                      {props.prop.capacity && (
                        <tr>
                          <td colSpan={2}>
                            <h3 className="notButter">Ammo Capacity: <span id="timid">{props.prop.capacity}</span></h3>
                          </td>
                        </tr>
                      )}
                      {props.prop.range && (
                        <tr>
                          <td colSpan={2}>
                            <h3 className="notButter">
                                Range: <span id="timid">{props.prop.range}</span>
                            </h3>
                          </td>
                        </tr>
                      )}
                      {props.prop.thrown && (
                        <tr>
                          <td colSpan={2}>
                            <h3 className="notButter">Thrown Range: <span id="timid">{props.prop.thrown}</span></h3>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                    <div className="centered">
                        {props.prop.desc}
                        <br />
                        <br />
                        {props.prop.note && (
                          <div id="brandon">
                            <h5>Weapon Notes</h5>
                            <div id="example">
                              {props.prop.note}
                              {props.prop.table && (
                                <div>
                                  <br/><br/>
                                  <Table info={props.prop.table} />
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                    </div>
                </div>
            ) : (
                <div>
                    <h3 className="marginal">You have no selected prop</h3>
                </div>
            )}
        </>
    );
}

export default Prop;
