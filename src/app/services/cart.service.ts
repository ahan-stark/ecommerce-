import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart, Products } from '../Interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private httpclient: HttpClient) {}
  public checkIfproductsExists(userId: number, productId: number) {
    return this.httpclient.get<Cart>(
      'http://localhost:8080/check-cart/' + userId + '/' + productId
    );
  }
  public addTocart(userId: number, productId: number) {
    const url = `http://localhost:8080/cart/${userId}/${productId}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpclient.post(url, { headers });
  }

  public removeFromCart(userId: number, productId: number) {
    return this.httpclient.delete<Products[]>(
      `http://localhost:8080/cart/${userId}/${productId}`
    );
  }

  public getCartItems(userId: number) {
    return this.httpclient.get<Products[]>(
      `http://localhost:8080/cart/${userId}`
    );
  }
}
