/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Extended(props) {

    return (
        < >
            <h1>Extended Contests</h1>
            <div>{ props.extended.part1 }</div>
            <h2>Actions between Beats</h2>
            <div>{ props.extended.part2 }</div>
        </>
    )
}

export default Extended
