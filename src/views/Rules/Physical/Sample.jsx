/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Sample(props) {

    return (
        < >
            <h1>Sample Combat</h1>
            {props.sample.conversation?.map((myObject, index) => (
                <div key={index}>
                    <div id="italicked">{myObject.part}</div>
                    <br/>
                    <div id="brandon">{myObject.convo}</div>
                    <br/>
                </div>
            ))}
        </>
    )
}

export default Sample
