import {ActionTypes} from '../Constants/Action_types';

const intialState = {
  products: [
    {
      id: 1,
      title: 'tes',
      category: 'test',
    },
  ],
};
export const productReducer = (state = {intialState}, action) => {
  switch (action.type) {
    case ActionTypes.setProduct:
      return state;

    default:
      return state;
  }
};
