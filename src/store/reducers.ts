import {initialState} from './state';

import {
  AddProductCart,
  ProductCartActions,
  ActionType,
  RemoveProductCart,
} from './actions';

import {MAX_PRICE_SHIPPING} from '../util/calculateShipping';

//Os valores exibidos no checkout (frete, subtotal e total) devem ser calculados dinamicamente

export function cartReducer(
  state = initialState,
  action: ProductCartActions,
): any {
  switch (action.type) {
    case ActionType.ADD_PRODUCT_CART:
      const cart = [...state.cart, action.payload];
      let subTotal = action.payload.price + state.subtotal;

      return {
        ...state,
        cart,
        subtotal: subTotal,
        shipping: subTotal < MAX_PRICE_SHIPPING ? cart.length * 10 : 0,
        total:
          subTotal < MAX_PRICE_SHIPPING
            ? subTotal + cart.length * 10
            : subTotal,
      };

    case ActionType.REMOVE_PRODUCT_CART:
      let newSubTotal = state.subtotal - action.payload.price;

      const removeItemCart = [
        ...state.cart.filter((elem, idx) => {
          return elem.id !== action.payload.id;
        }),
      ];

      return {
        ...state,
        cart: removeItemCart,
        subtotal: newSubTotal,
        shipping:
          newSubTotal < MAX_PRICE_SHIPPING ? removeItemCart.length * 10 : 0,
        total:
          newSubTotal < MAX_PRICE_SHIPPING
            ? newSubTotal + removeItemCart.length * 10
            : newSubTotal,
      };

    default:
      return state;
  }
}

export const addProductCart = (product: any): AddProductCart => ({
  type: ActionType.ADD_PRODUCT_CART,
  payload: product,
});

export const removeProductCart = (product: any): RemoveProductCart => ({
  type: ActionType.REMOVE_PRODUCT_CART,
  payload: product,
});
