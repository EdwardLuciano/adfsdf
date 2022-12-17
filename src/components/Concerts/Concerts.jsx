import React, { useEffect, useState } from 'react';
import Concert from './Concert/Concert';
import ConcertHeader from './ConcertHeader/ConcertHeader';
import ConcertHeaderRow from './ConcertHeaderRow/ConcertHeaderRow';
import './Concerts.scss';
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
  
 // console.log(items);

    return (
        <section className="concerts" id="concerts">
            <ConcertHeader />
            <div className="concerts-info">
                <ConcertHeaderRow />
                <div className="concerts-info__list">
                    {items.map((item, idx)=> (
                        <Concert
                            id={item.id}
                            date={item.date}
                            city={item.city}
                            club={item.place}
                            link={item.link}
                            linkvk={item.linkvk}
                            typebutton={item.typebutton}
                            key={idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}