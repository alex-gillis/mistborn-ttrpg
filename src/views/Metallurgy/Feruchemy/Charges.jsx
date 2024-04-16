/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Charges(props) {
    if (props.metal.feruchemy.store === undefined || props.metal.feruchemy.store === "") {
        return (
          < >
            <h4>Feruchemy</h4>
            { props.metal.feruchemy.lore }
          </>
        )
    } else {

    return (
      < >
        <h4>Feruchemy</h4>
        { props.metal.feruchemy.lore }
        <h4>Rules</h4>
        <span id="bolder">Storing charges in a { props.metal.name }mind:</span> { props.metal.feruchemy.store }
        <br/>
        <span id="bolder">Tapping charges from a { props.metal.name }mind:</span> { props.metal.feruchemy.tap }
        <br/>
        <span id="bolder">Tapping 10 or more charges from a { props.metal.name }mind:</span> { props.metal.feruchemy.tapped }
      </>
    )
  }
}

export default Charges
  