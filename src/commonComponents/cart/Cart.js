import NavBar from "./navBar/NavBar";
import useAddClickHandler from "../../myOwnHooks/useAddClickHandler";

export default function Cart(props) {
  useAddClickHandler(props, 'background');

  return (
    (!props.status) ? null :
    <section id='cart' className='active'>
      <div id='background'></div>
      <NavBar props={props} />
    </section>
  )
}