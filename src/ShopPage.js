import { useState, useEffect } from "react";
import uniqid from 'uniqid';

import Header from "./commonComponents/header/Header";
import Footer from './commonComponents/footer/Footer';
import Cart from './commonComponents/cart/Cart';

import * as collection from './images/productCollection/collection';

export default function ShopPage() {
  const [isCartActive, setIsCartActive] = useState(false);
  const [elementsArray, setElementsArray] = useState([]);
  const [currentElement, setCurrentElement] = useState(null);

  useEffect(() => {
    let check = Object.entries(collection).map(elem => {
      return {
        productName: elem[0],
        url: elem[1].default,
        id: uniqid(),
      }
    })

    setElementsArray(check)
  }, [])

  return (
    <section>
      <Header func={setIsCartActive} switch={isCartActive} />
      <section className='mainContent shopPage'>
        {elementsArray.map((elem, id) => {
          return (
            <div key={elem.id}>
              <div className='image' style={{backgroundImage: `url(${elem.url})`}} />
              <h3>{elem.productName}</h3>
              <div className='info'>
                <p>$ {(id + 1) * 100}</p>
                <button onClick={() => setCurrentElement(elem)}>Add to cart</button>
              </div>
            </div>
          )
        })}
      </section>

      <Footer />

      <Cart status={isCartActive} func={setIsCartActive} elem={currentElement} />
    </section>
  )
}