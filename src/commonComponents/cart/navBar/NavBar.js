import useAddClickHandler from "../../../myOwnHooks/useAddClickHandler";
import { useState, useEffect } from "react";

export default function NavBar(props) {
  useAddClickHandler(props.props, 'closeBtn');
  const [elementsArray, setElementsArray] = useState([]);

  useEffect(() => {
    //console.log(props.props.elem)
    if (props.props.elem !== null && props.props.elem !== undefined) {
      if (elementsArray.length === 0) {
        setElementsArray(elementsArray.concat(props.props.elem))
      } else if (elementsArray.length !== 0 && elementsArray[elementsArray.length-1].id !== props.props.elem.id) {
        setElementsArray(elementsArray.concat(props.props.elem))
      }
    }
    //console.log(elementsArray)
  })
  console.log(elementsArray)

  return (
    <div className='navBar'>
      <h2>Your shopping cart</h2>

      <ul id='listOfItems'>
        {/* <li>Test li</li> */}
        {elementsArray.length === 0 ? null : elementsArray.map((elem, id) => {
          console.log()
          return <li key={id}>{elem.productName}</li>
        })}
      </ul>

      <div id='total'>Total: $<span>sum</span></div>
      <button>Checkout</button>
      <button id='closeBtn'>Close</button>
    </div>
  )
}