import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}
  public getProducts(): Observable<any[]> {
    // return this.http.get<any[]>('/products/1');
    let products = [
      {
        productId: 1,
        productName: "Nike jordan's",
        productCategoryId: 1,
        productImage: "https://www.jiomart.com/images/product/original/rvz8kawjai/dexture-air-jordan-trendy-sneakers-for-men-blue-product-images-rvz8kawjai-0-202212160809.jpg",
        productPrice: 12500,
      },
      {
        productId: 2,
        productName: "Puma Retro Sneaker's",
        productCategoryId: 1,
        productImage:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvLz-cy3glDpdlB23Oy_fd6iACryUqDJwtesiY8Fg44581pYaN71YA3FGYglpmxqlnDCwaTT-9zP8DNoxI2OD4lf40ghcN1rjh2wExW_AodSrIAOh9l-od&usqp=CAE',
        productPrice: 6500,
      },
      {
        productId: 3,
        productName: "Addidas Superstar Shoe's",
        productCategoryId: 1,
        productImage: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/78b76ab3632d4251a7f2ae2b005fb600_9366/Grand_Court_TD_Lifestyle_Court_Casual_Shoes_White_GW9250_01_standard.jpg',
        productPrice: 4000,
      },
      {
        productId: 4,
        productName: "iphone 14 pro max",
        productCategoryId: 2,
        productImage: 'data:image/webp;base64,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',
        productPrice: 14000,
      },
      {
        productId: 5,
        productName: "google pixel 7 pro",
        productCategoryId: 2,
        productImage: 'https://m.media-amazon.com/images/I/8116d+CC3yL._SL1500_.jpg',
        productPrice: 75000,
      },
      {
        productId: 6,
        productName: "lenovo laptop",
        productCategoryId: 3,
        productImage: 'https://rukminim1.flixcart.com/image/416/416/xif0q/computer/x/o/u/-original-imaghkk994ybh4fh.jpeg?q=70',
        productPrice: 75000,
      },
      {
        productId: 7,
        productName: "asus laptop",
        productCategoryId: 3,
        productImage: 'https://rukminim1.flixcart.com/image/312/312/xif0q/computer/e/1/7/-original-imag3ebnzawky4kn.jpeg?q=70',
        productPrice: 75000,
      },
    ];
    return of(products);
  }
}
