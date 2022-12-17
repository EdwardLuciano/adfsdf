import React, { useEffect, useState, useReducer } from 'react';
import '../../../tour2022.scss';
import { useNavigate } from "react-router-dom";


 function TourComp() {
 	document.querySelector("meta[name='theme-color']").setAttribute("content", "#7b4502");
 	function showModalMts() {
 		window.TLIframe.showPopup({url: 'https://www.ticketland.ru/kluby/klub-adrenaline-stadium/ramil-moskva/20221124_2000-4225346'})
 	}
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
        <div className="concerts-tour">
        	<div className="concerts-list">
        		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				04.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Благовещенск
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/blagoveshhensk/concerts/ramil-blagoveschensk">Купить билеты</a>
        			</div>
        		</div>
        		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				06.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Владивосток
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/vladivostok/concerts/ramil-vladivostok">Купить билеты</a>
        			</div>
        		</div>
        		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				08.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Южно-Сахалинск
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/yuzhno-saxalinsk/concerts/ramil-yuzhno-sakhalinsk">Купить билеты</a>
        			</div>
        		</div>
        		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				09.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Хабаровск
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/xabarovsk/concerts/ramil-khabarovsk">Купить билеты</a>
        			</div>
        		</div>
        		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				11.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Иркутск
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/irkutsk/concerts/ramil-irkutsk">Купить билеты</a>
        			</div>
        		</div>
        		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				13.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Красноярск
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/krasnoyarsk/concerts/ramil-krasnoyarsk">Купить билеты</a>
        			</div>
        		</div>
        		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				15.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Томск
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/tomsk/concerts/ramil-tomsk">Купить билеты</a>
        			</div>
        		</div>
        		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				16.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Новосибирск
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/novosibirsk/concerts/ramil-novosibirsk">Купить билеты</a>
        			</div>
        		</div>
        		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				18.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Омск
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/omsk/concerts/ramil-omsk">Купить билеты</a>
        			</div>
        		</div>
        		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				19.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Тюмень
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/tyumen/concerts/ramil-tyumen">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				21.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Екатеринбург
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/ekaterinburg/concerts/ramil-ekaterinburg">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				23.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Челябинск
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/chelyabinsk/concerts/ramil-chelyabinsk">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				24.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Пермь
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/perm/concerts/ramil-perm">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				26.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Ижевск
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/izhevsk/concerts/ramil-izhevsk">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				27.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Киров
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/kirov/concerts/ramil-kirov">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				29.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Казань
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/kazan/concerts/ramil-kazan">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				31.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Уфа
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/ufa/concerts/ramil-ufa">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				01.11
        			</div>
        			<div className="concerts-list-concert_city">
        				Самара
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/samara/concerts/ramil-samara">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				03.11
        			</div>
        			<div className="concerts-list-concert_city">
        				Саратов
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/saratov/concerts/ramil-saratov">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				04.11
        			</div>
        			<div className="concerts-list-concert_city">
        				Волгоград
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/volgograd/concerts/ramil-volgograd">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				06.11
        			</div>
        			<div className="concerts-list-concert_city">
        				Краснодар
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/krasnodar/concerts/ramil-krasnodar">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				07.11
        			</div>
        			<div className="concerts-list-concert_city">
        				Ростов
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/rostov-na-donu/concerts/ramil-rostov-na-donu">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				09.11
        			</div>
        			<div className="concerts-list-concert_city">
        				Воронеж
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/voronezh/concerts/ramil-voronezh">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				10.11
        			</div>
        			<div className="concerts-list-concert_city">
        				Белгород
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/belgorod/concerts/ramil-belgorod">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				12.11
        			</div>
        			<div className="concerts-list-concert_city">
        				Курск
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/kursk/concerts/ramil-kursk">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				13.10
        			</div>
        			<div className="concerts-list-concert_city">
        				Орёл
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/oryol/concerts/ramil-oryol">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				15.11
        			</div>
        			<div className="concerts-list-concert_city">
        				Тула
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/tula/concerts/ramil-tula">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				17.11
        			</div>
        			<div className="concerts-list-concert_city">
        				Нижний Новгород
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/nizhnij-novgorod/concerts/ramil-nizhniy-novgorod">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				18.11
        			</div>
        			<div className="concerts-list-concert_city">
        				Нижний Новгород
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/nizhnij-novgorod/concerts/ramil-nizhniy-novgorod">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				20.11
        			</div>
        			<div className="concerts-list-concert_city">
        				Архангельск
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/arxangelsk/concerts/ramil-arkhangelsk">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				23.11
        			</div>
        			<div className="concerts-list-concert_city">
        				Калининград
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/kaliningrad/concerts/ramil-kaliningrad">Купить билеты</a>
        			</div>
        		</div>
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				24.11
        			</div>
        			<div className="concerts-list-concert_city">
        				Москва
        			</div>
        			<div className="concerts-list-concert_button">
        				{/*<a href="https://live.mts.ru/moscow/concerts/ramil-moskva">Купить билеты</a>*/}
        				<button className="tl_button" onClick={showModalMts}>Купить билет</button>
        			</div>
        		</div>
         
         		<div className="concerts-list-concert">
        			<div className="concerts-list-concert_date">
        				26.11
        			</div>
        			<div className="concerts-list-concert_city">
        				Санкт-Петербург
        			</div>
        			<div className="concerts-list-concert_button">
        				<a href="https://live.mts.ru/sankt-peterburg/concerts/ramil-sankt-peterburg">Купить билеты</a>
        			</div>
        		</div>
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