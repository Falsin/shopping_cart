import Header from './header/Header';
import Footer from './footer/Footer';
import image from './images/homepageBackground.jpg';

export default function Homepage() {
  return (
    <>
      <Header />
      <section className='mainContent homepage' 
        style={{backgroundImage: `url(${image})`}}
      >
        <h1>We don't do fashion, we are fashion</h1>
      </section>
      <Footer />
    </>
  )
}