/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function TableTwo(props) {
    return (
      <>
        <table id="buildTable">
            <tbody>
                {props.info?.map((myObject, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'evenRow' : 'oddRow'}>
                        <td id="buildRow">{myObject.one}</td>
                        <td id="buildRow">{myObject.two}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </>
    );
}
  
export default TableTwo;
