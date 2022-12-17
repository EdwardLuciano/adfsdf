import React from 'react';
import './ConcertHeaderRow.scss';


export default function ConcertHeaderRow() {
    return (
        <>
            <div className="concerts__concert">
                <p className="concerts__concert-date text concerts__concert-date--header">Дата</p>
                <p className="concerts__concert-city text">Город</p>
                <p className="concerts__concert-club text">Клуб</p>
            </div>
          
        </>
    );
}