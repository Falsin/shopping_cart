import { useState, useEffect } from "react";
import uniqid from 'uniqid';

import Header from "./commonComponents/header/Header";
import Footer from './commonComponents/footer/Footer';
import Cart from './commonComponents/cart/Cart';

import * as collection from './images/productCollection/collection';

export default function ShopPage() {
  const [isCartActive, setIsCartActive] = useState(false);
  const [elementsArray, setElementsArray] = useState([]);
  

  const [selectedItems, setSelectedItems] = useState([]); ////////

  //console.log(selectedItems)

  //const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    let check = Object.entries(collection).map((elem, id) => {
      return {
        productName: elem[0],
        url: elem[1].default,
        id: uniqid(),
        count: 1,
        price: `$ ${(id + 1) * 100}`,
      }
    })

    setElementsArray(check)
  }, [])

  return (
    <section>
      <Header func={setIsCartActive} switch={isCartActive} selectedItems={selectedItems} />
      <section className='mainContent shopPage'>
        {elementsArray.map((elem, id) => {
          return (
            <div key={elem.id}>
              <div className='image' style={{backgroundImage: `url(${elem.url})`}} />
              <h3>{elem.productName}</h3>
              <div className='info'>
                <p>{elem.price}</p>
                <button onClick={() => {
                  let cloneArray = selectedItems.map(item => Object.assign({}, item));
                  let findElem = cloneArray.find(item => item.id === elem.id);

                  if (findElem) {
                    ++findElem.count;
                  } else {
                    cloneArray.push(elem)
                  }

                  setSelectedItems(cloneArray);

                }}>Add to cart</button>
              </div>
            </div>
          )
        })}
      </section>

      <Footer />

      <Cart status={isCartActive} func={setIsCartActive} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />

      {/* <Cart status={isCartActive} func={setIsCartActive} element={selectedItem} setSelectedItem={setSelectedItem} /> */}
    </section>
  )
}

/* export default function ShopPage() {
  const [isCartActive, setIsCartActive] = useState(false);
  const [elementsArray, setElementsArray] = useState([]);
  //const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);


  useEffect(() => {
    let check = Object.entries(collection).map((elem, id) => {
      return {
        productName: elem[0],
        url: elem[1].default,
        id: uniqid(),
        count: 0,
        price: `$ ${(id + 1) * 100}`,
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
                <p>{elem.price}</p>
                <button onClick={() => {
                  setSelectedItem(elem);
                }}>Add to cart</button>
              </div>
            </div>
          )
        })}
      </section>

      <Footer />

      <Cart status={isCartActive} func={setIsCartActive} element={selectedItem} setSelectedItem={setSelectedItem} />
    </section>
  )
} */