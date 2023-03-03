import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { PreviewProductsComponent } from './preview-products/preview-products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SuperCartComponent } from './super-cart/super-cart.component';

const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'products/:categoryId', component: ProductListComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product-preview/:productId', component: PreviewProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'super-cart', component: SuperCartComponent },
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
