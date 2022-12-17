import React from 'react';
import './MobileMusicsListItem.scss';


export default function MusicsListItem({item}) {
    return (
        <div className="mobile-musics__list-item">
            <img src={"https://api.ramilmusic.com"+item.cover} alt={item.title} className="mobile-musics__list-item__image" />
            <h2 className="mobile-musics__list-item__track-title">{item.title}</h2>
            <p className="mobile-musics__list-item__track-type">{item.type}</p>
        </div>
    );
}