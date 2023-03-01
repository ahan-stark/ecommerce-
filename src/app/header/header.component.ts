import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmLogoutComponent } from './confirm-logout/confirm-logout.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  userId: number = 1;
  constructor(private router: Router, private dialog: MatDialog) {}
  goToHome() {
    this.router.navigate(['/home']);
  }
  goToCategory() {
    this.router.navigate(['category']);
  }
  goToCart() {
    this.router.navigate(['cart', this.userId]);
  }
  goToSuperCart() {
    this.router.navigate(['super-cart', this.userId]);
  }
  goToOrders() {
    this.router.navigate(['orders', this.userId]);
  }
  confirmLogout() {
    const openDialog = this.dialog.open(ConfirmLogoutComponent, {
      height: '140px',
      width: '600px',
    });
    openDialog.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        //delete the userinfor from cache
        this.router.navigate(['login']);
      } else if (result === 'cancel') {
      }
    });
  }
}
