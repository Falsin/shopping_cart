import { useState } from "react";

import Header from "./commonComponents/header/Header";
import Footer from './commonComponents/footer/Footer';
import Cart from "./commonComponents/cart/Cart";

import gitIcon from './images/gitIcon.svg';
import facebookIcon from './images/facebookIcon.svg';
import twitterIcon from './images/twitterIcon.svg';

export default function Contact(params) {
  const [isCartActive, setIsCartActive] = useState(false);
  const [selectedItems, setSelectedItems] = useState(null);

  return (
    <section className='contact'>
      <Header func={setIsCartActive} switch={isCartActive} selectedItems={selectedItems} />
      <section className='mainContent'>
        <div className='Icons'>
          <img src={gitIcon} />
          <img src={facebookIcon} />
          <img src={twitterIcon} />
        </div>

        <div>Russia, Moscow, Barby street 123</div>
      </section>
      <Footer />

      <Cart status={isCartActive} func={setIsCartActive} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
    </section>
  )
}