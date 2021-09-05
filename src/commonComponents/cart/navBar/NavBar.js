import useAddClickHandler from "../../../myOwnHooks/useAddClickHandler";
import { useState, useEffect } from "react";

export default function NavBar(props) {
  useAddClickHandler(props.properties, 'closeBtn');
/*   const [elementsArray, setElementsArray] = useState([]);

  useEffect(() => {
    setElementsArray(props.properties.elements)
  }, [elementsArray])
 */
  return (
    <div className='navBar'>
      <h2>Your shopping cart</h2>

      <ul id='listOfItems'>
        {!props.test.length ? null : props.test.map((elem, id) => {
          return <li key={id}>{elem.productName}: <span>{elem.count}</span></li>
        })}
      </ul>

      {/* <ul id='listOfItems'>
        {!elementsArray.length ? null : elementsArray.map((elem, id) => {
          return <li key={id}>{elem.productName}: <span>{elem.count}</span></li>
        })}
      </ul> */}

      <div id='total'>Total: $<span>sum</span></div>
      <button>Checkout</button>
      <button id='closeBtn'>Close</button>
    </div>
  )
}