import React, {useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setProducts} from '../Redux/Actions/productAction';

import ProductComponent from './ProductComponent';

function ProductListing() {
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

  return (
    <div
      className="ui grid container"
      style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
      {products?.map(item => {
        return (
          <ProductComponent
            title={item.title}
            price={item.price}
            category={item.category}
            image={item.image}
          />
        );

        // <p>{item.title}</p>;
      })}
    </div>
  );
}

export default ProductListing;
