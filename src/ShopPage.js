import { useState, useEffect } from "react";
import uniqid from 'uniqid';

import Header from "./commonComponents/header/Header";
import Footer from './commonComponents/footer/Footer';
import Cart from './commonComponents/cart/Cart';

import * as collection from './images/productCollection/collection';

export default function ShopPage() {
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

  //console.log(selectedItem)

  /* function changeSelectedItems(elem) {
    let findIndex = selectedItems.findIndex(item => item.id === elem.id);
                  
    if (findIndex === -1) {
      elem.count++;
      setSelectedItems(selectedItems.concat(elem));

    } else {
      let cloneArr = selectedItems.map(elem => Object.assign({}, elem))
      cloneArr[findIndex].count = ++cloneArr[findIndex].count;
      setSelectedItems(cloneArr);
    }
  } */

  return (
    <section>
      <Header func={setIsCartActive} switch={isCartActive} /* selectedItems={selectedItems} *//>
      <section className='mainContent shopPage'>
        {elementsArray.map((elem, id) => {
          return (
            <div key={elem.id}>
              <div className='image' style={{backgroundImage: `url(${elem.url})`}} />
              <h3>{elem.productName}</h3>
              <div className='info'>
                {/* <p>$ {(id + 1) * 100}</p> */}
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
}