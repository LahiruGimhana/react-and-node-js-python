
import React from 'react';
import './Home.css';
import wave from './img/wave.png';
import bg from './img/bg.svg';
import avatar from './img/avatar.svg';
import { useState } from "react";
import Axios from "axios";
import { useHistory, Redirect } from "react-router-dom";


 

const Home = () => {   
      let history = useHistory();
      const [inputData, setInputData] = useState({distric:"", season:""});
    
      const submitCropSelectionData = (event) => {
          console.log(inputData);
        event.preventDefault();
        Axios.post("http://localhost:3001/input", {
            // inputData:inputData,
            distric: inputData.distric,
            season: inputData.season,
        }).then(() => {
          setInputData([
            ...inputData,
            {
            //   distric: distric,
            //   season: season,
            },
          ]);
        });
        history.push('./Result'); 
      };

    //   const getCropSelectionData = () => {
    //     Axios.get("http://localhost:3001/result").then((response) => {
    //       setInputData(response.data);
    //     });
    //   };

    


    return (
        <div>
            <img className="wave" src={wave}/>
	        <div className="container">
	        	<div className="img">
	        		<img src={bg}/>
	        	</div>
	        	<div className="login-content">
	        		<form onSubmit={submitCropSelectionData}>
	        			<img src={avatar} />
	        			<h3 className="title">Most suitable crop & cultivare</h3>
                   		<br></br>
                        <div className="input-group mb-3">
                            <div className="row" >
                                <div className="column">
                                    <span className="input-group-addon"><h5>Your District</h5></span>
                                </div>
                                <div className="column" style={{textAlign:'center'}}>
                                    <div className="div">
                                    <div class="form-group">
                                    {/* <select> */}
                                      {/* <select class="custom-select" onChange={(e)=>{const Distric=e.target.value; setInputData(Distric)}}> */}
                                      <select class="custom-select" name="distric" onChange={e => setInputData({ ...inputData, distric: e.target.value })} required>
                                        <option value="">select Distric</option>
                                        <option value="kurunegala">kurunegala</option>
                                        <option value="kandy">kandy</option>
                                        <option value="colombo">colombo</option>
                                      </select>
                                      <div class="invalid-feedback">Example invalid custom select feedback</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <div className="row">
                                <div className="column">
                                    <span className="input-group-addon"><h5>Current Season</h5></span>
                                </div>
                                <div className="column">
                                    <div className="div">
                                    <div class="form-group">
                                    {/* <select class="custom-select" onChange={(e)=>{const Season=e.target.value; setInputData(Season)}}> */}
                                    <select class="custom-select" name="season" onChange={e => setInputData({ ...inputData, season: e.target.value })} required>
                                        <option value="">select season</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                      </select>
                                      <div class="invalid-feedback">Example invalid custom select feedback</div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success" value="Login">back</button>
                        <button type="submit" className="btn btn-primary" value="Login"  Redirect  to="/Result/" >ok</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home
