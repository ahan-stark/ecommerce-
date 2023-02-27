import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  userId: number = 1;
  constructor(private router: Router) {}
  goToHome() {
    this.router.navigate(['/home'])
  }
  goToCategory(){
    this.router.navigate(['category'])
  }
  goToCart(){
    this.router.navigate(['cart',this.userId]);
  }
  goToSuperCart(){
    this.router.navigate(['super-cart',this.userId]);
  }
  goToOrders(){
    this.router.navigate(['orders',this.userId]);
  }

}
