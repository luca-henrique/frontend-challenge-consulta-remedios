import {useContext} from 'react';
import {CartContext} from '../store/context';

export const useReducerHook = () => {
  const {dispatch, state} = useContext(CartContext);

  return {state, dispatch};
};
