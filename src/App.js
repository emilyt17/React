import './App.css';
import {BrowserRouter, Routes, Switch,Route} from 'react-router-dom';
import Menu from './components/Menu';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
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
      
        <Route path="*" element={<ItemListContainer />} />
      </Routes>
      </main>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
