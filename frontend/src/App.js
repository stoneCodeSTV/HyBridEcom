import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Category from './Pages/Category';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import AmazonShop from './Components/AmazonShop/AmazonShop';
import Footer from './Components/Footer/Footer';

function App() {
  return (

    <div >
      <BrowserRouter>
        <NavBar />
        <AmazonShop />
        
        <Routes>
          <Route path= '/' element={ <Shop />} />
          <Route path= '/sports' element={<Category category='sports' />} />
          <Route path= '/lifestyle' element={<Category category='lifestyle'/>} />
          <Route path= '/electronics' element={ <Category category='electronics'/>} />
          <Route path= '/cart' element={ <Cart/>} />
          <Route path= '/login' element={ <LoginSignUp/>} />
          <Route path= '/product' element={<Product/>} >
            <Route path= ':productId' element={<Product/>} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
