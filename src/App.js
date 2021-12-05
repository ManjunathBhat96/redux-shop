import React from 'react';
import Header from './Container/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductListing from './Container/ProductListing';
import ProductDetails from './Container/ProductDetails';
import ProductComponent from './Container/ProductComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          />
          {/* <Route path="/products" exact element={<ProductComponent />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
