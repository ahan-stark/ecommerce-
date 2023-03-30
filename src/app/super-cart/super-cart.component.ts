import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperCart } from '../Interface';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-super-cart',
  templateUrl: './super-cart.component.html',
  styleUrls: ['./super-cart.component.css'],
})
export class SuperCartComponent {
  userId!: string;
  superCart: SuperCart[] = [];
  superCartMessageShow: boolean | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
    this.superCartMessageShow = false;
    this.userId = localStorage.getItem('userId') as string;
    this.cartService
      .getSuperCartItems(parseInt(this.userId))
      .subscribe((superCart: SuperCart[]) => {
        this.superCart = superCart.map((superCart) => {
          return {
            productId: superCart.productId,
            productName: superCart.productName,
            productImage: superCart.productImage,
            productPrice: superCart.productPrice,
            productBookedPrice: superCart.productBookedPrice,
          };
        });
        if (this.superCart.length == 0) {
          this.superCartMessageShow = true;
        }
      });
  }
  removeSuperCart(productId: number) {
    this.cartService
      .removeSuperCart(parseInt(this.userId), productId)
      .subscribe((data) => {
        this.ngOnInit();
      });
  }
  orderFromSupercart(productId: number) {
    this.cartService
      .orderFromSupercart(parseInt(this.userId), productId)
      .subscribe((data) => {
        alert('booked successfully');
        this.ngOnInit();
      });
  }
}
