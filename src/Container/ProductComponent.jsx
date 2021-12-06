import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function ProductComponent(props) {
  // const products = useSelector(state => state.allProducts.products);
  // const {id, title} = products;
  return (
    <>
      <div className=" four column wide">
        <div className="ui link cards">
          <div className="card">
            <div className="image"></div>
            <div className="content">
              <div className="header">{props.title}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductComponent;
