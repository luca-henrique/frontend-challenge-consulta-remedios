import {initialState} from './state';

import {AddProductCart, ProductCartActions, ActionType} from './actions';

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

    default:
      return state;
  }
}

export const addProductCart = (product: any): AddProductCart => ({
  type: ActionType.ADD_PRODUCT_CART,
  payload: product,
});
