import {ActionTypes} from '../Constants/Action_types';

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.setProduct:
      return {...state, products: action.payload};

    default:
      return state;
  }
};
