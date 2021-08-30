import { useState } from 'react';

import Header from './header/Header';
import Footer from './footer/Footer';
import image from './images/homepageBackground.jpg';
import Cart from './Cart';

export default function Homepage() {  
  const [isCartActive, setIsCartActive] = useState(false);

  return (
    <section>
      <Header cartControl={setIsCartActive} />
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