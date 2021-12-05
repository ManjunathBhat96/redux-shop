import React, {useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setProducts} from '../Redux/Actions/productAction';

function ProductComponent() {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const result = await axios
      .get('https://fakestoreapi.com/products')
      .catch(error => {
        console.log('Error', error);
      });
    dispatch(setProducts(result.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const products = useSelector(state => state.allProducts.products);
  const {id, title} = products;
  return (
    <div className=" four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">{title}</div>
          </div>
        </div>
      </div>
      {/* <h>Product Component</h> */}
    </div>
  );
}

export default ProductComponent;
