import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProfileBannerComponent } from "../../components/profile-banner/profile-banner.component";
import { MarqueeComponent } from "../../components/marquee/marquee.component";
import { AboutSectionComponent } from "../../components/about-section/about-section.component";
import { PricingComponent } from "../pricing/pricing.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, ProfileBannerComponent, MarqueeComponent, AboutSectionComponent, PricingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
