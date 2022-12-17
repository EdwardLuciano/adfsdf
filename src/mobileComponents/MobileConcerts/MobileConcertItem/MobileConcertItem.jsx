import React from 'react';
import './MobileConcertItem.scss';


export default function ConcertItem({ date, name, link, linkvk, place, typebutton }) {
    function showModalMts(e) {
        window.TLIframe.showPopup({url: e.target.dataset.href});
    }
    return (
        <div className="concert-info__item">
            <h2 className="concert-info__date">
                {date}
            </h2>
            <p className="concert-info__club-name">
                {name} <b>{place}</b>
            </p>
            <div className="concert-info__buttons">

                {typebutton==0 ? (
                    <a href={link} className="button concert-info__buy-ticket">Купить билет</a>
                ) : (
                    <a data-href={link} className="button concert-info__buy-ticket" onClick={showModalMts}>Купить билет</a>
                )}

                <a href={linkvk} className="button concert-info__vk-event">
                    Встреча VK
                </a>
            </div>
        </div>
    ); 
}