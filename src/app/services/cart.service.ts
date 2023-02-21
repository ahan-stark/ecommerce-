import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart, Products, SuperCart } from '../Interface';

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
  public addToSuperCart(
    userId: number,
    productId: number,
    productBookingPrice: number
  ) {
    const url = `http://localhost:8080/super-cart/${userId}/${productId}/${productBookingPrice}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpclient.post(url, { headers });
  }
  public getSuperCartItems(userId: number) {
    return this.httpclient.get<SuperCart[]>(
      `http://localhost:8080/super-cart/${userId}`
    );
  }
  public removeSuperCart(userId: number, productId: number) {
    return this.httpclient.delete(
      `http://localhost:8080/super-cart/${userId}/${productId}`
    );
  }
  public checkIfproductsExistsInSuperCart(userId: number, productId: number) {
    return this.httpclient.get<SuperCart>(
      `http://localhost:8080/check-superCart/${userId}/${productId}`
    );
  }
}
