import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private httpclient: HttpClient) {}
  public getCartItems(): Observable<any[]> {
    let cartitems = [
      {
        productId: 1,
        productName: "Nike jordan's",
        productCategoryId: 2,
        productImage: 'nike-jordans.jpg',
        productPrice: 12500,
      },
      {
        productId: 2,
        productName: "Puma Retro Sneaker's",
        productCategoryId: 2,
        productImage: 'puma-sneakers.jpg',
        productPrice: 6500,
      },
    ];
    return of(cartitems);
  }
}
