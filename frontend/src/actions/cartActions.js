import { ADD_ITEM_CART } from '../constants/cartConstant';
import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: ADD_ITEM_CART,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStoch: data.countInStoch,
      qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
