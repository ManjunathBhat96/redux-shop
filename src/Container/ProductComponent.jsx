import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

function ProductComponent(props) {
  // const products = useSelector(state => state.allProducts.products);
  // const {id, title} = products;
  return (
    <div className="four column wide" style={{width: '100%'}}>
      <Link to={`/product/${props.id}`}>
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
      </Link>
    </div>
  );
}

export default ProductComponent;
