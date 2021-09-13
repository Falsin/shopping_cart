import useAddClickHandler from "../../../myOwnHooks/useAddClickHandler";

export default function NavBar(props) {
  useAddClickHandler(props.properties, 'closeBtn');

  function changeState(id, operation) {
    let objOfFuncs = {
      decrement() {
        newArray[id].count = --newArray[id].count;
    
        if (newArray[id].count === 0) {
          newArray.splice(id, 1)
        }
      },

      increment() {
        newArray[id].count = ++newArray[id].count;
      }
    }

    let newArray = props.objectWithCollection.array.map(elem => Object.assign({}, elem));
    objOfFuncs[operation]();

    props.setObjectWithCollection({
      array: newArray,
      isElementsCollectionChangeFromChildComp: !props.objectWithCollection.isElementsCollectionChangeFromChildComp,
    })
  }

  return (
    <div className='navBar'>
      <h2>Your shopping cart</h2>

      <ul id='listOfItems'>
      {!props.objectWithCollection.array.length ? null : props.objectWithCollection.array.map((elem, id) => {
          return <li key={id}>
            <div className='product'>
              <div className='image' style={{backgroundImage: `url(${elem.url})`}}></div>
              <div className='detailInfo'>
                <h3>{elem.productName}</h3>
                <p>{elem.price}</p>
                <div>
                  <button className='decrement' onClick={() => changeState(id, 'decrement')}></button>
                  <span>{elem.count}</span>
                  <button className='increment' onClick={() => changeState(id, 'increment')}></button>
                </div>
              </div>
            </div>
          </li>
        })}
      </ul>

      <div id='total'>Total: $ {props.objectWithCollection.array.reduce((prevItem, currentItem) => {
        return prevItem + +currentItem.price.split(' ')[1] * currentItem.count;
      }, 0)}
      </div>
      <button id='checkoutBtn'>Checkout</button>
      <button id='closeBtn'>Close</button>
    </div>
  )
}