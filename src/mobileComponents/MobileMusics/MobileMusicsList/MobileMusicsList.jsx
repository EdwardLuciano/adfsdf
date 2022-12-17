import React, { useEffect, useState } from 'react';
import './MobileMusicsList.scss';
import { musics } from '../../../constants';
import MusicsListItem from './MobileMusicsListItem/MobileMusicsListItem';
import axios from "axios"

export default function MusicsList() {
  const [items, setItems] = useState([]);
  const apiURL = "https://api.ramilmusic.com/releases?_format=json&sort=-id";

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
    return (
        <div className="mobile-musics__list">
            {items.map(item => (
                <MusicsListItem
                    item={item}
                />
            ))}
        </div>
    );
}