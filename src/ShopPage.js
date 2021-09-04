import { useState, useEffect } from "react";
import uniqid from 'uniqid';

import Header from "./commonComponents/header/Header";
import Footer from './commonComponents/footer/Footer';
import Cart from './commonComponents/cart/Cart';

import * as collection from './images/productCollection/collection';

export default function ShopPage() {
  const [isCartActive, setIsCartActive] = useState(false);
  const [elementsArray, setElementsArray] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    let check = Object.entries(collection).map(elem => {
      return {
        productName: elem[0],
        url: elem[1].default,
        id: uniqid(),
        count: 0,
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
                <button onClick={() => {

                  let findIndex = selectedItems.findIndex(item => item.id === elem.id);

                  if (findIndex === -1) {
                    elem.count++;
                    setSelectedItems(selectedItems.concat(elem));
                    console.log('green')
                  } else {
                    console.log('find')
                    setSelectedItems(selectedItems[findIndex].count = 2)
                    console.log(selectedItems)
                  }

                  /* let findElem = selectedItems.find(item => item.id === elem.id);

                  if (findElem === undefined) {
                    elem.count++;
                    setSelectedItems(selectedItems.concat(elem));
                  } else {

                  } */

                  /* if (selectedItems.every((item) => item.id !== elem.id)) {
                    elem.count++;
                    setSelectedItems(selectedItems.concat(elem));
                  } else {

                  } */
                  /* if (selectedItems.find((elem) => elem.id ==)) {
                    
                  } */

                  //setSelectedItems(selectedItems.concat(elem));
                }}>Add to cart</button>
              </div>
            </div>
          )
        })}
      </section>

      <Footer />

      <Cart status={isCartActive} func={setIsCartActive} elements={selectedItems} />
    </section>
  )
}