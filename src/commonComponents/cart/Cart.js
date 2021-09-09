import NavBar from "./navBar/NavBar";
import useAddClickHandler from "../../myOwnHooks/useAddClickHandler";
import React, { useEffect, useState } from "react/cjs/react.development";

let elementsArray = [];

const Cart = React.memo((props) => {
  useAddClickHandler(props, 'background');

  const [objectWithCollection, setObjectWithCollection] = useState({
    array: elementsArray,
    isElementsCollectionChangeFromChildComp: false,
  })

  useEffect(() => {
    if (props.selectedItems && props.selectedItems.length) {
      let objClone = Object.assign({}, objectWithCollection);
      objClone.array = props.selectedItems;

      setObjectWithCollection(objClone);
    }
  }, [props.selectedItems])

  useEffect(() => {
    let objClone = Object.assign({}, objectWithCollection);
    if (!objectWithCollection.isElementsCollectionChangeFromChildComp) {
      elementsArray = objectWithCollection.array;

    } else {
      new Promise(res => {
        objClone.isElementsCollectionChangeFromChildComp = !objClone.isElementsCollectionChangeFromChildComp;
        elementsArray = objectWithCollection.array;
        props.setSelectedItems(objectWithCollection.array);
        res(null)
      })
      .then(() => setObjectWithCollection(objClone));
    }

  }, [objectWithCollection])

  return (
    (!props.status) ? null :
    <section id='cart' className='active'>
      <div id='background'></div>

      <NavBar properties={props} objectWithCollection={objectWithCollection} setObjectWithCollection={setObjectWithCollection} />  
    </section>
  )
})

export default Cart;