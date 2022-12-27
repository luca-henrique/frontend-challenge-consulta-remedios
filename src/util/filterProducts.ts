import {IProduct} from '../types';

export const orderByLowestPrice = (products: IProduct[]) =>
  products.sort((a, b) => a.price - b.price);

export const orderByScore = (products: IProduct[]) =>
  products.sort((a, b) => b.score - a.score);

export const orderByHigherPrice = (products: IProduct[]) =>
  products.sort((a, b) => b.price - a.price);

export const sortByName = (products: IProduct[]) =>
  products.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
