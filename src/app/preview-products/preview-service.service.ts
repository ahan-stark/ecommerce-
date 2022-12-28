import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PreviewProducts } from './PreviewProducts';

@Injectable({
  providedIn: 'root',
})
export class PreviewServiceService {
  constructor(private httpclinet: HttpClient) {}
  public getPreviewProduct(): Observable<any> {
    let previewProduct = {
      productId: 1,
      productName: "Nike jordan's",
      productCategoryId: 2,
      productImage: 'nike-jordans.jpg',
      productPrice: 12500,
    };

    return of(previewProduct);
  }
}
