import { NavLink } from "react-router-dom";

let selectedItemsArr = [];

//console.log(selectedItemsArr)

export default function Header(props) {
  //console.log(props.selectedItems)

/*   if (props.selectedItems && props.selectedItems.length && selectedItemsArr.length) {
    selectedItemsArr.find(() => {
      return 
    })
  } */

  /* if (props.selectedItems && props.selectedItems.length) {
    if (selectedItemsArr.length) {
      selectedItemsArr = props.selectedItems;
    } else {

    }
    //console.log(props.selectedItems)
    selectedItemsArr = selectedItemsArr.concat(props.selectedItems)
  } */

  //console.log(selectedItemsArr)

  return (
    <header>
      <h2>Fake Store</h2>
      <ul>
        <li><NavLink exact to='/' activeClassName='active'>homepage</NavLink></li>
        <li><NavLink exact to='/shop_page' activeClassName='active'>shop page</NavLink></li>
        <li><NavLink exact to='/contact' activeClassName='active'>contact</NavLink></li>
        <li onClick={() => props.func(!props.switch)}>Cart</li>
      </ul>
    </header>
  )
}