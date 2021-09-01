import NavBar from "./navBar/NavBar";
import useAddClickHandler from "../../myOwnHooks/useAddClickHandler";

export default function Cart(props) {
  useAddClickHandler(props);

  return (
    (!props.status) ? null :
    <section id='cart' className='active'>
      <div className='background'></div>
      <NavBar />
    </section>
  )
}