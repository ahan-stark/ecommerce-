import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Products } from '../Interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-preview-products',
  templateUrl: './preview-products.component.html',
  styleUrls: ['./preview-products.component.css'],
})
export class PreviewProductsComponent {
  products!: Products;
  productId: string;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.productId = this.route.snapshot.paramMap.get('productId') as string;
    this.productService
      .getIndividualproduct(parseInt(this.productId))
      .subscribe((preview: Products) => {
        this.products = preview;
      });
  }
  addToCart(productId: number | undefined) {
    window.alert('added to cart successfully');
  }
  ngOnInit(): void {
    this.products={} as Products;
  }
}
