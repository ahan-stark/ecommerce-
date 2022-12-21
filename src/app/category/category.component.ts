import { Component } from '@angular/core';
import { Category } from './Category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  categories: Category[] = [];
  constructor(private categoryservice: CategoryService) {
    this.categoryservice.getCategories().subscribe((categories: any[]) => {
      this.categories = categories.map((categories) => {
        return {
          categoryId: categories.categoryId,
          categoryName: categories.categoryName,
          categoryImage: categories.categoryImage,
        };
      });
    });
  }
}
