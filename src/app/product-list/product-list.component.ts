import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Products } from '../Interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Products[] = [];
  categoryId:string;
  constructor(private productService: ProductService, private route:ActivatedRoute,private router:Router) {
    this.categoryId=this.route.snapshot.paramMap.get('categoryId') as string;
     this.productService.getProducts(parseInt(this.categoryId)).subscribe((products: Products[]) => {
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
  }
  productPreview(productId:number){
    this.router.navigate(['product-preview',productId]);  
  }
  ngOnInit(): void {}
}
