import React from 'react';


export default function Concerttour({id, date, city, link, typebutton}) {
	 	function showModalMts(e) {
 		window.TLIframe.showPopup({url: e.target.dataset.href});
 	}
	return (
        		<div className="concerts-list-concert" key={id}>
        			<div className="concerts-list-concert_date">
        				{date}
        			</div>
        			<div className="concerts-list-concert_city">
        				{city}
        			</div>
        			<div className="concerts-list-concert_button">
        			{typebutton==0 ? (
        				<a href={link}>Купить билеты</a>
        			) : (
        				<a data-href={link} onClick={showModalMts}>Купить билеты</a>

        			)}
        			
        			</div>
        		</div>
    );
}