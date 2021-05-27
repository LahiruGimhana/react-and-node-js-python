import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Nav from './components/Nav'
import Result from './components/Result'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/Result" exact component={Result} /> 
          <Route path="/" component={Home} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;



// import { useState } from "react";
// import Axios from "axios";


// function App() {
//   const [distric, setDistric] = useState("");
//   const [season, setSeason] = useState(0);
//   const [inputData, setInputData] = useState([]);

//   const submitCropSelectionData = () => {
//     console.log(distric);
//     Axios.post("http://localhost:3001/input", {
//       distric:distric,
//       season:season,
//     }).then(() => {
//       setInputData([
//         ...inputData,
//         {
//           distric: distric,
//           season: season,
//         },
//       ]);
//     });
//   };

//   const getCropSelectionData = () => {
//     Axios.get("http://localhost:3001/result").then((response) => {
//       setInputData(response.data);
//     });
//   };

 

//   return (
//     <div classdistric="App">
//       <div classdistric="information">
//         <label>distric:</label>
//         <input type="text" onChange={(event) => {  setDistric(event.target.value); }} />
//         <label>season:</label>
//         <input  type="number"  onChange={(event) => {  setSeason(event.target.value);}}/>
//         <button onClick={submitCropSelectionData}>Add Employee</button>
//       </div>
//       <div classdistric="employees">
//         {/* <button onClick={getCropSelectionData}>Show Employees</button> */}

//         {inputData.map((val, key) => {
//           return (
//             <div classdistric="employee">
//               <div>
//                 <h3>distric: {val.distric}</h3>
//                 <h3>season: {val.season}</h3>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;
