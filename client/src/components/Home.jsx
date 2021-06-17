import React from 'react';
import { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

import loginIcon from './images/user.svg';
import uiImg from './images/login.svg';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <>
            <div className='container'>
                <div className='row'>      
                    <div className="col-sm-4 text-center">
                    <img className="icon-img" src={loginIcon} alt=""/>
                    <p>logo</p>
	        			    <h2 className="title text-center" style={{letterSpacing:"11px"}}>Most Suitable</h2>
	        			    <h2 className="title text-center" ><b>Crop & Cultivare</b></h2>
                        {/* <img className="icon-img" src={loginIcon} alt="icon"/> */}
                        <p style={{paddingLeft:"30px", paddingRight:"20px", marginLeft:"10px", textAlign: "justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>

                        <form>
                          <div className="form-group row">
                            <label for="inputPassword" className="col-sm col-form-label" style={{whiteSpace:'tab'}}><b>Your District</b></label>
                            <div className="col-sm-6  m-2">
                              {/* <input type="password" className="form-control" id="inputPassword" placeholder="Password" /> */}
                             
                                <select className="custom-select w-75" name="distric" onChange={e => setInputData({ ...inputData, distric: e.target.value })} required>
                                  <option value="">select Distric</option>
                                  <option value="kurunegala">kurunegala</option>
                                  <option value="kandy">kandy</option>
                                  <option value="colombo">colombo</option>
                                </select>
                                <div className="invalid-feedback">Example invalid custom select feedback</div>

                            </div>
                          </div>
                          
                          <div className="form-group row">
                            <label for="inputPassword" className="col-sm col-form-label "><b>Current Season</b></label>
                            <div className="col-sm-6 m-2 ">
                              {/* <input type="password" className="form-control" id="inputPassword" placeholder="Password" /> */}
                              
                                {/* <select className="custom-select" onChange={(e)=>{const Season=e.target.value; setInputData(Season)}}> */}
                                <select className="custom-select w-75 " name="season" onChange={e => setInputData({ ...inputData, season: e.target.value })} required>
                                  <option value="">select season</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                                <div className="invalid-feedback">Example invalid custom select feedback</div>
                              
                            </div>
                          </div>

                          <div className="text-center ">
                          <button type="submit" className="btn btn-primary m-4 w-25" value="Login">back</button>
                          <button type="submit" className="btn btn-primary m-4 w-25" value="Login"  Redirect  to="/Result/" >ok</button>
                          </div>
                        </form>
                    </div>
                    <div className="col-sm">
                        {/* <img className="w-100" src={uiImg} alt=""/> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home