import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../Interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }
  public getProducts(categoryId: number) {
    return this.http.get<Products[]>('http://localhost:8080/products/'+categoryId);
}
public getIndividualproduct(productId:number){
  return this.http.get<Products>('http://localhost:8080/product-view/'+productId);
}
}
