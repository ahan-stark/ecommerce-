import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
import { Category } from '../Interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  categories: Category[] = [];
  constructor(private categoryservice: CategoryService,private router:Router) {
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
  goToProducts(categoryId:number){
    this.router.navigate(['products',categoryId])
  }
}
