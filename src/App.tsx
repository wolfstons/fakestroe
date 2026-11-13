
import './App.css'
import Products from './component/Products'
import { ProductProvider } from './context/ProductContext'

function App() {

  return (<><header>
    <h1>fakestore</h1>
    
  </header>
  <article>
    <h2>Product</h2>
    <p>ide jönnek a termékek.</p>
    <ProductProvider >
      <Products />
    </ProductProvider>
  </article>
  <footer>Készítette:Páczi Balázs</footer>
  </>
    
  )
}

export default App
