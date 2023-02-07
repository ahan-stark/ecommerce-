import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Products } from '../Products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-preview-products',
  templateUrl: './preview-products.component.html',
  styleUrls: ['./preview-products.component.css'],
})
export class PreviewProductsComponent {
  products: Products[] = [];
  // particularProduct: Products[] = [];
  productId: string | null;
  particularProduct: Products | undefined;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.productId = this.route.snapshot.paramMap.get('productId');
    this.productService.getProducts().subscribe((products: Products[]) => {
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
    this.products.forEach((item: Products) => {
      if (item.productId == Number(this.productId)) {
        this.particularProduct = item;
      }
    });
  }
  addToCart(productId:number|undefined){
      window.alert('added to cart successfully')
  }
  ngOnInit(): void {}
}
