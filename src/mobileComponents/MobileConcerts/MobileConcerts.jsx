import React, { useEffect, useState } from 'react';
import './MobileConcerts.scss';
import ConcertsHeader from './MobileConcertsHeader/MobileConcertsHeader';
import { MOBILE_CONCERTS } from '../../constants';
import ConcertItem from './MobileConcertItem/MobileConcertItem';
import axios from "axios"


export default function Concerts() {
  const [items, setItems] = useState([]);
  const apiURL = "https://api.ramilmusic.com/concerts?_format=json&per-page=1000";

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
        <div id="concerts">
            <ConcertsHeader />
            {items.map((item) => (
                <ConcertItem
                    key={item.id}
                    date={item.date}
                    name={item.city}
                    place={item.place}
                    link={item.link}
                    linkvk={item.linkvk}
                    typebutton={item.typebutton}

                />
            ))}
        </div>
    );
}