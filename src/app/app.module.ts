import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './authentication/interceptors/auth-interceptor';
import { CategoryComponent } from './category/category.component';
import { PreviewProductsComponent } from './preview-products/preview-products.component';
import { CartComponent } from './cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdersComponent } from './orders/orders.component';
import { SuperCartComponent } from './super-cart/super-cart.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ConfirmLogoutComponent } from './header/confirm-logout/confirm-logout.component';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AuthenticationComponent,
    LoginComponent,
    CategoryComponent,
    PreviewProductsComponent,
    CartComponent,
    OrdersComponent,
    SuperCartComponent,
    HeaderComponent,
    HomeComponent,
    ConfirmLogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: MatDialogRef, useValue: {} },
    CookieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
