import { Component } from '@angular/core';
import { PreviewServiceService } from './preview-service.service';
import { PreviewProducts } from './PreviewProducts';

@Component({
  selector: 'app-preview-products',
  templateUrl: './preview-products.component.html',
  styleUrls: ['./preview-products.component.css'],
})
export class PreviewProductsComponent {
  previewProduct: PreviewProducts = new PreviewProducts();
  constructor(private previewService: PreviewServiceService) {
    previewService.getPreviewProduct().subscribe((previewProduct) => {
      this.previewProduct = previewProduct;
    });
  }
}
