import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orders } from '../Interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private httpclient: HttpClient) {}
  order(userId: number) {
    const url = `http://localhost:8080/orders/${userId}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpclient.post(url, { headers });
  }
  getOrders(userId:number){
    return this.httpclient.get<Orders[]>(`http://localhost:8080/orders/${userId}`);
  }
  cancelOrder(userId:number,productId:number){
    return this.httpclient.delete(`http://localhost:8080/orders/${userId}/${productId}`);
  }
}
