import React, { useEffect, useState, useReducer } from 'react';
import '../../../tour2022.scss';
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Concerttour from "./Concerttour";

 function TourComp() {

  const [items, setItems] = useState([]);
  const apiURL = "https://api.ramilmusic.com/concerts?_format=json&per-page=1000";

  useEffect(() => {
       getConcerts();
  }, []);

  const getConcerts = () => {
    axios.get(apiURL)
    .then(function (response) {
      setItems(response.data.items);
    })
    .catch(function (error) {
      console.log('error');
    })
  }
console.log(items);
 	document.querySelector("meta[name='theme-color']").setAttribute("content", "#7b4502");

 	return(
	<div className="main">
		{/*<div className="fill"></div>
        <div className="header">
			<div className="label-tour">TOUR 2022</div>
			<div className="label-artist">RAMIL'</div>
        </div>
		<div className="texture"></div>*/}
		<div className="header-tour">
			<div className="header-labels">
				<div className="label-tour"><span>TOUR 2022</span></div>
				<div className="label-artist">RAMIL'</div>
			</div>
        </div>
        <div className="badge-mts"></div>
        <div className="concerts-tour">
        	<div className="concerts-list">


        		{items.map(item => (
	                <Concerttour
	                    id={item.id}
	                    date={item.date}
	                    city={item.city}
	                    link={item.link}
	                    typebutton={item.typebutton}
	                />

                ))}
        	</div>

        </div>
	</div>
	);
 }

function PassComp() {
const [, forceUpdate] = useReducer(x => x + 1, 0);
    let navigate = useNavigate();

  function handleClick() {
    forceUpdate();
  }
	  const checkSuccesData = localStorage.getItem('checksuccess');
	var TruePass = 0;
const [password, setPassword] = useState();

    const checkPass = (event) => {
        event.preventDefault();
        console.log(2222);TruePass = 1;
        if (password == 'tvoydrug') {
        	 localStorage.setItem("checksuccess", 1);
        	    window.location.reload();

        	return <TourComp/>
        	
        }
    }

    console.log(TruePass);


	return(
	<div className="main">
		{/*<div className="fill"></div>
        <div className="header">
			<div className="label-tour">TOUR 2022</div>
			<div className="label-artist">RAMIL'</div>
        </div>
		<div className="texture"></div>*/}
		<div className="header-tour header-tour_password">

		<div className="photo_to_passwordPage"></div>
		<div className="bgPassMob"></div>
			<div className="header-labels header-labels_password">
				<div className="label-tour label-tour_password"><span>TOUR 2022</span></div>
				<div className="label-artist label-artist_password">RAMIL'</div>
				<form className="form-password" onSubmit={checkPass}>
					<div className="form-password-label">Введите пароль</div>
					<div className="form-password-input_container"><input type="text" className="form-password-input" onChange={(e) =>
                		setPassword(e.target.value)
         			}/></div>
					<div className="form-password-input_container"><button className="form-password-btn">Подтвердить</button></div>
				</form>
			</div>
        </div>
        

       
	</div>
	);
}
export default function Tour(auth) {

 //  const checkSuccesData = (localStorage.getItem('checksuccess') ? localStorage.getItem('checksuccess'): 0)

 //  const [checksuccess, setChecksuccess] = useState(checkSuccesData);
	
	// useEffect(() => {
	//     localStorage.setItem("checksuccess", checksuccess);
	// }, [checksuccess]);

	//alert(checksuccess);
		// if(checksuccess == 1) {
		// 	 return <TourComp/>
		// } else {
		// 	return <PassComp/>
		// }
	return <TourComp/>
}