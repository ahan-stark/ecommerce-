import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { IndividualProductItemsComponent } from './product-list/individual-product-items/individual-product-items.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './authentication/interceptors/auth-interceptor';
import { CategoryComponent } from './category/category.component';
import { IndividualCategoryComponent } from './category/individual-category/individual-category.component';
import { PreviewProductsComponent } from './preview-products/preview-products.component';
import { CartComponent } from './cart/cart.component';
import { IndividualCartItemsComponent } from './cart/individual-cart-items/individual-cart-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    IndividualProductItemsComponent,
    AuthenticationComponent,
    LoginComponent,
    CategoryComponent,
    IndividualCategoryComponent,
    PreviewProductsComponent,
    CartComponent,
    IndividualCartItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
