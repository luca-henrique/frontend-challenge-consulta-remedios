import {initialState} from './state';

import {AddProductCart, ProductCartActions, ActionType} from './actions';

export function cartReducer(
  state = initialState,
  action: ProductCartActions,
): any {
  switch (action.type) {
    case ActionType.ADD_PRODUCT_CART:
      return {...state, cart: [...state.cart, action.payload]};

    default:
      return state;
  }
}

export const addProductCart = (product: any): AddProductCart => ({
  type: ActionType.ADD_PRODUCT_CART,
  payload: product,
});
