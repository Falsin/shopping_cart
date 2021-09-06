import useAddClickHandler from "../../../myOwnHooks/useAddClickHandler";
import { useState, useEffect } from "react";

export default function NavBar(props) {
  useAddClickHandler(props.properties, 'closeBtn');

  return (
    <div className='navBar'>
      <h2>Your shopping cart</h2>

      <ul id='listOfItems'>
        {!props.test.length ? null : props.test.map((elem, id) => {
          return <li key={id}>
            <div className='product'>
              <div className='image' style={{backgroundImage: `url(${elem.url})`}}></div>
              <div className='detailInfo'>
                <h3>{elem.productName}</h3>
                <p>{elem.price}</p>
                <div>
                  <button className='decrement' onClick={() => {
                    let newArray = props.test.map(elem => Object.assign({}, elem));
                    newArray[id].count = --newArray[id].count;

                    if (newArray[id].count === 0) {
                      newArray.splice(id, 1)
                    }
                    props.setElementsCollection(newArray)

                    console.log(newArray[id])
                  }}>minus</button>
                  <span>{elem.count}</span>
                  <button className='increment'>plus</button>
                </div>
              </div>
            </div>
          </li>
        })}
      </ul>

      <div id='total'>Total: $ {props.test.reduce((prevItem, currentItem) => {
        return prevItem + +currentItem.price.split(' ')[1] * currentItem.count;
      }, 0)}
      </div>
      <button>Checkout</button>
      <button id='closeBtn'>Close</button>
    </div>
  )
}