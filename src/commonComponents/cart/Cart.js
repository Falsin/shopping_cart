import NavBar from "./navBar/NavBar";
import useAddClickHandler from "../../myOwnHooks/useAddClickHandler";
import { useEffect, useState } from "react/cjs/react.development";

let elementsArray = [];

export default function Cart(props) {
  useAddClickHandler(props, 'background');
  const [elementsCollection, setElementsCollection] = useState(elementsArray);

  useEffect(() => {
    if (props.element) {
      try {
        let requiredElem = elementsArray.find(elem => {
          return props.element.id === elem.id;
        })
  
        requiredElem.count = ++requiredElem.count;
      } catch {
        let cloneObj = Object.assign({}, props.element);
        cloneObj.count = ++cloneObj.count;
  
        elementsArray.push(cloneObj);
      } finally {
        setElementsCollection(elementsArray);
        props.setSelectedItem(null);
      }
    }
  })

  /* useEffect(() => {
    if (props.element && !elementsArray.length) {
      let cloneObj = Object.assign({}, props.element);
      cloneObj.count = ++cloneObj.count;

      elementsArray.push(cloneObj);

      setElementsCollection(elementsArray);
      props.setSelectedItem(null)
    } else if (props.element && elementsArray.length) {
      let requiredElem = elementsArray.find(elem => {
        return props.element.id === elem.id;
      })

      if (requiredElem) {
        requiredElem.count = ++requiredElem.count;
      } else {
        let cloneObj = Object.assign({}, props.element);
        cloneObj.count = ++cloneObj.count;

        elementsArray.push(cloneObj);
      }

      setElementsCollection(elementsArray);
      props.setSelectedItem(null);
    }

  }) */

  /* if (props.element && !elementsArray.length) {
    elementsArray.push(props.element);

    //props.setSelectedItem(null);
  } else if (props.element && elementsArray.length) {
    let requiredElem = elementsArray.find(elem => {
      return props.element.id === elem.id;
    })

    if (requiredElem) {
      requiredElem.count = ++requiredElem.count;
    } else {
      elementsArray.push(props.element)
    }

    //props.setSelectedItem(null);
  } */

  /* useEffect(() => {
    console.log('work')
    props.setSelectedItem(null);
  }, [elementsCollection]) */

  //console.log(elementsCollection)

  return (
    (!props.status) ? null :
    <section id='cart' className='active'>
      <div id='background'></div>
      <NavBar properties={props} test={elementsCollection} setElementsCollection={setElementsCollection} />
    </section>
  )
}