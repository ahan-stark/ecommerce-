import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../Products';

@Component({
  selector: 'app-individual-product-items',
  templateUrl: './individual-product-items.component.html',
  styleUrls: ['./individual-product-items.component.css'],
})
export class IndividualProductItemsComponent implements OnInit {
  @Input() products!: Products;
  constructor() {}
  ngOnInit(): void {}
}
