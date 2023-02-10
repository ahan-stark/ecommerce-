import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cart } from '../Interface';
import { PreviewProductsComponent } from '../preview-products/preview-products.component';

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

  public getCartItems(): Observable<any[]> {
    let cartitems = [
      {
        productId: 1,
        productName: "Nike jordan's",
        productCategoryId: 2,
        productImage:
          'https://www.jiomart.com/images/product/original/rvz8kawjai/dexture-air-jordan-trendy-sneakers-for-men-blue-product-images-rvz8kawjai-0-202212160809.jpg',
        productPrice: 12500,
      },
      {
        productId: 2,
        productName: "Puma Retro Sneaker's",
        productCategoryId: 2,
        productImage:
          'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvLz-cy3glDpdlB23Oy_fd6iACryUqDJwtesiY8Fg44581pYaN71YA3FGYglpmxqlnDCwaTT-9zP8DNoxI2OD4lf40ghcN1rjh2wExW_AodSrIAOh9l-od&usqp=CAE',
        productPrice: 6500,
      },
    ];
    return of(cartitems);
  }
}
