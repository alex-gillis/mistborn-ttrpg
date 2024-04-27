/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import TableFour from "./TableFour";

function Names(props) {
    return (
        < >
        <div>
            <h2 id="italicked">Choose a name</h2>
            <div>{props.names.basics}</div>
            <h4>Female Names</h4>
            <TableFour info={props.names.female}/>
            <br/>
            <h4>Male Names</h4>
            <TableFour info={props.names.male}/>
            <br/>
            <h4 id="italicked">Commoner Surnames</h4>
            {props.names.common}
            <TableFour info={props.names.commoner}/>
            <br/>
            <h4 id="italicked">Noble Surnames</h4>
            {props.names.surname}
            <TableFour info={props.names.noble}/>
            <br/>
            <div id="italicked">{props.names.example}</div>
        </div>
        </>
    )
}

export default Names;