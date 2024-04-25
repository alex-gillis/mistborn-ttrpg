/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function TableFour(props) {
    return (
      <>
        <table id="buildTable">
            <tbody>
                {props.info?.map((myObject, index) => (
                    <tr key={index}>
                        <td id="buildRow">{myObject.one}</td>
                        <td id="buildRow">{myObject.two}</td>
                        <td id="buildRow">{myObject.three}</td>
                        <td id="buildRow">{myObject.four}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </>
    );
}
  
export default TableFour;
