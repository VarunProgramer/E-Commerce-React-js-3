import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSingnup from './Pages/LoginSingnup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>

      <Navbar/>
       

        <Routes>
          <Route path= '/' element={<Shop/>}/>
          <Route path= '/mens' element={<ShopCategory banner = {men_banner} category="mens"/>}/>
          <Route path= '/womens' element={<ShopCategory banner = {women_banner} category="womens"/>}/>
          <Route path= '/kids' element={<ShopCategory banner = {kids_banner} category="kids"/>}/>
          <Route path= '/product' element={<Product/>}/>
          <Route path= ":productId" element={<Product/>}/>

          <Route path= '/cart' element={<Cart/>}/>
          <Route path= '/login' element={<LoginSingnup/>}/> 
        </Routes>

      <Footer />



      </BrowserRouter>
    </div>
  );
}

export default App;