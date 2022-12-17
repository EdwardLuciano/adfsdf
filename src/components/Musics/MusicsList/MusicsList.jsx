import React, { useEffect, useState } from 'react';
import './MusicsList.scss';
import { musics } from '../../../constants';
import MusicsListItem from './MusicsListItem/MusicsListItem';
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
        <div className="musics__list">
            {items.map((item, idx) => (
                <MusicsListItem item={item} key={idx} />
            ))}
        </div>
    );
}