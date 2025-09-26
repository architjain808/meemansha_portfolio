import { Component } from '@angular/core';
import { ToggleStepperComponent } from "../../components/toggle-stepper/toggle-stepper.component";
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { AllProductCard } from '../../constants/cardsData';

@Component({
  selector: 'app-pricing',
  imports: [ToggleStepperComponent, ProductCardComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  allCards = AllProductCard
}
