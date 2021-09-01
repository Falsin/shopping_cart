import { useState } from 'react';

import Header from './commonComponents/header/Header';
import Footer from './commonComponents/footer/Footer';
import Cart from './commonComponents/cart/Cart';

import image from './images/homepageBackground.jpg';

export default function Homepage() {  
  const [isCartActive, setIsCartActive] = useState(false);

  return (
    <section>
      <Header func={setIsCartActive} switch={isCartActive} />
      <section className='mainContent homepage' 
        style={{backgroundImage: `url(${image})`}}
      >
        <h1>We don't do fashion, we are fashion</h1>
      </section>
      <Footer />
      <Cart status={isCartActive} func={setIsCartActive} />
    </section>
  )
}