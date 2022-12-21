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
        categoryImage: 'categoryShoe.jpg',
      },
      {
        categoryId: 2,
        categoryName: 'watches',
        categoryImage: 'categoryWatch.jpg',
      },
      {
        categoryId: 3,
        categoryName: 'fashion t-shirts',
        categoryImage: 'categoryTshirt.jpg',
      },
    ];
    return of(categories);
  }
}
