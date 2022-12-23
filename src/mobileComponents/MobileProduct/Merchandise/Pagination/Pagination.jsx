import React from 'react';
import './Pagination.scss';


export default function Pagination() {
    return (
        <div className="pagination">
            <div className="pagination__container">
                <div className="pagination__item current">1</div>
                <div className="pagination__item">2</div>
                <div className="pagination__item">3</div>
                <div className="pagination__item">4</div>
                <div className="pagination__item">5</div>
            </div>
        </div>
    );
}