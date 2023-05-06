import Product from './components/Product';
import Nav from './components/Nav';
import './App.css'

const App = () => {
 
  return (
    <>
      <Nav/>
      <div>
      <Product name="Oversized" image="Untitled.jpg" price="200"/>
      <Product name="Polo" image="image1.webp" price="100"/>
      <Product name="Basics" image="image2.webp" price="300"/>
      <Product name="Graphics" image="image3.webp" price="50"/>
      <Product name="Sleeveless" image="image4.webp" price="250"/>
      </div>
    </>
  )
}

export default App
