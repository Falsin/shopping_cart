import { useState } from "react";

import Header from "./commonComponents/header/Header";
import Footer from './commonComponents/footer/Footer';
import Cart from "./commonComponents/cart/Cart";

export default function Contact(params) {
  const [isCartActive, setIsCartActive] = useState(false);

  return (
    <section>
      <Header func={setIsCartActive} switch={isCartActive} />
      <section className='mainContent'>
        <h1>Hello!</h1>
      </section>
      <Footer />

      <Cart status={isCartActive} func={setIsCartActive} />
    </section>
  )
}