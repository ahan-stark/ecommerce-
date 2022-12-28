import { Component } from '@angular/core';
import { Cart } from './Cart';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: Cart[] = [];
  constructor(private cartService: CartService) {
    this.cartService.getCartItems().subscribe((cart: any[]) => {
      this.cart = cart.map((cart) => {
        return {
          productId: cart.productId,
          productName: cart.productName,
          productCategoryId: cart.productCategoryId,
          productImage: cart.productImage,
          productPrice: cart.productPrice,
        };
      });
    });
  }
}
