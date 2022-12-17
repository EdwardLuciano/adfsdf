import React from 'react';
import MusicsHeader from './MusicsHeader/MusicsHeader';
import MusicsList from './MusicsList/MusicsList';
import './Musics.scss';


export default function Musics() {
    return (
        <div className="musics" id="music">
            <MusicsHeader />
            <MusicsList />
        </div>
    );
}