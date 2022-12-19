import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  public getProducts(): Observable<any[]> {
    // return this.http.get<any[]>('/products/1');
      var products={
      productId:1,
      productName:'Nike jordan"s',
      productCategoryId:2,
      productImage:'This is the dumy image of nike jordan"s'
     };
     return products;
     
  }
}
