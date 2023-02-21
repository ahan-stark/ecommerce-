import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Orders } from '../Interface';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  orders: Orders[] = [];
  userId: string | undefined;
  constructor(
    private route: ActivatedRoute,
    private ordersService: OrderService
  ) {}
  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('userId') as string;
    this.ordersService
      .getOrders(parseInt(this.userId))
      .subscribe((orders: Orders[]) => {
        this.orders = orders.map((orders) => {
          return {
            productId: orders.productId,
            productName: orders.productName,
            productImage: orders.productImage,
            productPrice: orders.productPrice,
            orderTime: orders.orderTime,
          };
        });
      });
  }
  cancelOrder(productId: number) {
    this.ordersService.cancelOrder(1, productId).subscribe((data) => {
      console.log("done");
      this.ngOnInit();
    });
  }
}
