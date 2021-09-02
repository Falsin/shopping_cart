import { useEffect } from "react";

export default function useAddClickHandler(props, elemId) {
  useEffect(() => {
    let elem = document.getElementById('cart');

    if (elem) {
      resolvePromiseArray(elem)
      .then(() => {
        let childElem = document.getElementById(elemId);

        childElem.addEventListener('mousedown', () => {
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
}