import Header from "./commonComponents/header/Header";
import Footer from './commonComponents/footer/Footer';
import * as collection from './images/productCollection/collection';

export default function ShopPage() {
//console.log(collection)

/* for (const key in collection) {
  console.log(key)
  console.log(collection[key].default)
} */

//const [imageArray, setImageArray] = useState(createArrayFromObj(collection))

/* function createArrayFromObj(obj) {
  let array = [];

  for (const key in obj) {
    array.push({
      [key]: obj[key].default
    })
  }

  return array;
} */


  return (
    <section>
      <Header />
      <section className='mainContent shopPage'>
        {Object.entries(collection).map((elem, id) => {
          return (
          <div key={id}>
            <div className='image' style={{backgroundImage: `url(${elem[1].default})`}} />
            <h3>{elem[0]}</h3>
            <div className='info'>
              <p>$ {(id + 1) * 100}</p>
              <button>Add to cart</button>
            </div>
          </div>
        )})}
      </section>
      <Footer />
    </section>
  )
}