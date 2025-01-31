import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kids_banner from './components/assets/banner_kids.png';
import ShopContextProvider from './context/ShopContext';
import Collections from './components/Collections/Collections';
import Thanks from './pages/Thanks';
import React, { useState } from 'react';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { AuthProvider } from './context/AuthContext';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/thanks';

  return (
    <div className="App">
      {!isAuthPage && <Navbar />}
      <main>{children}</main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

const App = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <ShopContextProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Shop />} />
              <Route path='/Bats' element={<ShopCategory banner={men_banner} category="bats" />} />
              <Route path='/Balls' element={<ShopCategory banner={women_banner} category="balls" />} />
              <Route path="/new-collections" element={<Collections />} />
              <Route path='/Kits' element={<ShopCategory banner={kids_banner} category="kits" />} />
              <Route path='/product' element={<Product />}>
                <Route path=':productId' element={<Product />} />
              </Route>
              <Route path='/cart' element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/thanks" element={<Thanks />} />
            </Routes>
            {isPopupVisible && <Thanks closePopup={closePopup} />}
          </Layout>
        </ShopContextProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
