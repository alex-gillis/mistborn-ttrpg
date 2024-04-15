/* eslint-disable react/jsx-key */
import '../styles/App.css'
import Metal from './Metals/Metal'

const metalJSON = "./src/assets/metals.json"
let myMetals;

function getJSONData(retrieveScript, success, failure) {
  // retrieval of the JSON file

  fetch(retrieveScript)
      .then(response => response.json())
      .then(jsonData => success(jsonData))
      // eslint-disable-next-line no-unused-vars
      .catch(err => failure());
}

function collectMetals(result) {
  // this fetches the JSON and puts it into an array that can be accessed globally
  // console.log(result.metals);
  myMetals = result.metals;  
  myMetals.shift();      
}

function onError() {
  // this is an error that will be thrown up if the JSON can't be loaded
  console.log("*** Error has occured during fetch");
}

function App() {
  getJSONData(metalJSON, collectMetals, onError);

  return (
    <>
      {myMetals.map(myMetal => (
        <Metal metal={ myMetal } />
      ))}
    </>
  )
}

export default App
