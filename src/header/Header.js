import { NavLink } from "react-router-dom";

export default function Header(params) {
  return (
    <header>
      <h2>Fake Store</h2>
      <ul>
        <li><NavLink exact to='/' activeClassName='active'>homepage</NavLink></li>
        <li><NavLink exact to='/addingPage' activeClassName='active'>adding page</NavLink></li>
      </ul>
    </header>
  )
}