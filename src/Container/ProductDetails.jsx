import axios from 'axios';
import React, {useEffect, useState, useCallback} from 'react';
import ProductComponent from './ProductComponent';

function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const getProductDetails = useCallback(async () => {
    try {
      const result = await axios.get(' https://fakestoreapi.com/products/1');
      setProductDetails(result.data);
    } catch (error) {
      console.log('Error', error);
    }
  }, []);

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <div class="hidden divider section ui four column doubling flex container">
      {/* <div className=" ui fixed menu"> */}
      <div class="column">
        <h2>Product Details</h2>
      </div>

      <div className="column">
        <ProductComponent
          title={productDetails.title}
          price={productDetails.price}
          category={productDetails.category}
          image={productDetails.image}
          id={productDetails.id}
        />
      </div>
      {/* </div> */}
    </div>
  );
}

export default ProductDetails;
