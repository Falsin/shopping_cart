import { useEffect } from "react";

export default function Cart(props) {
  useEffect(() => {
    let elem = document.getElementById('cart');

    if (elem) {
      resolvePromiseArray(elem)
      .then(() => {
        elem.children[0].addEventListener('mousedown', () => {
          elem.classList.remove('active');
          resolvePromiseArray(elem)
          .then(() => props.func(!props.status))
        })
      })

    }
  })

  function resolvePromiseArray(elem) {
    let promise = Promise.all([...elem.children].map(elem => {
        return Promise.all(elem.getAnimations().map(item => item.finished));
      })
    )

    return promise;
  }

  return (
    (!props.status) ? null :
    <section id='cart' className='active'>
      <div className='background'></div>
      <div className='navBar'></div>
    </section>
  )
}