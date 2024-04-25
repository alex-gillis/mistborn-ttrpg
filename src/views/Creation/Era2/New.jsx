/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function New(props) {
    return (
      <>
        <h1>Which options are new?</h1>
        <div>{props.new.basics}</div>
        <h2>Ferrings</h2>
        <div>{props.new.ferring}</div>
        <h2>Twinborn</h2>
        <div>{props.new.twinborn}</div>
        <h3>Compounders</h3>
        <div>{props.new.compounder}</div>
        <h2>Koloss-Blooded</h2>
        <div>{props.new.koloss}</div>
        <h2>Guns and Gunplay</h2>
        <div>{props.new.guns}</div>
        <h2>Stunts</h2>
        <div>{props.new.stunts}</div>
      </>
    );
}
  
export default New;
