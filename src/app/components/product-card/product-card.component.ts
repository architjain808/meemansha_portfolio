import { Component, Input } from '@angular/core';


export interface ProductCard {
  id: number;
  mainImage: string;
  rating: number;
  title: string;
  subtitle: string;
  icon: string;
  productType: string;
  productTypeDesc: string,
  originalPrice: number;
  discountedPrice: number;
}
@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: ProductCard


}
