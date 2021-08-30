import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <header>
      <h2>Fake Store</h2>
      <ul>
        <li><NavLink exact to='/' activeClassName='active'>homepage</NavLink></li>
        <li><NavLink exact to='/addingPage' activeClassName='active'>adding page</NavLink></li>
        <li><NavLink exact to='/contact' activeClassName='active'>contact</NavLink></li>
        <li onClick={() => {
          props.cartControl(true)
        }}>Cart</li>
      </ul>
    </header>
  )
}