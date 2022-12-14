import axios from 'axios';

export class ProductService {
  private urlPath: string;

  constructor() {
    this.urlPath = 'http://localhost:3000/api';
  }

  get() {
    let url = `${this.urlPath}/products`;
    return axios.get(url).then((response) => response.data);
  }
}
