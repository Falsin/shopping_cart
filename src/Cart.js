import { useEffect, useState } from "react";

export default function Cart(props) {
  //const [elem, setElem] = useState(document.getElementById('cart'));

  useEffect(() => {
    //const newElem = document.getElementById('cart');
    let elem = document.getElementById('cart');

    if (elem) {
      console.dir(elem.children)
      let backgroundBlock = elem.querySelector('.background');
      let navBar = elem.querySelector('.navBar');

     /*  Promise.all( ([...elem.children].map(elem => {
          return elem.getAnimations().map(item => item.finished);
        })).map(elem => elem[0])
      ) */


      
      Promise.all([...elem.children].map(elem => {
          return Promise.all(elem.getAnimations().map(item => item.finished));
        })
      )
        .then(response => {
          console.log(response)
        })

    }
  })

/*   useEffect(() => {
    const newElem = document.getElementById('cart');

    if (!elem && !elem !== newElem) {
      setElem(newElem);
    } else if (elem) {
      elem.classList.add('active');
    }
  }) */

  return (
    (!props.status) ? null :
    <section id='cart' className='active'>
      <div className='background' /* onClick={(e) => {
        Promise.all(e.target.getAnimations().map(elem => {
          return elem.finished;
        }))
        .then(() => console.log('finished'))

        console.log(e.target.getAnimations())

        elem.classList.remove('active');
      }} */></div>
      <div className='navBar'></div>
    </section>
  )
}