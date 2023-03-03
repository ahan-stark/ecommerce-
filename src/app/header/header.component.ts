import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmLogoutComponent } from './confirm-logout/confirm-logout.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router, private dialog: MatDialog,private cookieService:CookieService) {}
  goToHome() {
    this.router.navigate(['/home']);
  }
  goToCategory() {
    this.router.navigate(['category']);
  }
  goToCart() {
    this.router.navigate(['cart']);
  }
  goToSuperCart() {
    this.router.navigate(['super-cart']);
  }
  goToOrders() {
    this.router.navigate(['orders']);
  }
  confirmLogout() {
    const openDialog = this.dialog.open(ConfirmLogoutComponent, {
      height: '140px',
      width: '600px',
    });
    openDialog.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        localStorage.removeItem('userId');
        this.cookieService.deleteAll();
        this.router.navigate(['login']);
      } else if (result === 'cancel') {
      }
    });
  }
}
