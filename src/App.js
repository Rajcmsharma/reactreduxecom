import './App.scss';
// react router v6
import {HashRouter, Routes, Route} from 'react-router-dom';
// pages
import {Home, CategoryProduct, ProductSingle, Cart, Search} from "./pages/index";
// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import store from "./store/store";
import {Provider} from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <HashRouter>
          <Header />
          <Sidebar />

          <Routes>
            {/* landing page */}
            <Route path = "/" element = {<Home />} />
            {/* single product */}
            <Route path = "/product/:id" element = {<ProductSingle />} />
            {/* category products  */}
            <Route path = "/category/:category" element = {<CategoryProduct />} />
            {/* cart */}
            <Route path = "/cart" element = {<Cart />} />
            {/* search products */}
            <Route path = "/search/:searchTerm" element = {<Search />} />
          </Routes>

          <Footer />
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
