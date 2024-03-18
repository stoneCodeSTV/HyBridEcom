import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Categories from './Pages/Category';
import Products from './Pages/Product';
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
          <Route path= '/sports' element={<Categories category='sport' />} />
          <Route path= '/lifestyle' element={<Categories category='lifestyle'/>} />
          <Route path= '/electronics' element={ <Categories category='electronic'/>} />
          <Route path= '/cart' element={ <Cart/>} />
          <Route path= '/login' element={ <LoginSignUp/>} />
          <Route path= '/products' element={<Products/>} >
            <Route path= ':productsId' element={<Products/>} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
