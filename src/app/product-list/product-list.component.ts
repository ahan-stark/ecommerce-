import { Component, OnInit } from '@angular/core';
import { ProductService } from './product-service.service';
import { Products } from './Products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Products[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((products: any[]) => {
      this.products = products.map((products) => {
        return {
          productId: products.productId,
          productName: products.productName,
          productCategoryId: products.productCategoryId,
          productImage: products.productImage,
          productPrice: products.productPrice,
        };
      });
    });

    // .subscribe((products: any[]) => {
    //   this.products = products.map((products) => {
    //     return {
    //       productId: products.productId,
    //       productName: products.productName,
    //       productCategoryId: products.productCategoryId,
    //       productImage: products.productImage,
    //     };
    //   });
    // });
  }
  ngOnInit(): void {}
}
