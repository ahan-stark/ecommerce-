import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Products } from '../Interface';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-preview-products',
  templateUrl: './preview-products.component.html',
  styleUrls: ['./preview-products.component.css'],
})
export class PreviewProductsComponent {
  superCartValue!: number;
  products!: Products;
  productId!: string;
  showAddTocart: boolean = true;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private router:Router
  ) {
    this.products = {} as Products;
  }
  addToCart(productId: number) {
    this.cartService.addTocart(1, productId).subscribe((data) => {
      this.ngOnInit();
    });
  }
  removeFromCart(productId:number){
      this.cartService.removeFromCart(1,productId).subscribe((data)=>{
        console.log("subscribed");
        this.showAddTocart=true;
        this.ngOnInit();
      });
     
  }
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('productId') as string;
    this.productService
      .getIndividualproduct(parseInt(this.productId))
      .subscribe((preview: Products) => {
        this.products = preview;
      });
    this.cartService
      .checkIfproductsExists(1, parseInt(this.productId))
      .subscribe((data) => {
        if (data) {
          this.showAddTocart = false;
        }
      });
      this.superCartValue!;
  }
  goToCart(){
    this.router.navigate(['cart',1]);
  }
  addToSuperCart(productId:number){
      console.log(productId);
      console.log(this.superCartValue);
      this.cartService.addToSuperCart(1,productId,this.superCartValue).subscribe((data)=>{ 
        alert('added to super cart');  
      });
  }
}
