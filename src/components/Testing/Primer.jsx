import React, { useEffect, useState } from 'react';
import './Primer.scss';



export default function MerchandiseList({ setCart, cart }) {
    
    const [count, setCount] = useState('Купить');

    const handleClick = () => {
        if (count == 'Купить'){
            setCount(<button>Абоба</button>);
        }
    }
  
    

       return (
        <div>
        <h3 className="center">
          Welcome to the Counter of Life 
        </h3>
        <button 
           className="center-block" 
           onClick={handleClick}>
         {count}
        </button>
      </div>
       );
   }