import { Component, Input } from '@angular/core';
import { Cart } from '../Cart';

@Component({
  selector: 'app-individual-cart-items',
  templateUrl: './individual-cart-items.component.html',
  styleUrls: ['./individual-cart-items.component.css'],
})
export class IndividualCartItemsComponent {
  @Input() cartItem!: Cart;
}
