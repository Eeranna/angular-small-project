import { Injectable } from '@angular/core';

@Injectable({ 
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  products = [
    {id: 1, name: 'Phone', description: 'very good', price: 199},
    {id: 2, name: 'TV', description: 'very good', price: 199},
    {id: 3, name: 'Laptop', description: 'very good', price: 199},
    {id: 4, name: 'Car', description: 'very good', price: 199},
  ]

  addTwonumbers() {
      let a =2;
      let b=3;
      let c=a+b;
      alert(c);
  }

  getProducts(): any {
    return this.products;
  }
  
}
