import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function ProductComponent(props) {
  // const products = useSelector(state => state.allProducts.products);
  // const {id, title} = products;
  return (
    <div className="four column wide" style={{width: '100%'}}>
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={props.image} alt="" />
          </div>
          <div className="content">
            <div className="header">{props.title}</div>
            <div className="meta price">{props.price}</div>
            <div className="meta">{props.category}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
