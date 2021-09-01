export default function NavBar(params) {
  return (
    <div className='navBar'>
      <h2>Your shopping cart</h2>

      <ul id='listOfItems'>
        <li>Test li</li>
      </ul>

      <div id='total'>Total: $<span>sum</span></div>
      <button>Checkout</button>
      <button>Close</button>
    </div>
  )
}