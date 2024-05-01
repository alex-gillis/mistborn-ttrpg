/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

function Tactics(props) {

    return (
        < >
            <h1>Tactics in a Social Conflict</h1>
            <div>{ props.tactics.intro }</div>
            <h2>Character Assassination</h2>
            <div>
                { props.tactics.blackmail.part1 } <span id="bolder">{ props.tactics.blackmail.highlight1 }</span> 
            </div>
            <br/>
            <div>  
                { props.tactics.blackmail.part2 }  <span id="bolder">{ props.tactics.blackmail.highlight2 }</span> { props.tactics.blackmail.part3 }  
            </div>
            <br/>
            <div>
                <span id="bolder">{ props.tactics.blackmail.highlight3 }</span> { props.tactics.blackmail.part4 }
            </div>
            <h2>Dirty Campaigning</h2>
            <div>
                { props.tactics.torture.part1 }
            </div>
            <br/>
            <div>
                <span id="bolder">{ props.tactics.torture.highlight1 }</span>, { props.tactics.torture.part2 } <span id="bolder">{ props.tactics.torture.highlight2 }</span>. { props.tactics.torture.part3 }, <span id="bolder">{ props.tactics.torture.highlight3 }</span> { props.tactics.torture.part4 } 
            </div>
            <br/>
            <div>
                <span id="bolder">{ props.tactics.torture.highlight4 }</span> { props.tactics.torture.part5 }
            </div>
            <h2>Seduction and Tests of Will</h2>
            <div>
                { props.tactics.seduction.part1 } <span id="bolder">{ props.tactics.seduction.highlight1 }</span> { props.tactics.seduction.part2 }
            </div>
            <br/>
            <div>  
                <span id="bolder">{ props.tactics.seduction.highlight2 }</span> { props.tactics.seduction.part3 }
            </div>
            <br/>
            <div>  
                <span id="bolder">{ props.tactics.seduction.highlight3 }</span> { props.tactics.seduction.part4 }
            </div>
            <h2>Emotional Allomancy</h2>
            <div>
                { props.tactics.emotion.part1 } <span id="bolder">{ props.tactics.emotion.highlight1 }</span> { props.tactics.emotion.part2 }
                <span id="bolder">{ props.tactics.emotion.highlight2 }</span> { props.tactics.emotion.part3 }
            </div>
            <br/>
            <div>  
                <span id="bolder">{ props.tactics.emotion.highlight3 }</span> { props.tactics.emotion.part4 }
            </div>
        </>
    )
}

export default Tactics
