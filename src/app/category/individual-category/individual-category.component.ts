import { Component, Input } from '@angular/core';
import { Category } from '../Category';

@Component({
  selector: 'app-individual-category',
  templateUrl: './individual-category.component.html',
  styleUrls: ['./individual-category.component.css']
})
export class IndividualCategoryComponent {
@Input() category!:Category;
constructor() {}
}
