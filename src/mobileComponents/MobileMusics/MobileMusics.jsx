import React from 'react';
import './MobileMusics.scss';
import MusicsHeader from './MobileMusicsHeader/MobileMusicsHeader';
import MusicsList from './MobileMusicsList/MobileMusicsList';


export default function MobileMusics() {
    return (
        <div id="music">
            <MusicsHeader />
            <MusicsList />
        </div>
    );
}