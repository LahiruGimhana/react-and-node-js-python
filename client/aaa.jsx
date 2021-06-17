import React from 'react';
import { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

import loginIcon from './images/user.svg';
import uiImg from './images/login.svg';
import './Login2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login2 = () => {


 

  // const Home = () => {   
    // let history = useHistory();
    const [inputData, setInputData] = useState({distric:"", season:""});
  
    // const submitCropSelectionData = (event) => {
    //     console.log(inputData);
    //   event.preventDefault();
    //   Axios.post("http://localhost:3001/input", {
    //       // inputData:inputData,
    //       distric: inputData.distric,
    //       season: inputData.season,
    //   }).then(() => {
    //     setInputData([
    //       ...inputData,
    //       {
    //       //   distric: distric,
    //       //   season: season,
    //       },
    //     ]);
    //   });
    //   history.push('./Result'); 
    // };

  //   const getCropSelectionData = () => {
  //     Axios.get("http://localhost:3001/result").then((response) => {
  //       setInputData(response.data);
  //     });
  //   };

  


    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
	        			<h3 className="title">Most suitable crop & cultivare</h3>
                    <div className="col-sm text-center mt-5 p-3" lg={4} md={6} sm={12} >
                        <img className="icon-img" src={loginIcon} alt="icon"/>
                        <form>
                          <div className="form-group row">
                            <label for="inputPassword" className="col-sm-2 col-form-label"><h5>Your District</h5></label>
                            <div className="col-sm-10">
                              {/* <input type="password" className="form-control" id="inputPassword" placeholder="Password" /> */}
                             
                                <select className="custom-select" name="distric" onChange={e => setInputData({ ...inputData, distric: e.target.value })} required>
                                  <option value="">select Distric</option>
                                  <option value="kurunegala">kurunegala</option>
                                  <option value="kandy">kandy</option>
                                  <option value="colombo">colombo</option>
                                </select>
                                <div className="invalid-feedback">Example invalid custom select feedback</div>
                              
                            </div>
                          </div>
                          
                          <div className="form-group row">
                            <label for="inputPassword" className="col-sm-2 col-form-label"><h5>Current Season</h5></label>
                            <div className="col-sm-10">
                              {/* <input type="password" className="form-control" id="inputPassword" placeholder="Password" /> */}
                              
                                {/* <select className="custom-select" onChange={(e)=>{const Season=e.target.value; setInputData(Season)}}> */}
                                <select className="custom-select" name="season" onChange={e => setInputData({ ...inputData, season: e.target.value })} required>
                                  <option value="">select season</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                                <div className="invalid-feedback">Example invalid custom select feedback</div>
                              
                            </div>
                          </div>

                          <div className="text-center ">
                          <button type="submit" className="btn btn-primary m-2 px-3" value="Login">back</button>
                          <button type="submit" className="btn btn-primary m-2 px-3"value="Login"  Redirect  to="/Result/" >ok</button>
                          </div>
                        </form>
                    </div>
                    <div className="col-sm">
                        <img className="w-100" src={uiImg} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login2


// "dependencies": {
//   "@testing-library/jest-dom": "^5.11.4",
//   "@testing-library/react": "^11.1.0",
//   "@testing-library/user-event": "^12.1.10",
//   "axios": "^0.21.0",
//   "bootstrap": "^5.0.1",
//   "react": "^17.0.1",
//   "react-dom": "^17.0.1",
//   "react-router-dom": "^5.2.0",
//   "react-scripts": "4.0.0",
//   "web-vitals": "^0.2.4"
// },