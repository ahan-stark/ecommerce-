import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Products } from '../Interface';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-preview-products',
  templateUrl: './preview-products.component.html',
  styleUrls: ['./preview-products.component.css'],
})
export class PreviewProductsComponent {
  userId!:string;
  superCartValue!: number;
  products!: Products;
  productId!: string;
  showAddTocart: boolean = true;
  showAddToSuperCart: boolean = true;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {
    this.products = {} as Products;
  }
  addToCart(productId: number) {
    this.cartService.addTocart(parseInt(this.userId), productId).subscribe((data) => {
      this.ngOnInit();
    });
  }
  removeFromCart(productId: number) {
    this.cartService.removeFromCart(parseInt(this.userId), productId).subscribe((data) => {
      this.showAddTocart = true;
      this.ngOnInit();
    });
  }
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('productId') as string;
     this.userId = localStorage.getItem('userId') as string;
    this.productService
      .getIndividualproduct(parseInt(this.productId))
      .subscribe((preview: Products) => {
        this.products = preview;
      });
    this.cartService
      .checkIfproductsExists(parseInt(this.userId), parseInt(this.productId))
      .subscribe((data) => {
        if (data) {
          this.showAddTocart = false;
        }
      });
    this.cartService
      .checkIfproductsExistsInSuperCart(parseInt(this.userId), parseInt(this.productId))
      .subscribe((value) => {
        if (value) {
          this.showAddToSuperCart = false;
        }
      });
  }
  goToCart() {
    this.router.navigate(['cart']);
  }
  addToSuperCart(productId: number) {
    this.cartService
      .addToSuperCart(parseInt(this.userId), productId, this.superCartValue)
      .subscribe((data) => {
        this.showAddToSuperCart=false;
        this.ngOnInit();
      });
  }
  removeSuperCart(productId: number) {
    this.cartService.removeSuperCart(parseInt(this.userId), productId).subscribe((data) => {
      this.showAddToSuperCart=true;
      this.ngOnInit();
    });
  }
}
