/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Groups(props) {

    return (
        < >
            <h1>Grouping Extras</h1>
            <div>{ props.grouping.part1 }</div>
            <br/>
            <div id="example">{ props.grouping.example1 }</div>
            <br/>
            <div>{ props.grouping.part2 }</div>
            <br/>
            <div id="example">{ props.grouping.example2 }</div>
            <br/>
            <div>{ props.grouping.part3 }</div>

        </>
    )
}

export default Groups
