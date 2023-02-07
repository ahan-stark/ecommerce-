import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  public getCategories(): Observable<any[]> {
    let categories = [
      {
        categoryId: 1,
        categoryName: 'Shoes',
        categoryImage: 'https://m.media-amazon.com/images/I/71ZSYJXb0GL._UY625_.jpg',
      },
      {
        categoryId: 2,
        categoryName: 'mobile',
        categoryImage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841907',
      },
      {
        categoryId: 3,
        categoryName: 'laptop',
        categoryImage: 'https://rukminim1.flixcart.com/image/416/416/xif0q/computer/x/o/u/-original-imaghkk994ybh4fh.jpeg?q=70',
      },
    ];
    return of(categories);
  }
}
