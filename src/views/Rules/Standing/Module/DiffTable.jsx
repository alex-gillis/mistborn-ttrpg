/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function DiffTable(props) {
    return (
      <>
        <table id="buildTable">
            <tbody>
                <tr className="centered" id="bold">
                    <td>Difficulty</td>
                    <td>{props.title}</td>
                </tr>
                {props.info?.map((myObject, index) => (
                    <tr key={index}>
                        <td className="centered">{myObject.one}</td>
                        <td id="buildRow">{myObject.two}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </>
    );
}
  
export default DiffTable;
