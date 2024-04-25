/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

function Example(props) {
    return (
      <>
        <div id="boldlicked">{props.info.example}</div>
        <div>{props.info.explain}</div>
        <br/>
      </>
    );
}
  
export default Example;
