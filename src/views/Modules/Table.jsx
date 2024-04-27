/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Table(props) {
    return (
      <>
        <table id="buildTable">
            <tbody>
                {props.info?.map((myObject, index) => (
                    <tr key={index}>
                        <td id="buildRow">{myObject.one}</td>
                        <td id="buildRow">{myObject.two}</td>
                        <td id="buildRow">{myObject.three}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </>
    );
}
  
export default Table;
