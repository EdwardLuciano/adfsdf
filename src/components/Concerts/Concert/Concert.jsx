import React from 'react';
import vkIcon from '../../../assets/images/vk_icon.png';
import './Concert.scss';


export default function Concert({ id, date, city, club, link, linkvk, typebutton }) {
    function showModalMts(e) {
        window.TLIframe.showPopup({url: e.target.dataset.href});
    }
    return (
        <div className="concerts__concert" key={id}>
            <p className="concerts__concert-date text concerts__concert-date--header">{date}</p>
            <p className="concerts__concert-city text">{city}</p>
            <p className="concerts__concert-club text">{club}</p>
            <div className="concerts__concert-actions text">

                {typebutton==0 ? (
                <a href={link} className="concerts__buy-ticket" target="_blank">
                    КУПИТЬ БИЛЕТ
                </a>
                ) : (
                    <a data-href={link} className="concerts__buy-ticket" target="_blank" onClick={showModalMts}>
                        КУПИТЬ БИЛЕТ
                    </a>
                )}
                
                <a href={linkvk} className="concerts__vk-event-link" target="_blank">
                    <img src={vkIcon} alt="vk_icon" className="concerts__vk-icon" />
                </a>
            </div>
        </div>
    );
}

