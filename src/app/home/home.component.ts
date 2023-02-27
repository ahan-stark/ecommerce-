import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Products } from '../Interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Products[] = [];
  ngOnInit(){
    this.productService.getMobileToDisplayInHome().subscribe((products: Products[]) => {
      this.products = products.map((products) => {
        return {
          productId: products.productId,
          productName: products.productName,
          productCategoryId: products.productCategoryId,
          productImage: products.productImage,
          productPrice: products.productPrice,
        };
      });
    });
  }
  
  constructor(config: NgbCarouselConfig,private productService:ProductService,private router:Router) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
}
preview(productId:number){
  this.router.navigate(['product-preview',productId]);
}
}
