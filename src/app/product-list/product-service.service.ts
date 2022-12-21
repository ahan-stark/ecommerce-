import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  public getProducts(): Observable<any[]> {
    // return this.http.get<any[]>('/products/1');
    let products = [
      {
        productId: 1,
        productName: "Nike jordan's",
        productCategoryId: 2,
        productImage: "nike-jordans.jpg",
        productPrice: 12500,
      },
      {
        productId: 2,
        productName: "Puma Retro Sneaker's",
        productCategoryId: 2,
        productImage: "puma-sneakers.jpg",
        productPrice: 6500,
      },
      {
        productId: 3,
        productName: "Addidas Superstar Shoe's",
        productCategoryId: 2,
        productImage: "addidas-superstar.jpg",
        productPrice: 4000,
      },
    ];
    return of(products);
  }
}
