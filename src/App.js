import './App.css';
import {BrowserRouter, Routes, Switch ,Route} from 'react-router-dom';
import Cart from './components/Cart';
import Menu from './components/Menu';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <div >
      <header> 
      
       <Menu/>
        
      </header>
      
      <main>
      <Routes>
        <Route 
          path ="/" 
          element ={<ItemListContainer />}
        />
        <Route 
          path ="/category/:categoryName" 
          element ={<ItemListContainer  greetings="EMIT+"/>}
        />
        
        <Route 
          path ="/producto/:idProducto" 
          element ={<ItemDetailContainer />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ItemListContainer />} />
      </Routes>
      </main>
      
    </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
