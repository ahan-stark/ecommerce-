import { Component } from '@angular/core';
import { Products } from '../Interface';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: Products[] = [];
  price: number = 0;
  constructor(private cartService: CartService,private orderService:OrderService) {}
  ngOnInit() {
    this.cartService.getCartItems(1).subscribe((cart: Products[]) => {
      this.price=0;
      cart.forEach((item: Products) => {
        this.price = this.price + item.productPrice;
      });
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
    // this.cart.forEach((item: Products) => {
    //   this.price += item.productPrice;
    // });
  }
  book() {
    this.orderService.order(1).subscribe((data)=>{
      this.ngOnInit();
    })
    window.alert('booked successfully');
  }
  removeFromCart(productId:number){
    this.cartService.removeFromCart(1,productId).subscribe((data)=>{
      this.ngOnInit();
    });
  }
}
