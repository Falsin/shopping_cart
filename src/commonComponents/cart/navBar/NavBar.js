import useAddClickHandler from "../../../myOwnHooks/useAddClickHandler"

export default function NavBar(props) {
  useAddClickHandler(props.props, 'closeBtn')

  return (
    <div className='navBar'>
      <h2>Your shopping cart</h2>

      <ul id='listOfItems'>
        <li>Test li</li>
      </ul>

      <div id='total'>Total: $<span>sum</span></div>
      <button>Checkout</button>
      <button id='closeBtn'>Close</button>
    </div>
  )
}