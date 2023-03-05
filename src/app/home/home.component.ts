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
  smartPhone: Products[] = [];
  trendyProducts:Products[]=[];
  ngOnInit(){
    this.productService.getMobileToDisplayInHome().subscribe((smartPhone: Products[]) => {
      this.smartPhone = smartPhone.map((smartPhone) => {
        return {
          productId: smartPhone.productId,
          productName: smartPhone.productName,
          productCategoryId: smartPhone.productCategoryId,
          productImage: smartPhone.productImage,
          productPrice: smartPhone.productPrice,
        };
      });
    });
    this.productService.getTrendyProducts().subscribe((trendyProducts: Products[]) => {
      this.trendyProducts = trendyProducts.map((trendyProducts) => {
        return {
          productId: trendyProducts.productId,
          productName: trendyProducts.productName,
          productCategoryId: trendyProducts.productCategoryId,
          productImage: trendyProducts.productImage,
          productPrice: trendyProducts.productPrice,
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



