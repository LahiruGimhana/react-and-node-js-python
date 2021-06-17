import React, {useEffect, useState} from 'react';
// import './Home.css';
import wave from './img/wave.png';
import bg from './img/bg.svg';
import avatar from './img/avatar.svg';
import Axios from "axios";
import { useHistory } from "react-router-dom";


function Result() {
    // useEffect(()=>{
    //     fetchItems();
    // },[]);

    // const [items, setItems] = useState([]);
    // 

    // const fetchItems = async()=>{
    //     const data=await fetch('./results');
    //     const items=await data.json();
    //     setItems(items);
    // }

//     return (
//         <>
//             <section>
//                 {
//                     items.map(item=>(
//                         <div>
//                             <p>{item.name}{item.msg}</p>
//                         </div>
//                     ))
//                 }
//             </section>
//         </>
//     )
// }

// export default Result


    const [outputData, setOutputData]= useState([])
    let history = useHistory();

    useEffect(()=>{
        getCropSelectionData();
    },[]);


      const getCropSelectionData = () => {
        Axios.get("http://localhost:3001/result").then((response) => {
          setOutputData(response.data);
        });
      };

    


    return (
        <div>
            {/* <img className="wave" src={wave} alt=""/> */}
	        <div className="container">
	        	<div className="img">
	        		{/* <img src={bg} alt=""/> */}
	        	</div>
	        	<div className="login-content">
	        		<form >
	        			{/* <img src={avatar} alt=""/> */}
	        			<h3 className="title">The most suitable crop to <br/>cultivate in your area at<br/> this season is </h3>
                   		<br/>
                           {
                              outputData.map((val, key) => {
                                <div >
                                  <div>
                                    <h3>Best value: {val.answer}</h3>
                                  </div>
                                </div>
                           })}
                        <button type="submit" className="btn btn-success" value="Login" onClick={()=>{history.push('./Home')}}>back</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Result
