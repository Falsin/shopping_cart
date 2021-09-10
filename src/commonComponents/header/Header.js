import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import cart from '../../images/cart.svg';

let selectedItemsArr = [];

export default function Header(props) {
  const [countSelectedElements, setCountSelectedElements] = useState(selectedItemsArr);

  useEffect(() => {
    if (props.selectedItems) {
      selectedItemsArr = props.selectedItems;
      setCountSelectedElements(props.selectedItems);
    }
  }, [props.selectedItems])

  return (
    <header>
      <h2>Fake Store</h2>
      <ul>
        <li><NavLink exact to='/' activeClassName='active'>homepage</NavLink></li>
        <li><NavLink exact to='/shop_page' activeClassName='active'>shop page</NavLink></li>
        <li><NavLink exact to='/contact' activeClassName='active'>contact</NavLink></li>
        <li onClick={() => props.func(!props.switch)}>
          <img src={cart}/>
          {!countSelectedElements.length ? null : 
           <div className='countSelectedProducts'>
             {countSelectedElements.reduce((prevVal, currentVal) => {
               return prevVal + currentVal.count;
             }, 0)}
             </div>
          }
        </li>
      </ul>
    </header>
  )
}