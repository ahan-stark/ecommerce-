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
  userId!:string;
  superCart: SuperCart[] = [];
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
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
      });
  }
  removeSuperCart(productId:number){
    this.cartService.removeSuperCart(parseInt(this.userId),productId).subscribe((data)=>{
      this.ngOnInit();
    })
  }
}
