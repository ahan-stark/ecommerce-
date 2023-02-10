import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Products } from '../Interface';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-preview-products',
  templateUrl: './preview-products.component.html',
  styleUrls: ['./preview-products.component.css'],
})
export class PreviewProductsComponent {
  products!: Products;
  productId: string;
  showAddTocart: boolean = true;
  responseAfterPost:any
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    this.productId = this.route.snapshot.paramMap.get('productId') as string;
    this.productService
      .getIndividualproduct(parseInt(this.productId))
      .subscribe((preview: Products) => {
        this.products = preview;
      });
    this.cartService
      .checkIfproductsExists(1, parseInt(this.productId))
      .subscribe((data) => {
        if (data) {
          this.showAddTocart = false;
        }
      });
  }
  addToCart(productId: number) {
    this.cartService.addTocart(1, productId).subscribe((data)=>{
      console.log("added successfully!");
      
    });
  }
  ngOnInit(): void {
    this.products = {} as Products;
  }
}
