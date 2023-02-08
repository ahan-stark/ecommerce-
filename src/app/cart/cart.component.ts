import { Component } from '@angular/core';
import { Products } from '../Products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: Products[] = [];
  price: number = 0;
  totalPrice: number = 0;
  constructor(private cartService: CartService) {
    this.cartService.getCartItems().subscribe((cart: Products[]) => {
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
    this.cart.forEach((item: Products) => {
      this.price += item.productPrice;
    });
    this.totalPrice=this.price+100;
  }
  book(){
    window.alert('booked successfully');
  }
}
