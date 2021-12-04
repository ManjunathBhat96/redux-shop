import {ActionTypes} from '../Constants/Action_types';

export const setProducts = products => {
  return {
    type: ActionTypes.setProduct,
    payload: products,
  };
};

export const selectedProducts = products => {
  return {
    type: ActionTypes.SelectedProduct,
    payload: products,
  };
};

export const removeProducts = products => {
  return {
    type: ActionTypes.RemoveSelectedProducts,
    payload: products,
  };
};
