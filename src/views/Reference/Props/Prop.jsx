/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import Table from "../../Modules/Table";

function Prop(props) {
    return (
        <>
            {props.prop ? (
                <div id='prop-list'>
                  <table>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <h2 className="notButter">{props.prop.item}</h2>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}> 
                          <h3 className="notButter">Type of Prop: {props.prop.type}</h3>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h3 className="notButter">Prop Cost: {props.prop.props}</h3>
                        </td>
                        <td>
                          <h3 className="notButter">Difficulty: {props.prop.difficulty}</h3>
                        </td>
                      </tr>
                      {props.prop.damage && (
                        <tr>
                          <td colSpan={2}>
                            <h3 className="notButter">
                              Weapon Damage: {props.prop.damage}
                            </h3>
                          </td>
                        </tr>
                      )}
                      {props.prop.capacity && (
                        <tr>
                          <td colSpan={2}>
                            <h3 className="notButter">Ammo Capacity: {props.prop.capacity}</h3>
                          </td>
                        </tr>
                      )}
                      {props.prop.range && (
                        <tr>
                          <td colSpan={2}>
                            <h3 className="notButter">
                                Range: {props.prop.range}
                            </h3>
                          </td>
                        </tr>
                      )}
                      {props.prop.thrown && (
                        <tr>
                          <td colSpan={2}>
                            <h3 className="notButter">Thrown Range: {props.prop.thrown}</h3>
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
                            <div id="example">
                                {props.prop.note}
                                <br/><br/>
                                {props.prop.table && (
                                    <div>
                                        <Table info={props.prop.table} />
                                    </div>
                                )}
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
