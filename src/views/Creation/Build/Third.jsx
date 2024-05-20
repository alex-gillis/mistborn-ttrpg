/* eslint-disable react/jsx-key */

import TableTwo from "../../Modules/TableTwo"

/* eslint-disable react/prop-types */
function Third(props) {
    return (
      < >
        <h1>Step 3: Answer 10 Important Questions</h1>
      <div>{props.build.step3}</div>
      <div>
        {props.build.questions?.map((myQuestion, index) => (
          <div key={index}>
            <h2>{index + 1}- {myQuestion.question}</h2>
            <div>{myQuestion.part1}</div>
            <br/>
            <table id="buildTable">
              <tbody>
                {myQuestion.table?.map((myItem, rowIndex) => (
                  <tr key={rowIndex}>
                    {myItem.item?.map((myInfo, cellIndex) => (
                      <td id="buildRow" key={cellIndex}>{myInfo.info}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <br/>
            <div>{myQuestion.part2}</div>
            <div id="italicked">{myQuestion.example1}</div>
            <div>{myQuestion.part3}</div>
            <div id="italicked">{myQuestion.example2}</div>
            <div>{myQuestion.part4}</div>
          </div>
        ))}
        <h2>6- {props.build.qSix}</h2>
        <div>{props.build.qSix1}</div>
        <br/>
        {props.build.powers.map((myQ, index) => (
            <li id="filter-button" key={index}>
              {myQ.option}
            </li>
        ))}
        <br/>
        <div>{props.build.qSix2}</div>
        <br/>
        <div id="italicked">{props.build.example}</div>
        <br/>
        <div id="brandon">
            <h4>From Brandon</h4>
            {props.build.brandon2}
        </div>
        <h2>7- {props.build.qSeven}</h2>
        <div>{props.build.qSeven1}</div>
        <br/>
        {props.build.mental.map((myQ, index) => (
            <li id="filter-button" key={index}>
              {myQ.option}
            </li>
        ))}
        <br/>
        <div>{props.build.qSeven2}</div>
        <br/>
        <div id="italicked">{props.build.example3}</div>
        <br/>
        <div>{props.build.qSeven3}</div>
        <h2>8- {props.build.qEight}</h2>
        <div>{props.build.qEight1}</div>
        <br/>
        {props.build.standing.map((myQ, index) => (
            <li id="filter-button" key={index}>
              {myQ.option}
            </li>
        ))}
        <br/>
        <div>{props.build.qEight2}</div>
        <br/>
        <div id="italicked">{props.build.example4}</div>
        <br/>
        <div>{props.build.qEight3}</div>
        <h2>9- What is the worst thing that ever happened to you?</h2>
        <div>{props.build.qNine1}</div>
        {props.build.possibilities.map((myQ, index) => (
            <div key={index}>
                <p id="italicked">{myQ.example}</p>
                <p>{myQ.explain}</p>
            </div>
        ))}
        <TableTwo info={props.build.extraPossible} />
        <br/>
        <div>{props.build.qNine2}</div>
        <br/>
        <div id="italicked">{props.build.example5}</div>
        <h2>10- What do you believe is your ultimate purpose?</h2>
        <div>{props.build.qTen1}</div>
        <br/>
        <table id="buildTable">
          <tbody>
            {props.build.destiny.map((myItem, index) => (
                <tr key={index}>
                    <td id="buildRow">{myItem.one}</td> 
                    <td id="buildRow">{myItem.two}</td>
                </tr> 
            ))}
          </tbody>
        </table>
        <br/>
        <div>{props.build.qTen2}</div>
        <br/>
        <div id="italicked">{props.build.example6}</div>
        <br/>
        <div>{props.build.qTen3}</div>
      </div>
      </>
    )
  }
  
  export default Third
  