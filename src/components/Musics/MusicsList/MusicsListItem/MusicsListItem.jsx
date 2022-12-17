import React from 'react';
import './MusicsListItem.scss';


export default function MusicsListItem({ item }) {
    return (
        <div className="musics__list-item">
            <img src={"https://api.ramilmusic.com" + item.cover} alt={item.title} className="musics__list-item__image" />
            <div className="musics__list-item__info">
                <h2 className="musics__list-item__track-title">{item.title}</h2>
                <p className="musics__list-item__track-type">{item.type}</p>
            </div>
        </div>
    );
}